import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
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
    ColorBtn,
    GrayBtn,
} from './style';

interface IProductDetail {
    product_id?: string;
    image?: string;
    store_name?: string;
    product_name?: string;
    price?: number;
    shipping_fee: number;
    shipping_method: string;
    stock: number;
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
                        {product?.shipping_method === 'PARCEL'
                            ? '택배 배송'
                            : '직접 배송'}{' '}
                        /{' '}
                        {product?.shipping_fee === 0
                            ? '무료 배송'
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
                                            order_kind: 'direct_order',
                                            total:
                                                count * product?.price! +
                                                product?.shipping_fee!,
                                            order_product: [
                                                {
                                                    quantity: count,
                                                    image: product?.image,
                                                    store_name:
                                                        product?.store_name,
                                                    product_name:
                                                        product?.product_name,
                                                    shipping_fee:
                                                        product?.shipping_fee,
                                                    price: product?.price,
                                                },
                                            ],
                                        },
                                    });
                                }
                            }}
                            style={{
                                backgroundColor:
                                    loginType === 'SELLER' ||
                                    product?.stock === 0
                                        ? '#c4c4c4'
                                        : '#6997f7',
                                cursor:
                                    loginType === 'SELLER' ||
                                    product?.stock === 0
                                        ? 'default'
                                        : 'pointer',
                            }}
                            disabled={
                                loginType === 'SELLER' ||
                                (product?.stock === 0 && true)
                            }
                        >
                            {product?.stock === 0 ? '품절' : '바로 구매'}
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
                                    loginType === 'SELLER' ||
                                    product?.stock === 0
                                        ? '#c4c4c4'
                                        : '#6997f7',
                                cursor:
                                    loginType === 'SELLER' ||
                                    product?.stock === 0
                                        ? 'default'
                                        : 'pointer',
                            }}
                            disabled={
                                loginType === 'SELLER' ||
                                (product?.stock === 0 && true)
                            }
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
                        ok={() => (window.location.href = '/cart')}
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
