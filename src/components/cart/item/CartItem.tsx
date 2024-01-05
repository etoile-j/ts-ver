import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deleteCartItem, putCartItemQuantity } from 'apis/cart';
import { getProductDetail } from 'apis/products';
import { IProduct, ICheckedItems } from 'GlobalType';
import CountButton from 'components/common/CountButton';
import Modal from 'components/modal/Modal';
import ModalContainer from 'components/modal/ModalContainer';
import {
    Content,
    Wrap,
    ProductImg,
    SellerName,
    ProductName,
    Price,
    DeliveryText,
    Count,
    CountBtn,
    CountBtnplus,
    InPrice,
    OrderBtn,
    DeleteBtn,
} from './CartItemStyle';

interface ICartItemProps {
    detail: IProduct;
    checkedItems: ICheckedItems[];
    setCheckedItems: React.Dispatch<React.SetStateAction<ICheckedItems[]>>;

    // changeActive: boolean;
    // putInfo: boolean;
}

const CartItem = ({ detail, checkedItems, setCheckedItems }: ICartItemProps) => {
    const {
        cart_item_id,
        product_id,
        image,
        store_name,
        product_name,
        price,
        shipping_fee,
        shipping_method,
        stock,
        quantity,
    } = detail;

    const [countModal, setCountModal] = useState(false);
    const [count, setCount] = useState(quantity);
    const [deleteModal, setDeleteModal] = useState(false);
    const navigate = useNavigate();

    const handleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    };

    const handleCountModal = () => {
        setCountModal(!countModal);
    };

    const queryClient = useQueryClient();
    // const { mutate } = useMutation(
    //     (bool) =>
    //         putCartItemQuantity(true, cartData.cart_item_id, count, cartData.product_id),
    //     {
    //         onSuccess: () => {
    //             if (cartData.checkItems.includes(cartData.cart_item_id) === true) {
    //                 cartData.setTotalPrice(
    //                     (pre) =>
    //                         pre -
    //                         detail?.price! * cartData.quantity +
    //                         detail?.price! * count,
    //                 );
    //             }
    //             queryClient.invalidateQueries(['cartData']);
    //             handleCountModal();
    //         },
    //         onError: (err) => {
    //             console.error(err);
    //         },
    //     },
    // );

    // const { mutate: mutateDel } = useMutation(
    //     () => deleteCartItem(cartData.cart_item_id),
    //     {
    //         onSuccess: () => {
    //             if (cartData.checkItems.includes(cartData.cart_item_id) === true) {
    //                 handleSingleCheck(false, cartData.cart_item_id);
    //             }
    //             queryClient.invalidateQueries(['cartData']);
    //         },
    //         onError: (err) => {
    //             console.error(err);
    //         },
    //     },
    // );

    const handleSingleCheck = (checked: boolean) => {
        if (checked) {
            setCheckedItems([
                ...checkedItems,
                { product_id, quantity, price, shipping_fee },
            ]);
        } else {
            setCheckedItems(
                checkedItems.filter((item) => item.product_id !== product_id),
            );
        }
    };

    // if (
    //     cartData.changeActive &&
    //     cartData.checkItems.includes(cartData.cart_item_id) === false
    // ) {
    //     putCartItemQuantity(false);
    // }

    // useEffect(() => {
    //     if (cartData.checkItems.includes(cartData.cart_item_id) === true) {
    //         cartData.setCheckedproduct((pre: any) => [...pre, detail]);
    //     }
    // }, [cartData.putInfo]);

    return (
        <>
            <Content width="90px">
                <label htmlFor={`product_${product_id}`} />
                <input
                    id={`product_${product_id}`}
                    type="checkbox"
                    onChange={(e) => handleSingleCheck(e.target.checked)}
                    checked={checkedItems.some((item) => item.product_id === product_id)}
                />
            </Content>
            <Content width="611px">
                <Wrap>
                    <ProductImg src={image}></ProductImg>
                    <div>
                        <SellerName>{store_name}</SellerName>
                        <ProductName>{product_name}</ProductName>
                        <Price>
                            {price.toLocaleString('ko-KR')}
                            <span>원</span>
                        </Price>
                        <DeliveryText>
                            택배배송 /{' '}
                            {shipping_fee
                                ? `${shipping_fee.toLocaleString('ko-KR')}원`
                                : '무료배송'}
                        </DeliveryText>
                    </div>
                </Wrap>
            </Content>
            <Content width="248px">
                <CountBtn onClick={handleCountModal}>-</CountBtn>
                <Count>{quantity}</Count>
                <CountBtnplus onClick={handleCountModal}>+</CountBtnplus>
            </Content>
            <Content width="329px">
                <InPrice>
                    {(price * quantity + shipping_fee).toLocaleString('ko-KR')}
                    <span>원</span>
                </InPrice>
                <OrderBtn
                    onClick={() =>
                        navigate('/payment', {
                            state: {
                                product_id,
                                order_kind: 'cart_one_order',
                                total: quantity * price + shipping_fee,
                                order_product: [
                                    {
                                        quantity,
                                        image,
                                        store_name,
                                        product_name,
                                        shipping_fee,
                                        price,
                                    },
                                ],
                            },
                        })
                    }
                >
                    주문하기
                </OrderBtn>
                <DeleteBtn onClick={handleDeleteModal} />
            </Content>
            {deleteModal && (
                <ModalContainer>
                    <Modal
                        close={handleDeleteModal}
                        // ok={mutateDel}
                        leftBtn="취소"
                        rightBtn="확인"
                        text="상품을 삭제 하시겠습니까?"
                    />
                </ModalContainer>
            )}
            {countModal && (
                <ModalContainer>
                    <Modal
                        close={handleCountModal}
                        // ok={mutate}
                        leftBtn="취소"
                        rightBtn="수정"
                        component={
                            <CountButton
                                count={count}
                                setCount={setCount}
                                stocks={stock}
                            />
                        }
                    />
                </ModalContainer>
            )}
        </>
    );
};
export default CartItem;
