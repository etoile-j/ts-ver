import { IProduct, ICheckedItems } from 'GlobalType';
import { filterAllItems } from 'utils';
import { TitleLi, Content } from './CartTitleStyle';

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
            <Content width="611px">상품정보</Content>
            <Content width="248px">수량</Content>
            <Content width="329px">상품금액</Content>
        </TitleLi>
    );
};
export default CartTitle;
