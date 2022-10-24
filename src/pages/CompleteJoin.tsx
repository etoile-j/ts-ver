import styled from 'styled-components';

const Main = styled.main`
    margin: 0 auto;
    text-align: center;
`;

const Text = styled.p``;

const MainBtn = styled.button`
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
const LoginBtn = styled(MainBtn)`
    background-color: #6997f7;
    margin-right: 15px;
    color: #ffffff;
`;

const CompleteJoin = () => {
    return (
        <Main>
            <h2>회원가입이 완료되었습니다.</h2>
            <LoginBtn onClick={() => (window.location.href = '/login')}>
                로그인하기
            </LoginBtn>
            <MainBtn onClick={() => (window.location.href = '/')}>
                메인으로
            </MainBtn>
        </Main>
    );
};
export default CompleteJoin;
