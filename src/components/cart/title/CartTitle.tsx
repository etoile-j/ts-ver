import { useMutation } from 'react-query';
import queryClient from 'queries/queryClient';
import { deleteAllCartItems } from 'apis/cart';
import { IProduct, ICheckedItems } from 'GlobalType';
import { filterAllItems } from 'utils';
import { TitleLi, Content, ContentWrap, AllDeleteBtn } from './CartTitleStyle';

interface ICartTitleProps {
    cartProductDetails: IProduct[];
    checkedItems: ICheckedItems[];
    setCheckedItems: React.Dispatch<React.SetStateAction<ICheckedItems[]>>;
}

const CartTitle = (cartTitleProps: ICartTitleProps) => {
    const { cartProductDetails, checkedItems, setCheckedItems } = cartTitleProps;

    const handleAllCheck = (checked: boolean) => {
        if (checked) {
            const allItems = filterAllItems(cartProductDetails);
            setCheckedItems(allItems);
        } else {
            setCheckedItems([]);
        }
    };

    const { mutate: mutateDeleteAll } = useMutation(() => deleteAllCartItems(), {
        onSuccess: () => queryClient.invalidateQueries(['cartData']),
        onError: (err) => console.error(err),
    });

    const handleDeleteAll = () => {
        mutateDeleteAll();
    };

    return (
        <TitleLi>
            <Content width="90px">
                <label htmlFor="toggleAll" />
                <input
                    id="toggleAll"
                    type="checkbox"
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={
                        cartProductDetails.length > 0 &&
                        checkedItems.length === cartProductDetails.length
                    }
                />
            </Content>
            <Content width="611px">
                <ContentWrap>
                    <span style={{ display: 'flex', alignItems: 'center', width: '73px' }}>
                        <AllDeleteBtn onClick={handleDeleteAll}>모두 비우기</AllDeleteBtn>
                    </span>
                    <span style={{ textAlign: 'center' }}>상품정보</span>
                    <span></span>
                </ContentWrap>
            </Content>
            <Content width="248px">수량</Content>
            <Content width="329px">상품금액</Content>
        </TitleLi>
    );
};
export default CartTitle;
