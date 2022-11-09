import Notification from 'components/common/Notification';
import styled from 'styled-components';

const Main = styled.main`
    position: relative;
    max-width: 1300px;
    min-width: 767px;
    margin: 0 auto;
    text-align: center;
`;

const CompleteJoin = () => {
    return (
        <Main>
            <Notification
                mainText="회원가입이 완료되었습니다."
                subText1="OUR SHOP 회원이 되신 것을 환영합니다 :)"
                leftText="로그인하기"
                rightText="메인으로"
                leftBtn={() => (window.location.href = '/login')}
                rightBtn={() => (window.location.href = '/')}
            />
        </Main>
    );
};
export default CompleteJoin;
