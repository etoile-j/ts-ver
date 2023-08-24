import styled from 'styled-components';
import banner from '../../assets/img-banner.jpeg';
import banner2 from '../../assets/img-banner2.jpeg';

const Container = styled.div`
    margin: 0 auto;
    padding-bottom: 80px;
`;

const Banner = styled.div`
    padding-top: 150px;
    padding-left: 75px;
    height: 430px;
    background-color: #0e0f0b;
    background-image: url(${banner2});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    cursor: pointer;
`;
const Banner2 = styled(Banner)`
    background-color: #d7d0ca;
    background-image: url(${banner});
`;
const Banner3 = styled(Banner2)`
    padding-top: 120px;
    border-right: 60px solid #000000;
    background-color: #6997f7;
    background-image: none;
    cursor: default;
`;

const MainText = styled.p`
    color: #ffffff;
    font-family: 'SpoqaHanSansNeo-Medium', sans-serif;
    font-size: 50px;
    font-weight: 500;
`;

const SubText = styled.p`
    padding-top: 25px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
`;

const PointText = styled.p`
    padding: 7px 0 20px;
    font-size: 55px;
    font-weight: 700;
`;

export { Container, Banner, Banner2, Banner3, MainText, SubText, PointText };
