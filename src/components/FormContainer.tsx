import styled from 'styled-components';

const Logo = styled.h1`
    margin: 70px 0;
    text-align: center;
`;

const Container = styled.div`
    max-width: 550px;
    min-width: 316px;
    margin: 0 auto;
`;

const Ul = styled.ul`
    display: flex;
`;

const LoginTap2 = styled.li`
    background-color: #f2f2f2;
    width: 100%;
    padding: 19px 0 37px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`;

const LoginTap = styled(LoginTap2)`
    z-index: 3;
    background-color: #ffffff;
    width: 550px;
    position: relative;
    border-radius: 10px 10px 0 0;
    border-bottom: 0;
    ::after {
        content: '';
        position: absolute;
        background-color: #ffffff;
        /* background-color: red; */
        top: 60px;
        width: 90px;
        height: 19px;
    }
`;

const FormContainer = (props: any) => {
    return (
        <>
            <Logo>로고</Logo>
            <Container>
                <Ul>
                    <LoginTap>구매회원 로그인</LoginTap>
                    <LoginTap2>판매회원 로그인</LoginTap2>
                </Ul>
                {props.content}
            </Container>
        </>
    );
};
export default FormContainer;
