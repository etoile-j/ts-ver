import styled from 'styled-components';

const Wrap = styled.div`
    padding: 80px 0;
    text-align: center;
`;

const Text = styled.strong`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

const P = styled.p`
    margin-top: 17px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const NoneCartContent = () => {
    return (
        <>
            <Wrap>
                <Text>장바구니에 담긴 상품이 없습니다.</Text>
                <P>원하는 상품을 장바구니에 담아보세요!</P>
            </Wrap>
        </>
    );
};
export default NoneCartContent;
