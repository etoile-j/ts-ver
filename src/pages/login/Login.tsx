import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from 'components/register/FormContainer';
import LoginContent from 'components/register/LoginContent';
import { Main, Ul, Li, LiPseudo } from './style';

const Login = () => {
    const [typeBuyer, setTypeBuyer] = useState(true);

    return (
        <Main>
            <FormContainer
                content={<LoginContent typeBuyers={typeBuyer} />}
                buyer="구매회원 로그인"
                seller="판매회원 로그인"
                typeBuyer={typeBuyer}
                setTypeBuyer={setTypeBuyer}
            />
            <Ul>
                <Li>
                    <Link to="/join">회원가입</Link>
                </Li>
                <LiPseudo>비밀번호 찾기</LiPseudo>
            </Ul>
        </Main>
    );
};

export default Login;
