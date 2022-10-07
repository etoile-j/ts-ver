import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import CountButton from './CountButton';
import Modal from './modal/Modal';
import ModalContainer from './modal/ModalContainer';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    height: 600px;
`;

const ProductImg = styled.img`
    float: left;
    width: 600px;
    height: 600px;
    object-fit: cover;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 50px;
`;

const ProductName = styled.p`
    margin: 16px 0 20px;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
`;

const SellerName = styled.p`
    color: #767676;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const Price = styled.p`
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
`;
const Won = styled.span`
    margin-left: 2px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const DeliveryText = styled.p`
    margin-bottom: 20px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const CountContainer = styled.div`
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
`;

const TotalWrap = styled.div`
    margin: 32px 0 22px;
    text-align: right;
`;

const TotalTitle = styled.span`
    float: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 60px;
`;

const TotalAmount = styled.span`
    color: #767676;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;
const Number = styled.strong`
    color: #6997f7;
    font-weight: 700;
`;

const TotalPrice = styled.strong`
    margin-left: 28px;
    color: #6997f7;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
`;
const TotalWon = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const ColorBtn = styled.button.attrs({
    type: 'button',
})`
    background-color: #6997f7;
    width: 416px;
    padding: 19px 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border-radius: 5px;
`;

const GrayBtn = styled(ColorBtn)`
    background-color: #767676;
    width: 200px;
    margin-left: 14px;
`;

interface IProductDetail {
    product_id?: string;
    image?: string;
    store_name?: string;
    product_name?: string;
    price?: number;
    shipping_fee: number;
    stock: number;
}

interface IDirectOrder {
    product_id: number;
    totalCount: number;
    order_kind: string;
}

const ProductCard = () => {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState<IProductDetail>();
    const { product_id } = useParams();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => {
        setOpenModal(!openModal);
    };

    const getProductDetail = async () => {
        try {
            const response = await axios.get(
                BASE_URL + `/products/${product_id}/`,
            );
            console.log(response);
            setProduct(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getProductDetail();
    }, []);

    const token = localStorage.getItem('token');

    const postCart = async () => {
        try {
            const url = BASE_URL + '/cart/';
            const response = await axios.post(
                url,
                {
                    product_id: product_id,
                    quantity: count,
                    check: true,
                },
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                },
            );
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Wrap>
            <ProductImg src={product?.image}></ProductImg>
            <Div>
                <div>
                    <SellerName>{product?.store_name}</SellerName>
                    <ProductName>{product?.product_name}</ProductName>
                    <Price>
                        {product?.price?.toLocaleString('ko-KR')}
                        <Won>원</Won>
                    </Price>
                </div>
                <div>
                    <DeliveryText>
                        택배배송 /{' '}
                        {product?.shipping_fee === 0
                            ? '무료배송'
                            : `${product?.shipping_fee.toLocaleString(
                                  'ko-KR',
                              )}원`}
                    </DeliveryText>
                    <CountContainer>
                        <CountButton
                            stocks={product?.stock}
                            count={count}
                            setCount={setCount}
                        />
                    </CountContainer>
                    <TotalWrap>
                        <TotalTitle>총 상품 금액</TotalTitle>
                        <TotalAmount>
                            총 수량 <Number>{count}</Number>개
                        </TotalAmount>
                        <TotalPrice>
                            {(product?.price! * count).toLocaleString('ko-KR')}
                            <TotalWon>원</TotalWon>
                        </TotalPrice>
                    </TotalWrap>
                    <div>
                        <ColorBtn
                            onClick={() => {
                                if (!token) {
                                    handleModal();
                                } else {
                                    navigate('/payment', {
                                        state: {
                                            product_id: product_id,
                                            totalCount: count,
                                            order_kind: 'direct_order',
                                            image: product?.image,
                                            SellerName: product?.store_name,
                                            productName: product?.product_name,
                                            shippingFee: product?.shipping_fee,
                                            price: product?.price,
                                        },
                                    });
                                }
                            }}
                        >
                            바로 구매
                        </ColorBtn>
                        <GrayBtn
                            onClick={() => {
                                if (!token) {
                                    handleModal();
                                } else {
                                    postCart();
                                }
                            }}
                        >
                            장바구니
                        </GrayBtn>
                    </div>
                </div>
            </Div>
            {openModal ? (
                <ModalContainer>
                    <Modal
                        close={handleModal}
                        ok={() => (window.location.href = '/login')}
                        leftBtn="아니오"
                        rightBtn="예"
                        text="로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                    />
                </ModalContainer>
            ) : null}
        </Wrap>
    );
};
export default ProductCard;
