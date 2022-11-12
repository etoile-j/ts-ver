import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'components/modal/Dropdown';
import Modal from 'components/modal/Modal';
import ModalContainer from 'components/modal/ModalContainer';
import ShoppingCartIcon from '../../assets/icon-shopping-cart.svg';
import UserIcon from '../../assets/icon-user.svg';
import BagIcon from '../../assets/icon-shopping-bag.svg';
import {
    HeaderEl,
    Nav,
    Wrap,
    Logos,
    LogoImg,
    LogoText,
    SearchContainer,
    Search,
    Ul,
    SearchBtn,
    ShoppingCartBtn,
    ShoppingCartImg,
    SellerBtn,
    IconUpload,
    MyPage,
} from './HeaderStyle';

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
                                <ShoppingCartImg src={ShoppingCartIcon} />
                                <span>장바구니</span>
                            </ShoppingCartBtn>
                        ) : localStorage.getItem('login_type') === 'BUYER' ? (
                            <ShoppingCartBtn
                                onClick={() => (window.location.href = '/cart')}
                            >
                                <ShoppingCartImg src={ShoppingCartIcon} />
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
