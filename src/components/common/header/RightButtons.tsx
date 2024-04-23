import { useState } from 'react';
import { getLocalStorage } from 'utils/storage';
import { goToRoute } from 'utils';
import { LOGIN_TYPE } from 'constants/index';
import RightButton from './RightButton';
import Modal from 'components/modal/Modal';
import ModalContainer from 'components/modal/ModalContainer';
import BagIcon from '../../../assets/icon-shopping-bag.svg';
import { Ul, BtnWrap, SellerCenterBtn, IconUpload } from './HeaderStyle';

const RightButtons = () => {
    const token = getLocalStorage('token');
    const loginType = getLocalStorage('login_type');
    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const handleModal = () => {
        setOpenModal(!openModal);
    };

    const handleDropDown = () => {
        setOpenDropdown(!openDropdown);
    };

    return (
        <Ul>
            <li>
                {!token && <RightButton title="장바구니" onClick={handleModal} />}
                {loginType === LOGIN_TYPE.BUYER && (
                    <RightButton title="장바구니" onClick={() => goToRoute('/cart')} />
                )}
                {loginType === LOGIN_TYPE.SELLER && (
                    <SellerCenterBtn onClick={() => goToRoute('/seller')}>
                        <IconUpload src={BagIcon} />
                        판매자 센터
                    </SellerCenterBtn>
                )}
            </li>
            <BtnWrap>
                {!token ? (
                    <RightButton
                        title="로그인"
                        onClick={() => goToRoute('/login')}
                        style={{ width: 72 }}
                    />
                ) : (
                    <RightButton
                        title="마이페이지"
                        onClick={handleDropDown}
                        style={{ width: 72 }}
                        openDropdown={openDropdown}
                    />
                )}
            </BtnWrap>
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
