import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail } from 'apis/products';
import { getCartItem, postCartItem } from 'apis/cart';
import { getLocalStorage } from 'utils/storage';
import { IProduct, ICartData } from 'GlobalType';
import CountButton from '../common/CountButton';
import Modal from '../modal/Modal';
import ModalContainer from '../modal/ModalContainer';
import {
    Wrap,
    ProductImg,
    Div,
    ProductName,
    SellerName,
    Price,
    Won,
    DeliveryText,
    CountContainer,
    TotalWrap,
    TotalTitle,
    TotalAmount,
    Number,
    TotalPrice,
    TotalWon,
    BtnContainer,
    DirectBuyBtn,
    CartBtn,
} from './style';

const ProductCard = () => {
    const DEFAULT_QUANTITY = 1;
    const { product_id } = useParams();
    const navigate = useNavigate();
    const [count, setCount] = useState(DEFAULT_QUANTITY);
    const [product, setProduct] = useState<IProduct>();
    const {
        image,
        price,
        product_name,
        shipping_method,
        shipping_fee,
        stock,
        store_name,
    } = product || {};

    const [loginModal, setLoginModal] = useState(false);
    const [addedModal, setAddedModal] = useState(false);
    const [addMoreModal, setAddMoreModal] = useState(false);
    const [stockModal, setStockModal] = useState(false);
    const loginType = getLocalStorage('login_type');
    const token = getLocalStorage('token');

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

    useEffect(() => {
        (async () => {
            if (typeof product_id === 'string') {
                const productDetail = await getProductDetail(product_id);
                setProduct(productDetail);
            }
        })();
    }, []);

    const handleCheckIsInCart = async () => {
        const cartItems = await getCartItem();
        if (!cartItems.length) {
            return handlePostCart(true);
        }

        const checkCart = cartItems.some(
            (cart: ICartData) => cart.product_id === parseInt(product_id!, 10),
        );
        if (checkCart) {
            handleAddMoreModal();
        } else {
            handlePostCart(true);
        }
    };

    const handlePostCart = async (checkCart: boolean) => {
        const requestData = {
            product_id: product_id,
            quantity: count,
            check: checkCart,
        };

        const responseStatusCode = await postCartItem(requestData);
        if (responseStatusCode === 201) {
            handleAddedModal();
        } else {
            handleStockModal();
        }
    };

    const handleDirectBuy = () => {
        if (!token) {
            return handleLoginModal();
        }

        navigate('/payment', {
            state: {
                product_id: product_id,
                order_kind: 'direct_order',
                total: count * price! + shipping_fee!,
                order_product: [
                    {
                        quantity: count,
                        image: image,
                        store_name: store_name,
                        product_name: product_name,
                        shipping_fee: shipping_fee,
                        price: price,
                    },
                ],
            },
        });
    };

    return (
        <Wrap>
            <ProductImg src={image}></ProductImg>
            <Div>
                <div>
                    <SellerName>{store_name}</SellerName>
                    <ProductName>{product_name}</ProductName>
                    <Price>
                        {price && price.toLocaleString('ko-KR')}
                        <Won>원</Won>
                    </Price>
                </div>
                <div>
                    <DeliveryText>
                        {shipping_method === 'PARCEL' ? '택배 배송' : '직접 배송'} /{' '}
                        {shipping_fee === 0
                            ? '무료 배송'
                            : shipping_fee && `${shipping_fee.toLocaleString('ko-KR')}원`}
                    </DeliveryText>
                    <CountContainer>
                        <CountButton stocks={stock} count={count} setCount={setCount} />
                    </CountContainer>
                    <TotalWrap>
                        <TotalTitle>총 상품 금액</TotalTitle>
                        <TotalAmount>
                            총 수량 <Number>{count}</Number>개
                        </TotalAmount>
                        <TotalPrice>
                            {price && (price! * count).toLocaleString('ko-KR')}
                            <TotalWon>원</TotalWon>
                        </TotalPrice>
                    </TotalWrap>
                    <BtnContainer>
                        <DirectBuyBtn
                            onClick={handleDirectBuy}
                            disabled={loginType === 'SELLER' || stock === 0}
                        >
                            {stock === 0 ? '품절' : '바로 구매'}
                        </DirectBuyBtn>
                        <CartBtn
                            onClick={() => {
                                if (!token) {
                                    handleLoginModal();
                                } else {
                                    handleCheckIsInCart();
                                }
                            }}
                            disabled={loginType === 'SELLER' || stock === 0}
                        >
                            장바구니
                        </CartBtn>
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
                        text="로그인이 필요한 서비스입니다."
                        text2="로그인 하시겠습니까?"
                    />
                </ModalContainer>
            )}
            {addedModal && (
                <ModalContainer>
                    <Modal
                        close={handleAddedModal}
                        ok={() => (window.location.href = '/cart')}
                        leftBtn="아니오"
                        rightBtn="예"
                        text="장바구니에 상품이 담겼습니다."
                        text2="장바구니로 가시겠습니까?"
                    />
                </ModalContainer>
            )}
            {addMoreModal && (
                <ModalContainer>
                    <Modal
                        close={handleAddMoreModal}
                        ok={() => {
                            handlePostCart(false);
                            handleAddMoreModal();
                        }}
                        leftBtn="아니오"
                        rightBtn="예"
                        text="장바구니에 동일한 상품이 있습니다."
                        text2="더 추가하시겠습니까?"
                    />
                </ModalContainer>
            )}
            {stockModal && (
                <ModalContainer>
                    <Modal
                        close={handleStockModal}
                        ok={handleStockModal}
                        rightBtn="확인"
                        text="현재 재고보다 더 많은 수량을"
                        text2="담을 수 없습니다."
                        leftNone="none"
                    />
                </ModalContainer>
            )}
        </Wrap>
    );
};
export default ProductCard;
