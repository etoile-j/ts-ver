import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deleteCartItem, putCartItemQuantity } from 'apis/cart';
import { getProductDetail } from 'apis/products';
import { IProduct } from 'GlobalType';
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

interface ICartData {
    cart_item_id: number;
    product_id: number;
    quantity: number;

    // checkItems: number[];
    // setCheckItems: React.Dispatch<React.SetStateAction<number[]>>;
    // changeActive: boolean;
    // setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    // setTotalShipping: React.Dispatch<React.SetStateAction<number>>;
    // handleAllCheck: (checked: boolean) => void;
    // allSwitch: boolean;
    // setCheckedproduct: React.Dispatch<React.SetStateAction<any>>;
    // putInfo: boolean;
}

const CartItem = (cartData: ICartData) => {
    const [detail, setDetail] = useState<IProduct>();
    const [countModal, setCountModal] = useState(false);
    const [count, setCount] = useState(cartData.quantity);
    const [deleteModal, setDeleteModal] = useState(false);
    const navigate = useNavigate();

    const handleDeleteModal = () => {
        setDeleteModal(!deleteModal);
    };

    const handleCountModal = () => {
        setCountModal(!countModal);
    };

    useEffect(() => {
        const handleGetProductDetail = async () => {
            const detailData = await getProductDetail(cartData.product_id.toString());
            setDetail(detailData);
            setDetail((pre: any) => ({
                ...pre,
                quantity: cartData.quantity,
            }));
        };
        handleGetProductDetail();
    }, []);

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

    // const handleSingleCheck = (checked: boolean, id: number) => {
    //     if (checked) {
    //         cartData.setCheckItems([...cartData.checkItems, id]);
    //         cartData.setTotalPrice((pre) => pre + detail?.price! * cartData.quantity);
    //         cartData.setTotalShipping((pre) => pre + detail?.shipping_fee!);
    //     } else {
    //         cartData.setCheckItems(cartData.checkItems.filter((el) => el !== id));
    //         cartData.setTotalPrice((pre) => pre - detail?.price! * cartData.quantity);
    //         cartData.setTotalShipping((pre) => pre - detail?.shipping_fee!);
    //     }
    // };

    // if (
    //     cartData.changeActive &&
    //     cartData.checkItems.includes(cartData.cart_item_id) === false
    // ) {
    //     putCartItemQuantity(false);
    // }

    // useEffect(() => {
    //     if (cartData.checkItems.includes(cartData.cart_item_id) === true) {
    //         cartData.setTotalPrice((pre) => pre + detail?.price! * cartData.quantity);
    //         cartData.setTotalShipping((pre) => pre + detail?.shipping_fee!);
    //     }
    // }, [cartData.allSwitch]);

    // useEffect(() => {
    //     if (cartData.checkItems.includes(cartData.cart_item_id) === true) {
    //         cartData.setCheckedproduct((pre: any) => [...pre, detail]);
    //     }
    // }, [cartData.putInfo]);

    return (
        <>
            <Content width="90px">
                <input
                    type="checkbox"
                    name="order"
                    // onChange={(e) =>
                    //     handleSingleCheck(e.target.checked, cartData.cart_item_id)
                    // }
                    // checked={cartData.checkItems.includes(cartData.cart_item_id)}
                ></input>
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
                                : `${detail?.shipping_fee.toLocaleString('ko-KR')}원`}
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
                                order_kind: 'cart_one_order',
                                total:
                                    cartData.quantity * detail?.price! +
                                    detail?.shipping_fee!,
                                order_product: [
                                    {
                                        quantity: cartData.quantity,
                                        image: detail?.image,
                                        store_name: detail?.store_name,
                                        product_name: detail?.product_name,
                                        shipping_fee: detail?.shipping_fee,
                                        price: detail?.price,
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
                                stocks={detail?.stock}
                            />
                        }
                    />
                </ModalContainer>
            )}
        </>
    );
};
export default CartItem;
