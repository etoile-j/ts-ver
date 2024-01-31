import Logo from '../../assets/icon-logoImg.png';
import LogoTextt from '../../assets/icon-logoText.png';
import styled from 'styled-components';

const HeaderEl = styled.header`
    z-index: 2;
    display: block;
    position: fixed;
    top: 0;
    background-color: var(--white);
    width: 100%;
    height: 90px;
    border-bottom: 1px solid var(--base-gray);
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1720px;
    height: 90px;
    margin: 0 auto;
`;

const Wrap = styled.div`
    display: flex;
    padding: 0 20px;
    align-items: center;
`;

const Logos = styled.div`
    display: flex;
    align-items: center;
`;
const LogoImg = styled.h1`
    width: 33px;
    height: 30px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: contain;
`;
const LogoText = styled(LogoImg)`
    background-image: url(${LogoTextt});
    width: 67px;
    height: 27px;
    margin-right: 15px;
`;

const Container = styled.div`
    width: 400px;
`;

const H2 = styled.h2`
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    text-align: left;
`;

export { HeaderEl, Nav, Wrap, Logos, LogoImg, LogoText, Container, H2 };
