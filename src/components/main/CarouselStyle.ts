import styled from 'styled-components';
import banner from '../../assets/img-banner.png';

const Container = styled.div`
    margin: 0 auto;
    padding-bottom: 80px;
`;

const Banner = styled.div`
    padding-top: 150px;
    background-color: #6997f7;
    height: 430px;
`;
const Banner2 = styled(Banner)`
    padding-left: 75px;
    background-color: #d7d0ca;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    cursor: pointer;
`;
const Banner3 = styled(Banner2)`
    padding-top: 120px;
    border-right: 60px solid #000000;
    background-color: #6997f7;
    background-image: none;
    cursor: default;
`;

const Wrap = styled.div`
    width: 760px;
    height: 430px;
    margin: 0 auto;
    text-align: center;
    border: solid 1px pink;
`;

const MainText = styled.p`
    color: #ffffff;
    font-family: 'SpoqaHanSansNeo-Medium', sans-serif;
    font-size: 50px;
    font-weight: 520;
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

export {
    Container,
    Banner,
    Banner2,
    Banner3,
    Wrap,
    MainText,
    SubText,
    PointText,
};
