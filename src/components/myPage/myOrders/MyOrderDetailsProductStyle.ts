import styled from 'styled-components';
interface StyledProps {
    width?: string;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    margin-bottom: 10px;
    border-radius: 10px;
`;

const Content = styled.div`
    position: relative;
    display: inline-block;
    width: ${(props: StyledProps) => props.width || '180px'};
    text-align: center;
`;

const Wrap = styled.div`
    display: flex;
    text-align: left;
`;

const ProductImg = styled.img.attrs({ alt: '상품 이미지' })`
    width: 70px;
    height: 70px;
    margin-right: 12px;
    object-fit: cover;
`;

const StoreName = styled.p`
    color: var(--dark-gray);
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
`;

const ProductName = styled.p`
    margin: 2px 0 5px;
    font-family: 'SpoqaHanSansNeo-Regular';
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
`;

const Price = styled.span`
    font-family: 'SpoqaHanSansNeo-Regular';
    font-size: 15px;
    letter-spacing: -0.5px;
    line-height: 20px;
`;

const Subtitle = styled.p`
    color: var(--dark-gray);
    margin-bottom: 3px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
    line-height: 18px;
`;
const SubtitleText = styled.p`
    margin-bottom: 3px;
    font-size: 15px;
    letter-spacing: -0.5px;
    line-height: 18px;
`;

export {
    Container,
    Content,
    Wrap,
    ProductImg,
    StoreName,
    ProductName,
    Price,
    Subtitle,
    SubtitleText,
};
