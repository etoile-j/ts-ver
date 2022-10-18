import styled from 'styled-components';

interface styledCompo {
    width?: string;
}

const Product = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    height: 103px;
    padding: 0 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    border-bottom: 1px solid #c4c4c4;
`;

const Content = styled.span`
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const ProductWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Img = styled.div`
    background-color: black;
    width: 70px;
    height: 70px;
    margin: 0 20px 0 10px;
    border-radius: 50%;
`;

const TextWrap = styled.div`
    text-align: left;
`;

const Stock = styled.p`
    margin-top: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Price = styled.strong`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const EditBtn = styled.button.attrs({
    type: 'button',
})`
    background-color: #6997f7;
    width: 80px;
    height: 40px;
    color: #ffffff;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    :hover {
        background-color: #789ff3;
    }
`;
const DeleteBtn = styled(EditBtn)`
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
    color: #767676;
    :hover {
        background-color: #ffffff;
        border: 1px solid #767676;
        color: #000000;
    }
`;

const ProductOnSale = () => {
    return (
        <>
            <Product>
                <Content width="989px">
                    <ProductWrap>
                        <Img />
                        <TextWrap>
                            <p>일이삼사오육칠팔구십일이삼사오육칠팔구십</p>
                            <Stock>재고 : 110개</Stock>
                        </TextWrap>
                    </ProductWrap>
                </Content>
                <Content width="451px">
                    <Price>20000원</Price>
                </Content>
                <Content width="180px">
                    <EditBtn>수정</EditBtn>
                </Content>
                <Content width="180px">
                    <DeleteBtn>삭제</DeleteBtn>
                </Content>
            </Product>
        </>
    );
};
export default ProductOnSale;
