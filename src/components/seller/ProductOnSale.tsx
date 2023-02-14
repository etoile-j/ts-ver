import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deleteProduct } from 'apis/seller';
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

interface IData {
    product_id?: string;
    image?: string;
    product_name?: string;
    stock?: number;
    price?: number;
}

const ProductOnSale = (data: IData) => {
    const navigate = useNavigate();
    const [closeModal, setCloseModal] = useState(false);

    const handleModal = () => {
        setCloseModal(!closeModal);
    };

    const queryClient = useQueryClient();
    const { mutate } = useMutation(() => deleteProduct(data.product_id!), {
        onSuccess: () => {
            queryClient.invalidateQueries('product');
        },
        onError: (err) => {
            console.error(err);
        },
    });

    return (
        <>
            <Product>
                <Content width="939px">
                    <ProductWrap
                        onClick={() =>
                            (window.location.href = `detail/${data.product_id}`)
                        }
                    >
                        <Img src={data.image} />
                        <TextWrap>
                            <p>{data.product_name}</p>
                            <Stock>재고 : {data.stock}개</Stock>
                        </TextWrap>
                    </ProductWrap>
                </Content>
                <Content width="451px">
                    <Price>{data.price?.toLocaleString('ko-KR')}원</Price>
                </Content>
                <Content width="205px">
                    <EditBtn
                        onClick={() => {
                            navigate('/seller/edit', {
                                state: {
                                    product_id: data.product_id,
                                },
                            });
                        }}
                    >
                        수정
                    </EditBtn>
                </Content>
                <Content width="205px">
                    <DeleteBtn onClick={handleModal}>삭제</DeleteBtn>
                </Content>
            </Product>
            {closeModal ? (
                <ModalContainer>
                    <Modal
                        close={handleModal}
                        ok={mutate}
                        leftBtn="취소"
                        rightBtn="확인"
                        text="상품을 삭제 하시겠습니까?"
                    />
                </ModalContainer>
            ) : null}
        </>
    );
};
export default ProductOnSale;
