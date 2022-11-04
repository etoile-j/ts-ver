import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from 'components/register/FormContainer';
import LoginContent from 'components/register/LoginContent';
import styled from 'styled-components';

const Main = styled.main`
    /* width: 550px; */
    /* margin: 0 auto; */
    margin: 0 25px;
`;

const Ul = styled.ul`
    text-align: center;
`;

const Li = styled.li`
    display: inline;
    color: #333333;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Li2 = styled(Li)`
    padding-left: 33px;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        background-color: #333333;
        top: 2px;
        left: 16px;
        width: 1px;
        height: 17px;
    }
`;

const Login = () => {
    const [typeBuyer, setTypeBuyer] = useState(true);

    return (
        <>
            <Main>
                <FormContainer
                    content={<LoginContent typeBuyers={typeBuyer} />}
                    buyer="구매회원 로그인"
                    seller="판매회원 로그인"
                    typeBuyer={typeBuyer}
                    setTypeBuyer={setTypeBuyer}
                />
                <Ul>
                    <Link to="/join">회원가입</Link>
                    <Li2>비밀번호 찾기</Li2>
                </Ul>
            </Main>
        </>
    );
};

export default Login;
