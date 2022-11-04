import Logo from '../assets/icon-logoImg.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Main = styled.main`
    max-width: 1300px;
    min-width: 767px;
    margin: 0 auto;
    position: relative;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    min-width: 710px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
`;

const Img = styled.img`
    width: 230px;
    margin-right: 50px;
`;

const NotFoundPage = styled.strong`
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
`;

const P = styled.p`
    margin: 20px 0 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
`;

const BackBtn = styled.button`
    background: #ffffff;
    width: 200px;
    padding: 18px 0;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #767676;
`;
const MainBtn = styled(BackBtn)`
    background: #6997f7;
    margin-right: 14px;
    color: #ffffff;
`;

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <Main>
                <Container>
                    <Img src={Logo} alt="로고 이미지" />
                    <div>
                        <NotFoundPage>페이지를 찾을 수 없습니다.</NotFoundPage>
                        <P>
                            페이지가 존재하지 않거나 사용할 수 없는
                            페이지입니다. <br /> 웹 주소가 올바른지 확인해
                            주세요.
                        </P>
                        <MainBtn onClick={() => (window.location.href = '/')}>
                            메인 페이지
                        </MainBtn>
                        <BackBtn onClick={() => navigate(-1)}>
                            이전 페이지
                        </BackBtn>
                    </div>
                </Container>
            </Main>
        </>
    );
};
export default NotFound;
