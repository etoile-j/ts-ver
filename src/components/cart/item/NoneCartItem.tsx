import { Wrap, Text, P } from './NoneCartItemStyle';

const NoneCartItem = () => {
    return (
        <Wrap>
            <Text>장바구니에 담긴 상품이 없습니다.</Text>
            <P>원하는 상품을 장바구니에 담아보세요!</P>
        </Wrap>
    );
};
export default NoneCartItem;
