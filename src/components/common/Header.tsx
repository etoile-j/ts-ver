import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'components/modal/Dropdown';
import Modal from 'components/modal/Modal';
import ModalContainer from 'components/modal/ModalContainer';
import Logo from '../../assets/icon-logoImg.png';
import LogoTextt from '../../assets/icon-logoText.png';
import SearchIcon from '../../assets/search.svg';
import ShoppingCartIcon from '../../assets/icon-shopping-cart.svg';
import UserIcon from '../../assets/icon-user.svg';
import BagIcon from '../../assets/icon-shopping-bag.svg';
import styled from 'styled-components';

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

const SearchContainer = styled.div`
    position: relative;
    width: 400px;
    @media screen and (max-width: 900px) {
        width: 310px;
    }
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
    align-items: center;
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
`;

const ShoppingCartBtn = styled.button`
    display: inline-block;
    width: 66px;
    height: 32px;
    margin-right: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;

const SellerBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #6997f7;
    width: 168px;
    height: 54px;
    margin-right: 20px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    @media screen and (max-width: 900px) {
        margin-right: 10px;
    }
`;
const IconUpload = styled.img`
    display: inline;
    width: 32px;
    height: 32px;
    margin-right: 7px;
`;

const MyPage = styled(ShoppingCartBtn)`
    margin-right: 0;
`;

const Header = () => {
    const token = localStorage.getItem('token');
    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <HeaderEl>
            <Nav>
                <Wrap>
                    <Link to="/">
                        <Logos>
                            <LogoImg />
                            <LogoText />
                        </Logos>
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
                        {token === null ? (
                            <ShoppingCartBtn onClick={handleModal}>
                                <img src={ShoppingCartIcon} />
                                <span>장바구니</span>
                            </ShoppingCartBtn>
                        ) : localStorage.getItem('login_type') === 'BUYER' ? (
                            <ShoppingCartBtn
                                onClick={() => (window.location.href = '/cart')}
                            >
                                <img src={ShoppingCartIcon} />
                                <span>장바구니</span>
                            </ShoppingCartBtn>
                        ) : (
                            <SellerBtn
                                onClick={() =>
                                    (window.location.href = '/seller')
                                }
                            >
                                <IconUpload src={BagIcon} />
                                판매자 센터
                            </SellerBtn>
                        )}
                    </li>
                    <li>
                        {token !== null ? (
                            <MyPage
                                onMouseOver={() => setOpenDropdown(true)}
                                onMouseOut={() => setOpenDropdown(false)}
                            >
                                <img src={UserIcon} />
                                <span>마이페이지</span>
                                {openDropdown && (
                                    <Dropdown
                                        mouseOver={() => setOpenDropdown(true)}
                                        mouseOut={() => setOpenDropdown(false)}
                                    />
                                )}
                            </MyPage>
                        ) : (
                            <MyPage
                                onClick={() => {
                                    window.location.href = '/login';
                                }}
                            >
                                <img src={UserIcon} />
                                <span>로그인</span>
                            </MyPage>
                        )}
                    </li>
                </Ul>
            </Nav>
            {openModal && (
                <ModalContainer>
                    <Modal
                        close={handleModal}
                        ok={() => (window.location.href = '/login')}
                        leftBtn="아니오"
                        rightBtn="예"
                        text="로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
                    />
                </ModalContainer>
            )}
        </HeaderEl>
    );
};
export default Header;
