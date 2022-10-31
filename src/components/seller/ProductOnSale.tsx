import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import ModalContainer from 'components/modal/ModalContainer';
import Modal from 'components/modal/Modal';
import styled from 'styled-components';

interface styledCompo {
    width?: string;
}

const Product = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    height: 103px;
    padding: 0 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    border-bottom: 1px solid #c4c4c4;
    &:last-child {
        border-radius: 0 0 5px 5px;
    }
`;

const Content = styled.span`
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const ProductWrap = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Img = styled.img`
    width: 70px;
    height: 70px;
    margin: 0 20px 0 10px;
    border-radius: 50%;
    object-fit: contain;
`;

const TextWrap = styled.div`
    text-align: left;
`;

const Stock = styled.p`
    margin-top: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Price = styled.strong`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const EditBtn = styled.button.attrs({
    type: 'button',
})`
    background-color: #6997f7;
    width: 80px;
    height: 40px;
    color: #ffffff;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    :hover {
        background-color: #789ff3;
    }
    @media screen and (max-width: 970px) {
        width: 67px;
    }
`;
const DeleteBtn = styled(EditBtn)`
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
    color: #767676;
    :hover {
        background-color: #ffffff;
        border: 1px solid #767676;
        color: #000000;
    }
`;

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

    const token = localStorage.getItem('token');

    const deleteProduct = async () => {
        try {
            const url = BASE_URL + `/products/${data.product_id}/`;
            const response = await axios.delete(url, {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            });
            console.log(response);
            if (response.status === 204) {
                window.location.reload();
            }
        } catch (err) {
            console.error(err);
        }
    };

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
                        ok={deleteProduct}
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
