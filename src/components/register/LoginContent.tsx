import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
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

const SubmitButton = styled.button`
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

interface ILoginType {
    typeBuyers?: boolean;
}

const LoginContent = ({ typeBuyers }: ILoginType) => {
    const [id, setId] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [cautionText, setCautionText] = useState<string>();
    console.log(typeBuyers);

    const idRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        idRef.current?.focus();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(id, password);
        try {
            const url: string = BASE_URL + '/accounts/login/';
            const response = await axios.post(url, {
                username: id,
                password: password,
                login_type: typeBuyers ? 'BUYER' : 'SELLER',
            });
            console.log(typeBuyers ? 'BUYER' : 'SELLER');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('login_type', response.data.user_type);
            window.location.replace('/');
            console.log(response);
        } catch (err) {
            console.error(err);
            if (id === undefined) {
                setCautionText('아이디를 입력해주세요.');
            } else if (password === undefined) {
                setCautionText('비밀번호를 입력해주세요.');
            } else {
                setPassword('');
                setCautionText('아이디 또는 비밀번호가 일치하지 않습니다.');
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="아이디"
                value={id || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setId(e.target.value);
                }}
                ref={idRef}
            />
            <Input
                type="password"
                placeholder="비밀번호"
                value={password || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                }}
            />
            <Div>
                <CautionText>{cautionText}</CautionText>
            </Div>
            <SubmitButton type="submit">로그인</SubmitButton>
        </Form>
    );
};
export default LoginContent;
