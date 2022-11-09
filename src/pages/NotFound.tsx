import { useNavigate } from 'react-router-dom';
import Notification from 'components/common/Notification';
import styled from 'styled-components';

const Main = styled.main`
    max-width: 1300px;
    min-width: 767px;
    margin: 0 auto;
    position: relative;
`;

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <Main>
                <Notification
                    errorText="페이지를 찾을 수 없습니다."
                    subText1="페이지가 존재하지 않거나 사용할 수 없는 페이지입니다."
                    subText2="웹 주소가 올바른지 확인해 주세요."
                    leftText="메인 페이지"
                    rightText="이전 페이지"
                    leftBtn={() => (window.location.href = '/')}
                    rightBtn={() => navigate(-1)}
                />
            </Main>
        </>
    );
};
export default NotFound;
