import { TitleLi, Content } from './style';
const CartTitle = () => {
    return (
        <TitleLi>
            <Content width="90px">
                <input
                    id="checkAll"
                    type="checkbox"
                    name="checkAll"
                    // onChange={(e) => handleAllCheck(e.target.checked)}
                    // checked={checkItems.length === cartData?.length ? true : false}
                />
            </Content>
            <Content width="611px">상품정보</Content>
            <Content width="248px">수량</Content>
            <Content width="329px">상품금액</Content>
        </TitleLi>
    );
};
export default CartTitle;
