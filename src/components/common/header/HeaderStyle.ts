import Logo from '../../../assets/icon-logoImg.png';
import LogoTextt from '../../../assets/icon-logoText.png';
import styled from 'styled-components';

const HeaderElement = styled.header`
    z-index: 2;
    display: block;
    position: fixed;
    top: 0;
    background-color: var(--white);
    width: 100%;
    height: 90px;
    padding: 0 15px 0;
    border-bottom: 1px solid var(--base-gray);
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    min-width: 750px;
    height: 90px;
    margin: 0 auto;
`;

const Wrap = styled.div`
    display: flex;
    align-items: center;
`;

const Logos = styled.div`
    display: flex;
    align-items: center;
`;
const LogoImg = styled.h1`
    width: 36px;
    height: 38px;
    margin-right: 4px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: contain;
`;
const LogoText = styled(LogoImg)`
    background-image: url(${LogoTextt});
    width: 73px;
    height: 30px;
    margin-right: 25px;
    @media screen and (max-width: 900px) {
        margin-right: 10px;
    }
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HearderBtn = styled.button.attrs({ type: 'button' })`
    display: inline-block;
    width: 66px;
    height: 46px;
    color: var(--dark-gray);
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;
const IconUser = styled.img.attrs({ alt: '' })`
    height: 30px;
`;
const IconShoppingCart = styled(IconUser)`
    width: 48px;
`;

const BtnWrap = styled.li`
    position: relative;
`;

const SellerCenterBtn = styled.button.attrs({ type: 'button' })`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--point-color);
    width: 168px;
    height: 54px;
    margin-right: 20px;
    border-radius: 5px;
    color: var(--white);
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    @media screen and (max-width: 900px) {
        margin-right: 10px;
    }
`;
const IconUpload = styled.img.attrs({ alt: '' })`
    display: inline;
    width: 32px;
    height: 32px;
    margin-right: 7px;
`;

export {
    HeaderElement,
    Nav,
    Wrap,
    Logos,
    LogoImg,
    LogoText,
    Ul,
    HearderBtn,
    IconShoppingCart,
    IconUser,
    BtnWrap,
    SellerCenterBtn,
    IconUpload,
};
