import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import CountButton from 'components/CountButton';
import Modal from 'components/modal/Modal';
import ModalContainer from 'components/modal/ModalContainer';
import DeleteIcon from '../../assets/icon-delete.svg';
import styled from 'styled-components';

interface styledCompo {
    width?: string;
}

const Content = styled.span`
    position: relative;
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const Wrap = styled.div`
    display: flex;
    text-align: left;
`;

const ProductImg = styled.img`
    width: 160px;
    height: 160px;
    margin-right: 36px;
    border-radius: 10px;
    object-fit: contain;
`;

const SellerName = styled.p`
    margin-top: 5px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const ProductName = styled.p`
    margin: 10px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const Price = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const DeliveryText = styled.p`
    position: absolute;
    bottom: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const Count = styled.button`
    width: 50px;
    height: 50px;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
`;

const CountBtn = styled.button.attrs({ type: 'button' })`
    position: relative;
    width: 50px;
    height: 50px;
    margin: 30px 0;
    border: 1px solid #c4c4c4;
    border-radius: 5px 0 0 5px;
    color: transparent;
    font-weight: 500;
    font-size: 18px;
    ::before {
        content: '';
        background-color: #c4c4c4;
        position: absolute;
        top: 24px;
        left: 15px;
        width: 18px;
        height: 2px;
    }
`;

const CountBtnplus = styled(CountBtn)`
    border-radius: 0 5px 5px 0;
    ::after {
        content: '';
        background-color: #c4c4c4;
        position: absolute;
        top: 16px;
        left: 23px;
        width: 2px;
        height: 18px;
    }
`;

const InPrice = styled.p`
    margin-bottom: 26px;
    color: red;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

const OrderBtn = styled.button`
    background-color: #6997f7;
    width: 130px;
    padding: 10px 0;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const DeleteBtn = styled.button.attrs({ type: 'button' })`
    position: absolute;
    top: -40px;
    right: 14px;
    width: 22px;
    height: 22px;
    background-image: url(${DeleteIcon});
    background-repeat: no-repeat;
    background-size: 22px 22px;
`;

interface ICartData {
    cart_item_id: number;
    product_id: number;
    quantity: number;
}

const CartContent = (cartData: ICartData | any) => {
    const [detail, setDetail] = useState<IDetail>();
    const [countModal, setCountModal] = useState(false);
    const [count, setCount] = useState(cartData.quantity);
    const [deleteModal, setDeleteModal] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    };

    const handleCountModal = () => {
        setCountModal(!countModal);
    };
    interface IDetail {
        product_id?: string;
        image?: string;
        store_name?: string;
        product_name?: string;
        price?: number;
        shipping_fee: number;
        stock: number;
    }
    // console.log(cartData.result.cart_item_id);
    console.log(cartData.cart_item_id);

    const handleGetDetail = async () => {
        try {
            const url: string = BASE_URL + `/products/${cartData.product_id}/`;
            const response = await axios.get(url);
            setDetail(response.data);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        handleGetDetail();
    }, []);

    const handelPutCount = async () => {
        try {
            const url = BASE_URL + `/cart/${cartData.cart_item_id}/`;
            const response = await axios.put(
                url,
                {
                    product_id: cartData.product_id,
                    quantity: count,
                    is_active: true,
                },
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                },
            );
            console.log(response);
            if (response.status === 200) {
                handleCountModal();
                window.location.reload();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteCart = async () => {
        try {
            const url = BASE_URL + `/cart/${cartData.cart_item_id}/`;
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
            <Content width="90px">
                <input type="radio"></input>
            </Content>
            <Content width="611px">
                <Wrap>
                    <ProductImg src={detail?.image}></ProductImg>
                    <div>
                        <SellerName>{detail?.store_name}</SellerName>
                        <ProductName>{detail?.product_name}</ProductName>
                        <Price>
                            {detail?.price?.toLocaleString('ko-KR')}
                            <span>원</span>
                        </Price>
                        <DeliveryText>
                            택배배송 /{' '}
                            {detail?.shipping_fee === 0
                                ? '무료배송'
                                : `${detail?.shipping_fee.toLocaleString(
                                      'ko-KR',
                                  )}원`}
                        </DeliveryText>
                    </div>
                </Wrap>
            </Content>
            <Content width="248px">
                <CountBtn onClick={handleCountModal}>-</CountBtn>
                <Count>{cartData.quantity}</Count>
                <CountBtnplus onClick={handleCountModal}>+</CountBtnplus>
            </Content>
            <Content width="329px">
                <InPrice>
                    {(
                        detail?.price! * cartData.quantity +
                        detail?.shipping_fee!
                    ).toLocaleString('ko-KR')}
                    <span>원</span>
                </InPrice>
                <OrderBtn
                    onClick={() =>
                        navigate('/payment', {
                            state: {
                                product_id: detail?.product_id,
                                totalCount: cartData.quantity,
                                order_kind: 'cart_one_order',
                                image: detail?.image,
                                SellerName: detail?.store_name,
                                productName: detail?.product_name,
                                shippingFee: detail?.shipping_fee,
                                price: detail?.price,
                            },
                        })
                    }
                >
                    주문하기
                </OrderBtn>
                <DeleteBtn onClick={handleDeleteModal} />
            </Content>
            {deleteModal ? (
                <ModalContainer>
                    <Modal
                        close={handleDeleteModal}
                        ok={handleDeleteCart}
                        leftBtn="취소"
                        rightBtn="확인"
                        text="상품을 삭제 하시겠습니까?"
                    />
                </ModalContainer>
            ) : null}
            {countModal ? (
                <ModalContainer>
                    <Modal
                        close={handleCountModal}
                        ok={handelPutCount}
                        leftBtn="취소"
                        rightBtn="수정"
                        component={
                            <CountButton
                                count={count}
                                setCount={setCount}
                                stocks={detail?.stock}
                            />
                        }
                    />
                </ModalContainer>
            ) : null}
        </>
    );
};
export default CartContent;
