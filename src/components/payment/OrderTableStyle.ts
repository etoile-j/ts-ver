import styled from 'styled-components';

interface styledCompo {
    width: string;
}

const TitleLi = styled.li`
    display: flex;
    background: #f2f2f2;
    padding: 19px 0 18px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;
const Title = styled.span`
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const OrderLi = styled.li`
    display: flex;
    align-items: center;
    height: 138px;
    margin-top: 7px;
    border-bottom: 1px solid #c4c4c4;
`;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
`;

const ProductImg = styled.img.attrs({ alt: '상품 이미지' })`
    width: 104px;
    height: 104px;
    margin-right: 36px;
    border-radius: 10px;
    object-fit: cover;
`;

const GrayFont = styled.p`
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const ProductName = styled.p`
    margin: 5px 0 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const Price = styled.strong`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

export {
    TitleLi,
    Title,
    OrderLi,
    Wrap,
    ProductImg,
    GrayFont,
    ProductName,
    Price,
};
