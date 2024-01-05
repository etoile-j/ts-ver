import { IProduct, ICheckedItems } from 'GlobalType';
import { TitleLi, Content } from './CartTitleStyle';

interface ICartTitleProps {
    cartCount: number | null;
    cartProductDetails: IProduct[];
    checkedItems: ICheckedItems[];
    setCheckedItems: React.Dispatch<React.SetStateAction<ICheckedItems[]>>;
}

const CartTitle = ({
    cartCount,
    cartProductDetails,
    checkedItems,
    setCheckedItems,
}: ICartTitleProps) => {
    const makeAllCheck = async (productDetails: ICheckedItems[]) => {
        const allItems = productDetails.map(
            ({ product_id, quantity, price, shipping_fee }) => {
                return { product_id, quantity, price, shipping_fee };
            },
        );
        setCheckedItems(allItems);
    };

    const handleAllCheck = (checked: boolean) => {
        if (checked) {
            makeAllCheck(cartProductDetails);
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
                    checked={!!cartCount && checkedItems.length === cartCount}
                />
            </Content>
            <Content width="611px">상품정보</Content>
            <Content width="248px">수량</Content>
            <Content width="329px">상품금액</Content>
        </TitleLi>
    );
};
export default CartTitle;
