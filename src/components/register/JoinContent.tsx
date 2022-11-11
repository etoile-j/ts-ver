import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import Check_off from '../../assets/icon-check-off.svg';
import Check_on from '../../assets/icon-check-on.svg';
import styled from 'styled-components';

interface styledCompo {
    width?: string;
    color?: string;
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
    width: 120px;
    padding: 17px 0px;
    margin-left: 12px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
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
    color: #2c6cf6;
`;

const PasswordInput = styled.div`
    position: relative;
`;

const PwCheck = styled.div`
    display: inline-block;
    position: absolute;
    top: 13px;
    right: 16px;
    width: 28px;
    height: 28px;
    background-image: url(${Check_off});
    background-repeat: no-repeat;
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

const PhoneInput = styled(Input)`
    text-align: center;
`;

const Div2 = styled.div`
    margin-top: 40px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Agree = styled.input`
    float: left;
    margin: 12px 10px 15px 0;
`;

const JoinBtn = styled.button`
    background: ${(props: styledCompo) => props.color};
    width: 100%;
    padding: 19px 0;
    margin-top: 34px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

interface ILoginType {
    typeBuyers?: boolean;
}

const JoinContent = ({ typeBuyers }: ILoginType) => {
    const [id, setId] = useState<string>();
    const [cautionText, setCautionText] = useState<string>();
    const [passText, setPassText] = useState<string>();

    type Inputs = {
        id: string;
        password: string;
        passwordCheck: string;
        name: string;
        phone1: number;
        phone2: number;
        phone3: number;
        emailId: string;
        emailDomain: string;
        storeName: string;
        companyNum: string;
        agreement: any;
    };

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isValid },
    } = useForm<Inputs>({ mode: 'onBlur' });

    const onSubmit = (data: any) => {
        console.log('훅', data);
        if (typeBuyers === true) {
            handleBuyerJoin(data);
        } else {
            handleSellerJoin(data);
        }
    };

    useEffect(() => {
        setCautionText('');
        setPassText('');
    }, [id]);

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
                setPassText('사용 가능한 아이디입니다 :)');
            }
        } catch (err) {
            console.error(err);
            setCautionText('이미 사용 중인 아이디입니다.');
        }
    };

    const companyValidCheck = async () => {
        try {
            const url: string =
                BASE_URL +
                '/accounts/signup/valid/company_registration_number/';
            const response = await axios.post(url, {
                company_registration_number: getValues('companyNum'),
            });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    const handleBuyerJoin = async (data: Inputs) => {
        try {
            const url: string = BASE_URL + '/accounts/signup/';
            const response = await axios.post(url, {
                username: data.id,
                password: data.password,
                password2: data.passwordCheck,
                phone_number: data.phone1 + data.phone2 + data.phone3,
                name: data.name,
            });
            console.log(response);
            if (response.status === 201) {
                window.location.replace('/complete_join');
            }
        } catch (err) {}
    };

    const handleSellerJoin = async (data: Inputs) => {
        try {
            const url: string = BASE_URL + '/accounts/signup_seller/';
            const response = await axios.post(url, {
                username: data.id,
                password: data.password,
                password2: data.passwordCheck,
                phone_number: data.phone1 + data.phone2 + data.phone3,
                name: data.name,
                company_registration_number: data.companyNum,
                store_name: data.storeName,
            });
            console.log(response);
            if (response.status === 201) {
                window.location.replace('/complete_join');
            }
        } catch (err) {}
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <Div>
                    <Label>아이디</Label>
                    <Input
                        type="text"
                        width="346px"
                        value={id || ''}
                        {...register('id', {
                            required: '필수정보 입니다.',
                            pattern: {
                                value: /^[a-z]+[a-z0-9]{5,19}$/g,
                                message:
                                    '6~20자의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
                            },
                        })}
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
                {errors.id && <CautionText>{errors.id.message}</CautionText>}
                <Div>
                    <Label htmlFor="password">비밀번호</Label>
                    <PasswordInput>
                        <Input
                            id="password"
                            type="password"
                            width="100%"
                            {...register('password', {
                                required: '필수정보 입니다.',
                                pattern: {
                                    value: /^[0-8a-z]+$/,
                                    message:
                                        '8자 이상, 영문 대소문자, 숫자, 특수문자를 이용하세요.',
                                },
                            })}
                        />
                        <PwCheck
                            style={{
                                backgroundImage: !regex.test(
                                    getValues('password'),
                                )
                                    ? `url(${Check_off})`
                                    : `url(${Check_on})`,
                            }}
                        />
                    </PasswordInput>
                </Div>
                {errors.password && (
                    <CautionText>{errors.password.message}</CautionText>
                )}
                <Div>
                    <Label htmlFor="passwordCheck">비밀번호 재확인</Label>
                    <PasswordInput>
                        <Input
                            id="passwordCheck"
                            type="password"
                            width="100%"
                            {...register('passwordCheck', {
                                required: '필수정보 입니다.',
                                validate: {
                                    matchingPw: (value) => {
                                        const password = getValues('password');
                                        return (
                                            password === value ||
                                            '비밀번호가 일치하지 않습니다.'
                                        );
                                    },
                                },
                            })}
                        />
                        <PwCheck
                            style={{
                                backgroundImage:
                                    getValues('password') !== '' &&
                                    getValues('password') ===
                                        getValues('passwordCheck')
                                        ? `url(${Check_on})`
                                        : `url(${Check_off})`,
                            }}
                        />
                    </PasswordInput>
                </Div>
                {errors.passwordCheck && (
                    <CautionText>{errors.passwordCheck.message}</CautionText>
                )}
            </fieldset>
            <Fieldset>
                <div>
                    <Label htmlFor="name">이름</Label>
                    <Input
                        id="name"
                        type="text"
                        width="100%"
                        {...register('name', {
                            required: '필수정보 입니다.',
                        })}
                    />
                </div>
                {errors.name && (
                    <CautionText>{errors.name.message}</CautionText>
                )}
                <Div>
                    <Label>휴대폰번호</Label>
                    <PhoneNumber>
                        <PhoneInput
                            type="text"
                            width="152px"
                            maxLength={3}
                            {...register('phone1', {
                                required: '필수정보 입니다.',
                                minLength: {
                                    value: 3,
                                    message: '모두 입력해주세요.',
                                },
                            })}
                        />
                        <PhoneInput
                            type="text"
                            width="152px"
                            maxLength={4}
                            {...register('phone2', {
                                required: '필수정보 입니다.',
                                minLength: {
                                    value: 3,
                                    message: '모두 입력해주세요.',
                                },
                            })}
                        />
                        <PhoneInput
                            type="text"
                            width="152px"
                            maxLength={4}
                            {...register('phone3', {
                                required: '필수정보 입니다.',
                                minLength: {
                                    value: 4,
                                    message: '모두 입력해주세요.',
                                },
                            })}
                        />
                    </PhoneNumber>
                </Div>
                {errors.phone1 && (
                    <CautionText>{errors.phone1.message}</CautionText>
                )}
                <Div>
                    <Label>이메일</Label>
                    <Input
                        type="text"
                        width="220px"
                        {...register('emailId', {
                            required: '필수정보 입니다.',
                            pattern: {
                                value: /^[a-zA-Z0-9-.]+$/,
                                message: '잘못된 이메일 형식입니다.',
                            },
                        })}
                    />
                    <At>@</At>
                    <Input
                        type="text"
                        width="220px"
                        {...register('emailDomain', {
                            required: '필수정보 입니다.',
                            pattern: {
                                value: /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: '잘못된 이메일 형식입니다.',
                            },
                        })}
                    />
                </Div>
                {(errors.emailId || errors.emailDomain) &&
                    (<CautionText>{errors.emailId?.message}</CautionText> || (
                        <CautionText>{errors.emailDomain?.message}</CautionText>
                    ))}
                {typeBuyers === false && (
                    <Fieldset>
                        <div>
                            <Label>사업자 등록번호</Label>
                            <Input
                                type="text"
                                width="346px"
                                {...register('companyNum', {
                                    required: '필수정보 입니다.',
                                })}
                            />
                            <VaildCheckBtn
                                type="button"
                                onClick={companyValidCheck}
                            >
                                인증
                            </VaildCheckBtn>
                        </div>
                        <Div>
                            <Label htmlFor="storeName">스토어 이름</Label>
                            <Input
                                id="storeName"
                                type="text"
                                width="100%"
                                {...register('storeName', {
                                    required: '필수정보 입니다.',
                                })}
                            />
                        </Div>
                        {errors.storeName && (
                            <CautionText>
                                {errors.storeName.message}
                            </CautionText>
                        )}
                    </Fieldset>
                )}
                <Div2>
                    <label>
                        <Agree
                            type="checkbox"
                            {...register('agreement', {
                                required: true,
                            })}
                        />
                        OUR SHOP의 이용약관 및 개인정보처리방침에 대한 내용을
                        확인하였고 동의합니다.
                    </label>
                    <JoinBtn
                        type="submit"
                        disabled={isValid ? false : true}
                        color={isValid ? '#6997f7' : '#c4c4c4'}
                    >
                        가입하기
                    </JoinBtn>
                </Div2>
            </Fieldset>
        </Form>
    );
};
export default JoinContent;
