import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo-hodu.png';
import styled from 'styled-components';

const HeaderEl = styled.header`
    z-index: 2;
    display: block;
    position: fixed;
    top: 0;
    background-color: #ffffff;
    width: 100%;
    height: 90px;
    border-bottom: 1px solid #c4c4c4;
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

const LogoImg = styled.h1`
    width: 80px;
    height: 24px;
    margin-right: 15px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: contain;
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

const SellerCenterHeader = () => {
    return (
        <HeaderEl>
            <Nav>
                <Wrap>
                    <Link to="/">
                        <LogoImg />
                    </Link>
                    <Container>
                        <H2>판매자 센터</H2>
                    </Container>
                </Wrap>
            </Nav>
        </HeaderEl>
    );
};
export default SellerCenterHeader;
