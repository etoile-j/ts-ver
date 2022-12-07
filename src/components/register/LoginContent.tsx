import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [id, setId] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [cautionText, setCautionText] = useState<string>();
    const navigate = useNavigate();

    const idRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        idRef.current?.focus();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const url: string = BASE_URL + '/accounts/login/';
            const response = await axios.post(url, {
                username: id,
                password: password,
                login_type: typeBuyers ? 'BUYER' : 'SELLER',
            });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('login_type', response.data.user_type);
            if (response.status === 200) window.location.replace('/');
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
