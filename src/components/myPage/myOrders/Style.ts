import styled from 'styled-components';
import { productCircleImg, tabeleContent } from 'styles/mixins';

const Wrap = styled.div`
    padding: 0 60px 100px;
    @media screen and (max-width: 900px) {
        padding: 0px;
    }
`;

const TitleLi = styled.li`
    display: flex;
    background: var(--light-gray);
    padding: 19px 0 18px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
`;

const Container = styled.li`
    display: flex;
    align-items: center;
    height: 94px;
    border-bottom: 1px solid var(--base-gray);
    font-size: 18px;
`;

const Content = styled.span`
    ${tabeleContent}
`;

const ProductWrap = styled.div`
    display: flex;
    align-items: center;
`;

const ProductImg = styled.img.attrs({ alt: '상품 이미지' })`
    ${productCircleImg}
`;

const ViewDetailButton = styled.button.attrs({ type: 'button' })`
    margin: 0 auto;
`;
const ViewDetailImg = styled.img.attrs({ alt: '' })`
    width: 42px;
`;

export {
    Wrap,
    TitleLi,
    Container,
    Content,
    ProductWrap,
    ProductImg,
    ViewDetailButton,
    ViewDetailImg,
};
