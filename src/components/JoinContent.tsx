import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import Check_off from '../assets/icon-check-off.svg';
import styled from 'styled-components';

interface styledCompo {
    width: string;
}

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

const Div = styled.div`
    position: relative;
    margin-top: 12px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;
const PasswordLabel = styled(Label)`
    ::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 28px;
        height: 28px;
        top: 43px;
        right: 16px;
        background-image: url(${Check_off});
        background-repeat: no-repeat;
        background-size: 28px 28px;
    }
`;

const Input = styled.input`
    width: ${(props: styledCompo) => props.width};
    padding: 16px 15px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const VaildCheckBtn = styled.button`
    background-color: #6997f7;
    padding: 17px 31px;
    margin-left: 12px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
`;

const CautionText = styled.strong`
    display: inline-block;
    margin-top: 10px;
    color: red;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const PassText = styled(CautionText)`
    color: #3875f8;
`;

const Fieldset = styled.fieldset`
    margin-top: 50px;
`;

const At = styled.span`
    margin: 0 11px;
    color: #767676;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const PhoneNumber = styled.div`
    display: flex;
    justify-content: space-between;
`;

const JoinContent = () => {
    const [id, setId] = useState<string>();
    const [cautionText, setCautionText] = useState<string>();
    const [passText, setPassText] = useState<string>();

    useEffect(() => {
        setCautionText('');
        setPassText('');
    }, [id]);

    // const idRegexCheck = () => {
    //     const regex = /^[a-z]+[a-z0-9]{5,19}$/g; //수정예정
    //     if (!regex.test(id!)) {
    //         setCautionText(
    //             '6~20자의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
    //         );
    //     }
    //     return;
    // };

    const regex = /^[a-z]+[a-z0-9]{5,19}$/g; //수정예정

    const idValidCheck = async () => {
        try {
            if (!id) {
                setCautionText('아이디를 입력해주세요.');
                return;
            } else if (!regex.test(id)) {
                setCautionText(
                    '6~20자의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
                );
                return;
            } else {
                const url: string =
                    BASE_URL + '/accounts/signup/valid/username/';
                const response = await axios.post(url, {
                    username: id,
                });
                console.log(response);
                setPassText('사용 가능한 아이디입니다:)');
            }
        } catch (err) {
            console.error(err);
            setCautionText('이미 사용 중인 아이디입니다.');
        }
    };

    return (
        <Form>
            <fieldset>
                <Div>
                    <Label>아이디</Label>
                    <Input
                        type="text"
                        width="346px"
                        value={id || ''}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setId(e.target.value);
                        }}
                    />
                    <VaildCheckBtn type="button" onClick={idValidCheck}>
                        중복확인
                    </VaildCheckBtn>
                </Div>
                <CautionText>{cautionText}</CautionText>
                <PassText>{passText}</PassText>
                <Div>
                    <PasswordLabel>비밀번호</PasswordLabel>
                    <Input type="password" width="100%" />
                </Div>
                <Div>
                    <PasswordLabel>비밀번호 재확인</PasswordLabel>
                    <Input type="password" width="100%" />
                </Div>
                <CautionText>비밀번호가 일치하지 않습니다.</CautionText>
            </fieldset>
            <Fieldset>
                <div>
                    <Label>이름</Label>
                    <Input type="text" width="100%" />
                </div>
                <Div>
                    <Label>휴대폰번호</Label>
                    <PhoneNumber>
                        <Input type="text" width="152px" />
                        <Input type="text" width="152px" />
                        <Input type="text" width="152px" />
                    </PhoneNumber>
                </Div>
                <Div>
                    <Label>이메일</Label>
                    <Input type="text" width="220px" />
                    <At>@</At>
                    <Input type="text" width="220px" />
                </Div>
            </Fieldset>
        </Form>
    );
};
export default JoinContent;
