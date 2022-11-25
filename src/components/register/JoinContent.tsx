import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from 'constants/constants';
import Check_off from '../../assets/icon-check-off.svg';
import Check_on from '../../assets/icon-check-on.svg';
import {
    Form,
    Div,
    Label,
    Input,
    VaildCheckBtn,
    CautionText,
    PassText,
    PasswordInput,
    PwCheck,
    Fieldset,
    At,
    PhoneNumber,
    PhoneInput,
    Div2,
    Agree,
    JoinBtn,
} from './JoinContentStyle';

interface ILoginType {
    typeBuyers?: boolean;
}

const JoinContent = ({ typeBuyers }: ILoginType) => {
    const [passId, setPassId] = useState(false);
    const [passIdText, setPassIdText] = useState<string>();
    const [passCompany, setPassCompany] = useState(false);
    const [passCompanyText, setPassCompanyText] = useState<string>();

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
        agreement: boolean;
    };

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors, isValid },
    } = useForm<Inputs>({ mode: 'onChange' });

    const onSubmit = (data: Inputs) => {
        if (!passId) {
            alert('아이디 중복확인이 필요합니다.');
        } else if (typeBuyers === false && passCompany == false) {
            alert('사업자 등록번호 인증이 필요합니다.');
        } else {
            handleJoin(data);
        }
    };

    const idRegex = /^[A-za-z0-9]{1,19}$/g;
    const PwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    const idValidCheck = async () => {
        try {
            if (idRegex.test(getValues('id')) === false) return;
            const url: string = BASE_URL + '/accounts/signup/valid/username/';
            const response = await axios.post(url, {
                username: getValues('id'),
            });
            setPassIdText('사용 가능한 아이디입니다 :)');
            setPassId(true);
        } catch (err) {
            console.error(err);
            if (err instanceof AxiosError) {
                if (err.response?.data.FAIL_Message) {
                    setError(
                        'id',
                        {
                            message: err.response?.data.FAIL_Message,
                        },
                        { shouldFocus: true },
                    );
                }
            }
        }
    };

    const companyValidCheck = async () => {
        try {
            if (getValues('companyNum').length !== 10) return;
            const url: string =
                BASE_URL +
                '/accounts/signup/valid/company_registration_number/';
            const response = await axios.post(url, {
                company_registration_number: getValues('companyNum'),
            });
            setPassCompany(true);
            setPassCompanyText(response.data.Success);
        } catch (err) {
            console.error(err);
        }
    };

    const handleJoin = async (data: Inputs) => {
        try {
            const url =
                BASE_URL +
                `/accounts/${typeBuyers ? 'signup/' : 'signup_seller/'}`;
            const response = await axios.post(url, {
                username: data.id,
                password: data.password,
                password2: data.passwordCheck,
                phone_number: data.phone1 + data.phone2 + data.phone3,
                name: data.name,
                company_registration_number: data.companyNum,
                store_name: data.storeName,
            });
            if (response.status === 201) {
                window.location.replace('/complete_join');
            }
        } catch (err) {
            console.error(err);
            if (err instanceof AxiosError) {
                if (err.response?.data.phone_number) {
                    setError(
                        'phone1',
                        {
                            message: err.response?.data.phone_number,
                        },
                        { shouldFocus: true },
                    );
                } else if (err.response?.data.store_name) {
                    setError(
                        'storeName',
                        {
                            message: err.response?.data.store_name,
                        },
                        { shouldFocus: true },
                    );
                }
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <Div>
                    <Label>아이디</Label>
                    <Input
                        type="text"
                        width="346px"
                        {...register('id', {
                            required: '필수 정보입니다.',
                            pattern: {
                                value: idRegex,
                                message:
                                    '20자 이내의 영문(소문자, 대문자), 숫자만 사용 가능합니다.',
                            },
                            onChange(event) {
                                setPassIdText('');
                                setPassId(false);
                            },
                        })}
                    />
                    <VaildCheckBtn type="button" onClick={idValidCheck}>
                        중복확인
                    </VaildCheckBtn>
                </Div>
                <PassText>{passIdText}</PassText>
                {errors.id && <CautionText>{errors.id.message}</CautionText>}
                <Div>
                    <Label htmlFor="password">비밀번호</Label>
                    <PasswordInput>
                        <Input
                            id="password"
                            type="password"
                            width="100%"
                            {...register('password', {
                                required: '필수 정보입니다.',
                                pattern: {
                                    value: PwRegex,
                                    message:
                                        '8자 이상, 최소 하나의 문자 및 하나의 문자를 사용해야 합니다.',
                                },
                            })}
                        />
                        <PwCheck
                            style={{
                                backgroundImage: !PwRegex.test(
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
                                required: '필수 정보입니다.',
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
                                    getValues('password') &&
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
                            required: '필수 정보입니다.',
                            pattern: {
                                value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
                                message: '한글, 영문만 입력 가능합니다.',
                            },
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
                                required: '필수 정보입니다.',
                                minLength: {
                                    value: 3,
                                    message: '모두 입력해 주세요.',
                                },
                                pattern: {
                                    value: /^01[0-9]+$/,
                                    message:
                                        '01으로 시작하는 숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <PhoneInput
                            type="text"
                            width="152px"
                            maxLength={4}
                            {...register('phone2', {
                                required: '필수 정보입니다.',
                                minLength: {
                                    value: 3,
                                    message: '모두 입력해 주세요.',
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <PhoneInput
                            type="text"
                            width="152px"
                            maxLength={4}
                            {...register('phone3', {
                                required: '필수 정보입니다.',
                                minLength: {
                                    value: 4,
                                    message: '모두 입력해 주세요.',
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                    </PhoneNumber>
                </Div>
                {(errors.phone1 && (
                    <CautionText>{errors.phone1.message}</CautionText>
                )) ||
                    (errors.phone2 && (
                        <CautionText>{errors.phone2.message}</CautionText>
                    )) ||
                    (errors.phone3 && (
                        <CautionText>{errors.phone3.message}</CautionText>
                    ))}
                <Div>
                    <Label>이메일</Label>
                    <Input
                        type="text"
                        width="220px"
                        {...register('emailId', {
                            required: '필수 정보입니다.',
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
                            required: '필수 정보입니다.',
                            pattern: {
                                value: /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: '잘못된 이메일 형식입니다.',
                            },
                        })}
                    />
                </Div>
                {(errors.emailId && (
                    <CautionText>{errors.emailId?.message}</CautionText>
                )) ||
                    (errors.emailDomain && (
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
                                    required: '필수 정보입니다.',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message:
                                            '숫자 10자까지만 입력 가능합니다.',
                                    },
                                    onChange(event) {
                                        setPassCompany(false);
                                        setPassCompanyText('');
                                    },
                                })}
                            />
                            <VaildCheckBtn
                                type="button"
                                onClick={companyValidCheck}
                            >
                                인증
                            </VaildCheckBtn>
                        </div>
                        {errors.companyNum && (
                            <CautionText>
                                {errors.companyNum.message}
                            </CautionText>
                        )}
                        <PassText>{passCompanyText}</PassText>
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
                        style={{
                            cursor: isValid ? 'pointer' : 'default',
                        }}
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
