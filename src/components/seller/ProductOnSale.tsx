import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deleteProduct } from 'apis/seller';
import { IProductSeller } from 'GlobalType';
import { goToRoute } from 'utils';
import ModalContainer from 'components/modal/ModalContainer';
import Modal from 'components/modal/Modal';
import {
    Product,
    Content,
    ProductWrap,
    Img,
    TextWrap,
    Stock,
    Price,
    EditBtn,
    DeleteBtn,
} from './ProductOnSaleStyle';

const ProductOnSale = (product: IProductSeller) => {
    const { product_id, image, product_name, stock, price } = product;
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [closeModal, setCloseModal] = useState(false);

    const handleModal = () => {
        setCloseModal(!closeModal);
    };

    const { mutate } = useMutation(() => deleteProduct(`${product_id!}`), {
        onSuccess: () => queryClient.invalidateQueries('product'),
        onError: (err) => console.error(err),
    });

    return (
        <>
            <Product>
                <Content width="939px">
                    <ProductWrap onClick={() => goToRoute(`detail/${product_id}`)}>
                        <Img src={image} />
                        <TextWrap>
                            <p>{product_name}</p>
                            <Stock>재고 : {stock}개</Stock>
                        </TextWrap>
                    </ProductWrap>
                </Content>
                <Content width="451px">
                    <Price>{price?.toLocaleString('ko-KR')}원</Price>
                </Content>
                <Content width="205px">
                    <EditBtn
                        onClick={() => {
                            navigate('/seller/edit', { state: { product_id } });
                        }}
                    >
                        수정
                    </EditBtn>
                </Content>
                <Content width="205px">
                    <DeleteBtn onClick={handleModal}>삭제</DeleteBtn>
                </Content>
            </Product>
            {closeModal && (
                <ModalContainer>
                    <Modal
                        close={handleModal}
                        ok={mutate}
                        leftBtn="취소"
                        rightBtn="확인"
                        text="상품을 삭제 하시겠습니까?"
                    />
                </ModalContainer>
            )}
        </>
    );
};
export default ProductOnSale;
