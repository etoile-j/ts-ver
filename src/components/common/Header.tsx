import Logo from '../../assets/Logo-hodu.png';
import SearchIcon from '../../assets/search.svg';
import ShoppingCartIcon from '../../assets/icon-shopping-cart.svg';
import UserIcon from '../../assets/icon-user.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
    z-index: 2;
    display: block;
    position: fixed;
    top: 0;
    background-color: #ffffff;
    width: 100%;
    height: 90px;
    padding: 0 15px 0;
    border-bottom: 1px solid #c4c4c4;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    height: 90px;
    margin: 0 auto;
`;

const Wrap = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.h1`
    width: 124px;
    height: 38px;
    margin-right: 30px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: contain;
`;

const SearchContainer = styled.div`
    position: relative;
    width: 400px;
`;

const Search = styled.input`
    width: 100%;
    padding: 11px 53px 11px 20px;
    border: 2px solid #6997f7;
    border-radius: 50px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    ::placeholder {
        color: #767676;
    }
`;

const Ul = styled.ul`
    display: flex;
`;

const SearchBtn = styled.button`
    width: 28px;
    height: 28px;
    position: absolute;
    top: 8px;
    right: 22px;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`;

const ShoppingCartBtn = styled.button`
    display: inline-block;
    width: 66px;
    height: 32px;
    margin-right: 10px;
    /* background-image: url(${ShoppingCartIcon});
    background-repeat: no-repeat;
    background-size: 32px 32px;
    background-position: center; */
    color: #767676;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;

const MyPage = styled(ShoppingCartBtn)`
    margin-right: 0;
`;

const Span = styled.p``;

const Header = () => {
    return (
        <HeaderEl>
            <Nav>
                <Wrap>
                    <Link to="/">
                        <LogoImg />
                    </Link>
                    <SearchContainer>
                        <Search
                            type="text"
                            placeholder="상품을 검색해보세요!"
                        />
                        <SearchBtn />
                    </SearchContainer>
                </Wrap>
                <Ul>
                    <li>
                        <ShoppingCartBtn>
                            <img src={ShoppingCartIcon} />
                            <span>장바구니</span>
                        </ShoppingCartBtn>
                    </li>
                    <li>
                        <MyPage>
                            <img src={UserIcon} />
                            <span>마이페이지</span>
                        </MyPage>
                    </li>
                </Ul>
            </Nav>
        </HeaderEl>
    );
};
export default Header;
