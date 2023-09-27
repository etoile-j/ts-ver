import { useEffect, useRef, useState } from 'react';
import { axiosApi } from 'apis/axiosInstance';
import { ILoginType } from 'GlobalType';
import {
    Form,
    Input,
    SubmitButton,
    Div,
    CautionText,
} from './LoginContentStyle';

const LoginContent = ({ typeBuyers }: ILoginType) => {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [cautionText, setCautionText] = useState<string>();

    useEffect(() => {
        idRef.current?.focus();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!checkEmptyInputs()) return;

        try {
            const response = await axiosApi.post('/accounts/login/', {
                username: idRef.current?.value,
                password: passwordRef.current?.value,
                login_type: typeBuyers ? 'BUYER' : 'SELLER',
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('login_type', response.data.user_type);
            window.location.replace('/');
        } catch (err) {
            console.error(err);
            notifyLoginError();
        }
    };

    const checkEmptyInputs = () => {
        if (idRef.current?.value.trim() === '') {
            setCautionText('아이디를 입력해주세요.');
            idRef.current.focus();
            return false;
        }
        if (passwordRef.current?.value.trim() === '') {
            setCautionText('비밀번호를 입력해주세요.');
            passwordRef.current.focus();
            return false;
        }

        return true;
    };

    const notifyLoginError = () => {
        setCautionText('아이디 또는 비밀번호가 일치하지 않습니다.');
        passwordRef.current!.value = '';
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="아이디" ref={idRef} />
            <Input type="password" placeholder="비밀번호" ref={passwordRef} />
            <Div>
                <CautionText aria-live="assertive">{cautionText}</CautionText>
            </Div>
            <SubmitButton type="submit">로그인</SubmitButton>
        </Form>
    );
};
export default LoginContent;
