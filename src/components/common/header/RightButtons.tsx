import { useState } from 'react';
import { getLocalStorage } from 'utils/storage';
import { LOGIN_TYPE } from 'constants/index';
import Dropdown from 'components/modal/Dropdown';
import Modal from 'components/modal/Modal';
import ModalContainer from 'components/modal/ModalContainer';
import ShoppingCartIcon from '../../../assets/icon-shopping-cart.svg';
import UserIcon from '../../../assets/icon-user.svg';
import BagIcon from '../../../assets/icon-shopping-bag.svg';
import {
    Ul,
    ShoppingCartBtn,
    LiButtonImg,
    ShoppingCartImg,
    SellerBtn,
    IconUpload,
    MyPage,
} from './HeaderStyle';

const RightButtons = () => {
    const token = getLocalStorage('token');
    const loginType = getLocalStorage('login_type');
    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <Ul>
            <li>
                {!token ? (
                    <ShoppingCartBtn onClick={handleModal}>
                        <ShoppingCartImg src={ShoppingCartIcon} />
                        <span>장바구니</span>
                    </ShoppingCartBtn>
                ) : loginType === LOGIN_TYPE.BUYER ? (
                    <ShoppingCartBtn onClick={() => (window.location.href = '/cart')}>
                        <ShoppingCartImg src={ShoppingCartIcon} />
                        <span>장바구니</span>
                    </ShoppingCartBtn>
                ) : (
                    <SellerBtn onClick={() => (window.location.href = '/seller')}>
                        <IconUpload src={BagIcon} />
                        판매자 센터
                    </SellerBtn>
                )}
            </li>
            <li>
                {!token ? (
                    <MyPage onClick={() => (window.location.href = '/login')}>
                        <LiButtonImg src={UserIcon} />
                        <span>로그인</span>
                    </MyPage>
                ) : (
                    <MyPage onClick={() => setOpenDropdown(!openDropdown)}>
                        <LiButtonImg src={UserIcon} />
                        <span>마이페이지</span>
                        {openDropdown && <Dropdown />}
                    </MyPage>
                )}
            </li>
            {openModal && (
                <ModalContainer>
                    <Modal
                        close={handleModal}
                        ok={() => (window.location.href = '/login')}
                        leftBtn="아니오"
                        rightBtn="예"
                        text="로그인이 필요한 서비스입니다."
                        text2="로그인 하시겠습니까?"
                    />
                </ModalContainer>
            )}
        </Ul>
    );
};
export default RightButtons;
