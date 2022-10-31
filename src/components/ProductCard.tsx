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
    @media screen and (max-width: 1000px) {
        height: 480px;
    }
    @media screen and (max-width: 620px) {
        flex-wrap: wrap;
        width: 100%;
        height: 600px;
        margin: 0 auto;
    }
`;

const ProductImg = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    margin-left: 50px;
    @media screen and (max-width: 1000px) {
        margin-left: 25px;
    }
    @media screen and (max-width: 620px) {
        width: 100%;
        margin: 20px 4px 30px;
    }
`;

const ProductName = styled.p`
    margin: 16px 0 20px;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    @media screen and (max-width: 1000px) {
        font-size: 28px;
        line-height: 36px;
    }
    @media screen and (min-width: 620px) and (max-width: 840px) {
        font-size: 25px;
        line-height: 30px;
    }
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
    @media screen and (min-width: 620px) and (max-width: 1000px) {
        font-size: 28px;
        line-height: 33px;
    }
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
    @media screen and (max-width: 620px) {
        margin-top: 70px;
    }
`;

const CountContainer = styled.div`
    height: 110px;
    padding-top: 27px;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
`;

const TotalWrap = styled.div`
    margin: 32px 0 22px;
    text-align: right;
    @media screen and (min-width: 620px) and (max-width: 1000px) {
        margin: 22px 0 22px;
    }
`;

const TotalTitle = styled.span`
    float: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 60px;
    @media screen and (min-width: 620px) and (max-width: 1000px) {
        line-height: 45px;
    }
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
    @media screen and (min-width: 620px) and (max-width: 1000px) {
        font-size: 28px;
        line-height: 36px;
        margin-left: 18px;
    }
`;
const TotalWon = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const BtnContainer = styled.div`
    display: flex;
    width: 100%;
`;

const ColorBtn = styled.button.attrs({
    type: 'button',
})`
    background-color: #6997f7;
    width: 100%;
    padding: 19px 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border-radius: 5px;
`;

const GrayBtn = styled(ColorBtn)`
    background-color: #767676;
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
    const [loginModal, setLoginModal] = useState(false);
    const [addedModal, setAddedModal] = useState(false);
    const [addMoreModal, setAddMoreModal] = useState(false);
    const [stockModal, setStockModal] = useState(false);
    const loginType = localStorage.getItem('login_type');

    const handleLoginModal = () => {
        setLoginModal(!loginModal);
    };
    const handleAddedModal = () => {
        setAddedModal(!addedModal);
    };
    const handleAddMoreModal = () => {
        setAddMoreModal(!addMoreModal);
    };
    const handleStockModal = () => {
        setStockModal(!stockModal);
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

    const handleGetCart = async () => {
        try {
            const url: string = BASE_URL + '/cart/';
            const response = await axios.get(url, {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            });
            console.log(response);
            interface ICartData {
                product_id: number;
            }
            const InCart = response.data.results.map(
                (cart: ICartData) => cart.product_id,
            );
            console.log('InCart', InCart);
            const IntId = parseInt(product_id!);
            const checkCart = InCart.includes(IntId);
            console.log('checkCart', checkCart);
            checkCart === true ? handleAddMoreModal() : postCart(true);
        } catch (err) {
            console.error(err);
        }
    };

    const postCart = async (checkCart: boolean) => {
        try {
            const url = BASE_URL + '/cart/';
            const response = await axios.post(
                url,
                {
                    product_id: product_id,
                    quantity: count,
                    check: checkCart,
                },
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                },
            );
            console.log(response);
            if (response.status === 201) {
                handleAddedModal();
            }
        } catch (err) {
            console.error(err);
            handleStockModal();
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
                    <BtnContainer>
                        <ColorBtn
                            onClick={() => {
                                if (!token) {
                                    handleLoginModal();
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
                            style={{
                                backgroundColor:
                                    loginType === 'SELLER'
                                        ? '#c4c4c4'
                                        : '#6997f7',
                                cursor:
                                    loginType === 'SELLER'
                                        ? 'default'
                                        : 'pointer',
                            }}
                            disabled={loginType === 'SELLER' && true}
                        >
                            바로 구매
                        </ColorBtn>
                        <GrayBtn
                            onClick={() => {
                                if (!token) {
                                    handleLoginModal();
                                } else {
                                    handleGetCart();
                                }
                            }}
                            style={{
                                backgroundColor:
                                    loginType === 'SELLER'
                                        ? '#c4c4c4'
                                        : '#6997f7',
                                cursor:
                                    loginType === 'SELLER'
                                        ? 'default'
                                        : 'pointer',
                            }}
                            disabled={loginType === 'SELLER' && true}
                        >
                            장바구니
                        </GrayBtn>
                    </BtnContainer>
                </div>
            </Div>
            {loginModal && (
                <ModalContainer>
                    <Modal
                        close={handleLoginModal}
                        ok={() => (window.location.href = '/login')}
                        leftBtn="아니오"
                        rightBtn="예"
                        text="로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                    />
                </ModalContainer>
            )}
            {addedModal && (
                <ModalContainer>
                    <Modal
                        close={handleAddedModal}
                        ok={() => (window.location.href = '/shoppingcart')}
                        leftBtn="아니오"
                        rightBtn="예"
                        text="장바구니에 상품이 담겼습니다. 장바구니로 가시겠습니까?"
                    />
                </ModalContainer>
            )}
            {addMoreModal && (
                <ModalContainer>
                    <Modal
                        close={handleAddMoreModal}
                        ok={() => {
                            postCart(false);
                            handleAddMoreModal();
                        }}
                        leftBtn="아니오"
                        rightBtn="예"
                        text="장바구니에 동일한 상품이 있습니다. 더 추가하시겠습니까?"
                    />
                </ModalContainer>
            )}
            {stockModal && (
                <ModalContainer>
                    <Modal
                        close={handleStockModal}
                        ok={handleStockModal}
                        rightBtn="확인"
                        text="현재 재고보다 더 많은 수량을 담을 수 없습니다."
                        leftNone="none"
                    />
                </ModalContainer>
            )}
        </Wrap>
    );
};
export default ProductCard;
