import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import {
    Form,
    Input,
    SubmitButton,
    Div,
    CautionText,
} from './LoginContentStyle';

interface ILoginType {
    typeBuyers?: boolean;
}

const LoginContent = ({ typeBuyers }: ILoginType) => {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [cautionText, setCautionText] = useState<string>();

    useEffect(() => {
        idRef.current?.focus();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const url: string = BASE_URL + '/accounts/login/';
            const response = await axios.post(url, {
                username: idRef.current?.value,
                password: passwordRef.current?.value,
                login_type: typeBuyers ? 'BUYER' : 'SELLER',
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('login_type', response.data.user_type);
            if (response.status === 200) window.location.replace('/');
        } catch (err) {
            console.error(err);
            if (idRef.current?.value.trim() === '') {
                setCautionText('아이디를 입력해주세요.');
            } else if (passwordRef.current?.value.trim() === '') {
                setCautionText('비밀번호를 입력해주세요.');
            } else if (passwordRef.current?.value) {
                passwordRef.current.value = '';
                setCautionText('아이디 또는 비밀번호가 일치하지 않습니다.');
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="아이디" ref={idRef} />
            <Input type="password" placeholder="비밀번호" ref={passwordRef} />
            <Div>
                <CautionText>{cautionText}</CautionText>
            </Div>
            <SubmitButton type="submit">로그인</SubmitButton>
        </Form>
    );
};
export default LoginContent;
