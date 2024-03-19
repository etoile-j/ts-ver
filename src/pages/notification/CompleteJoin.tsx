import { goToRoute } from 'utils';
import Notification from 'components/common/Notification';
import { Main } from './style';

const CompleteJoin = () => {
    return (
        <Main>
            <Notification
                mainText="회원가입이 완료되었습니다."
                subText1="OUR SHOP 회원이 되신 것을 환영합니다 :)"
                leftText="로그인하기"
                rightText="메인으로"
                leftBtn={() => goToRoute('/login')}
                rightBtn={() => goToRoute()}
            />
        </Main>
    );
};
export default CompleteJoin;
