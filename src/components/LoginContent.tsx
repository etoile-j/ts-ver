import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    z-index: 2;
    background-color: #ffffff;
    position: relative;
    top: -20px;
    padding: 35px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding: 19px 0;
    margin-bottom: 6px;
    border-bottom: 1px solid #c4c4c4;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    ::placeholder {
        color: #767676;
        font-weight: 400;
    }
`;

const BasicButton = styled.button`
    background-color: #6997f7;
    width: 100%;
    padding: 19px;
    margin-top: 26px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

const Div = styled.div`
    margin-top: 20px;
`;

const CautionText = styled.strong`
    color: red;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const LoginContent = () => {
    return (
        <Form>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" />
            <Div>
                <CautionText>
                    아이디 또는 비밀번호가 일치하지 않습니다.
                </CautionText>
            </Div>
            <BasicButton>로그인</BasicButton>
        </Form>
    );
};
export default LoginContent;
