import Logo from '../../assets/icon-logoImg.png';
import LogoTextt from '../../assets/icon-logoText.png';
import styled from 'styled-components';

const Logos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LogoImg = styled.h1`
    margin: 70px 0;
    width: 100px;
    height: 90px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: contain;
`;
const LogoText = styled(LogoImg)`
    background-image: url(${LogoTextt});
    width: 175px;
    height: 70px;
`;

const Container = styled.div`
    max-width: 550px;
    min-width: 326px;
    margin: 0 auto;
`;

const Ul = styled.ul`
    display: flex;
`;

const SellerTap = styled.li`
    background-color: #f2f2f2;
    width: 100%;
    padding: 19px 0 37px;
    border: 1px solid #c4c4c4;
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
`;
const SellerTap2 = styled(SellerTap)`
    position: relative;
    background-color: #ffffff;
    z-index: 3;
    ::after {
        content: '';
        position: absolute;
        background-color: #ffffff;
        top: 59px;
        left: -5px;
        width: 7px;
        height: 19px;
    }
`;

const BuyerTap = styled(SellerTap)`
    z-index: 3;
    background-color: #ffffff;
    width: 550px;
    position: relative;
    padding: 0;
    border-radius: 10px 10px 0 0;
    border-bottom: 0;
    box-sizing: content-box;
    ::after {
        content: '';
        position: absolute;
        background-color: #ffffff;
        top: 59px;
        right: -20px;
        width: 90px;
        height: 19px;
    }
`;
const BuyerTap2 = styled(BuyerTap)`
    background-color: #f2f2f2;
    z-index: 2;
`;

const BuyerBtn = styled.button.attrs({
    type: 'button',
})`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding: 19px 0 0 0;
`;
const SellerBtn = styled(BuyerBtn)`
    line-height: 21px;
    padding: 0;
    margin: 0;
`;

export {
    Logos,
    LogoImg,
    LogoText,
    Container,
    Ul,
    SellerTap,
    SellerTap2,
    BuyerTap,
    BuyerTap2,
    BuyerBtn,
    SellerBtn,
};
