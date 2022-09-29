import CountButton from 'components/CountButton';
import TestImg from '../../assets/ProductTestImg.jpg';
import DeleteIcon from '../../assets/icon-delete.svg';
import styled from 'styled-components';

interface styledCompo {
    width?: string;
}

const Container = styled.li`
    display: flex;
    align-items: center;
    height: 200px;
    margin-bottom: 10px;
    border: 2px solid #c4c4c4;
    border-radius: 10px;
`;

const Content = styled.span`
    position: relative;
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const Wrap = styled.div`
    display: flex;
    text-align: left;
`;

const ProductImg = styled.img`
    width: 160px;
    height: 160px;
    margin-right: 36px;
    border-radius: 10px;
`;

const SellerName = styled.p`
    margin-top: 5px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const ProductName = styled.p`
    margin: 10px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const Price = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const DeliveryText = styled.p`
    position: absolute;
    bottom: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const InPrice = styled.p`
    margin-bottom: 26px;
    color: red;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

const OrderBtn = styled.button`
    background-color: #6997f7;
    width: 130px;
    padding: 10px 0;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
`;

const DeleteBtn = styled.button`
    position: absolute;
    top: -40px;
    right: 14px;
    width: 22px;
    height: 22px;
    background-image: url(${DeleteIcon});
    background-repeat: no-repeat;
    background-size: 22px 22px;
    cursor: pointer;
`;

const CartContent = () => {
    return (
        <Container>
            <Content width="90px">
                <input type="radio"></input>
            </Content>
            <Content width="611px">
                <Wrap>
                    <ProductImg src={TestImg}></ProductImg>
                    <div>
                        <SellerName>우탕탕 라이캣의 실험실</SellerName>
                        <ProductName>
                            Hack Your Life 개발자 노트북 파우치
                        </ProductName>
                        <Price>
                            29000<span>원</span>
                        </Price>
                        <DeliveryText>택배배송 / 무료배송</DeliveryText>
                    </div>
                </Wrap>
            </Content>
            <Content width="248px">
                <CountButton />
            </Content>
            <Content width="329px">
                <InPrice>
                    17500<span>원</span>
                </InPrice>
                <OrderBtn>주문하기</OrderBtn>
                <DeleteBtn />
            </Content>
        </Container>
    );
};
export default CartContent;
