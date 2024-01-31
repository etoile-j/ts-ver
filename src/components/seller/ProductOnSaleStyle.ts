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
    border-bottom: 1px solid var(--base-gray);
    &:last-child {
        border-radius: 0 0 5px 5px;
    }
`;

const Content = styled.span`
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const ProductWrap = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Img = styled.img.attrs({ alt: '상품 이미지' })`
    width: 70px;
    height: 70px;
    margin: 0 20px 0 10px;
    border-radius: 50%;
    object-fit: contain;
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
    background-color: var(--point-color);
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
    @media screen and (max-width: 970px) {
        width: 67px;
    }
`;
const DeleteBtn = styled(EditBtn)`
    background-color: #ffffff;
    border: 1px solid var(--base-gray);
    color: #767676;
    :hover {
        background-color: #ffffff;
        border: 1px solid #767676;
        color: #000000;
    }
`;

export { Product, Content, ProductWrap, Img, TextWrap, Stock, Price, EditBtn, DeleteBtn };
