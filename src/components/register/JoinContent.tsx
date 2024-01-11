import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosApi } from '../../apis/axiosInstance';
import { AxiosError } from 'axios';
import { ILoginType } from 'GlobalType';
import { REGEX } from 'constants/index';
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

interface IJoinInputs {
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
}

const ID_REGEX = /^[A-za-z0-9]{1,19}$/g;
const PW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

const JoinContent = ({ typeBuyers }: ILoginType) => {
    const [isPassId, setIsPassId] = useState(false);
    const [passIdText, setPassIdText] = useState<string>('');
    const [isPassCompany, setIsPassCompany] = useState(false);
    const [passCompanyText, setPassCompanyText] = useState<string>('');

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors, isValid },
    } = useForm<IJoinInputs>({ mode: 'onChange' });

    const handleJoin = async (data: IJoinInputs) => {
        if (!isPassId) {
            alert('아이디 중복확인이 필요합니다.');
            return;
        }
        if (!typeBuyers && !isPassCompany) {
            alert('사업자 등록번호 인증이 필요합니다.');
            return;
        }

        try {
            const url = `/accounts/${typeBuyers ? 'signup/' : 'signup_seller/'}`;
            const response = await axiosApi.post(url, {
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
                }
                if (err.response?.data.store_name) {
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

    const idValidCheck = async () => {
        if (!ID_REGEX.test(getValues('id'))) return;

        try {
            const response = await axiosApi.post('/accounts/signup/valid/username/', {
                username: getValues('id'),
            });

            if (response.data.Success) {
                setPassIdText('사용 가능한 아이디입니다 :)');
                setIsPassId(true);
            }
        } catch (err) {
            console.error(err);
            if (err instanceof AxiosError) {
                setError(
                    'id',
                    {
                        message: err.response?.data?.FAIL_Message,
                    },
                    { shouldFocus: true },
                );
            }
        }
    };

    const companyValidCheck = async () => {
        try {
            if (getValues('companyNum').length !== 10) return;

            const url = '/accounts/signup/valid/company_registration_number/';
            const response = await axiosApi.post(url, {
                company_registration_number: getValues('companyNum'),
            });
            setIsPassCompany(true);
            setPassCompanyText(response.data.Success);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Form onSubmit={handleSubmit(handleJoin)}>
            <fieldset>
                <Div>
                    <Label htmlFor="id">아이디</Label>
                    <Input
                        id="id"
                        type="text"
                        width="346px"
                        {...register('id', {
                            required: '필수 정보입니다.',
                            pattern: {
                                value: ID_REGEX,
                                message:
                                    '20자 이내의 영문(소문자, 대문자), 숫자만 사용 가능합니다.',
                            },
                            onChange(event) {
                                setPassIdText('');
                                setIsPassId(false);
                            },
                        })}
                    />
                    <VaildCheckBtn
                        type="button"
                        aria-label="아이디 중복 확인하기"
                        onClick={idValidCheck}
                    >
                        중복확인
                    </VaildCheckBtn>
                </Div>
                <PassText>{passIdText}</PassText>
                {errors.id && (
                    <CautionText aria-live="assertive">{errors.id.message}</CautionText>
                )}
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
                                    value: PW_REGEX,
                                    message:
                                        '8자 이상, 최소 하나의 문자 및 하나의 문자를 사용해야 합니다.',
                                },
                            })}
                        />
                        <PwCheck
                            style={{
                                backgroundImage: !PW_REGEX.test(getValues('password'))
                                    ? `url(${Check_off})`
                                    : `url(${Check_on})`,
                            }}
                        />
                    </PasswordInput>
                </Div>
                {errors.password && (
                    <CautionText aria-live="assertive">{errors.password.message}</CautionText>
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
                                    getValues('password') === getValues('passwordCheck')
                                        ? `url(${Check_on})`
                                        : `url(${Check_off})`,
                            }}
                        />
                    </PasswordInput>
                </Div>
                {errors.passwordCheck && (
                    <CautionText aria-live="assertive">
                        {errors.passwordCheck.message}
                    </CautionText>
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
                                value: REGEX.ONLY_LETTER,
                                message: '한글, 영문만 입력 가능합니다.',
                            },
                        })}
                    />
                </div>
                {errors.name && (
                    <CautionText aria-live="assertive">{errors.name.message}</CautionText>
                )}
                <Div>
                    <Label>휴대폰번호</Label>
                    <PhoneNumber>
                        <PhoneInput
                            type="text"
                            width="152px"
                            maxLength={3}
                            title="휴대폰번호 첫 세 자리"
                            {...register('phone1', {
                                required: '필수 정보입니다.',
                                minLength: {
                                    value: 3,
                                    message: '모두 입력해 주세요.',
                                },
                                pattern: {
                                    value: /^01[0-9]+$/,
                                    message: '01으로 시작하는 숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <PhoneInput
                            type="text"
                            width="152px"
                            maxLength={4}
                            title="휴대폰번호 중간 네 자리"
                            {...register('phone2', {
                                required: '필수 정보입니다.',
                                minLength: {
                                    value: 3,
                                    message: '모두 입력해 주세요.',
                                },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <PhoneInput
                            type="text"
                            inputMode="tel"
                            width="152px"
                            maxLength={4}
                            title="휴대폰번호 마지막 네 자리"
                            {...register('phone3', {
                                required: '필수 정보입니다.',
                                minLength: {
                                    value: 4,
                                    message: '모두 입력해 주세요.',
                                },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                    </PhoneNumber>
                </Div>
                {(errors.phone1 && (
                    <CautionText aria-live="assertive">{errors.phone1.message}</CautionText>
                )) ||
                    (errors.phone2 && (
                        <CautionText aria-live="assertive">
                            {errors.phone2.message}
                        </CautionText>
                    )) ||
                    (errors.phone3 && (
                        <CautionText aria-live="assertive">
                            {errors.phone3.message}
                        </CautionText>
                    ))}
                <Div>
                    <Label>이메일</Label>
                    <Input
                        type="text"
                        width="220px"
                        title="이메일 주소 중 아이디"
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
                        title="이메일 주소 중 도메인"
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
                    <CautionText aria-live="assertive">{errors.emailId?.message}</CautionText>
                )) ||
                    (errors.emailDomain && (
                        <CautionText aria-live="assertive">
                            {errors.emailDomain?.message}
                        </CautionText>
                    ))}
                {!typeBuyers && (
                    <Fieldset>
                        <div>
                            <Label htmlFor="companyValid">사업자 등록번호</Label>
                            <Input
                                id="companyValid"
                                type="text"
                                width="346px"
                                {...register('companyNum', {
                                    required: '필수 정보입니다.',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: '숫자 10자까지만 입력 가능합니다.',
                                    },
                                    onChange(event) {
                                        setIsPassCompany(false);
                                        setPassCompanyText('');
                                    },
                                })}
                            />
                            <VaildCheckBtn
                                type="button"
                                aria-label="사업자 등록번호 인증하기"
                                onClick={companyValidCheck}
                            >
                                인증
                            </VaildCheckBtn>
                        </div>
                        {errors.companyNum && (
                            <CautionText aria-live="assertive">
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
                                {...register('storeName', { required: '필수정보 입니다.' })}
                            />
                        </Div>
                        {errors.storeName && (
                            <CautionText aria-live="assertive">
                                {errors.storeName.message}
                            </CautionText>
                        )}
                    </Fieldset>
                )}
                <Div2>
                    <label>
                        <Agree
                            type="checkbox"
                            {...register('agreement', { required: true })}
                        />
                        OUR SHOP의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
                        동의합니다.
                    </label>
                    <JoinBtn
                        type="submit"
                        disabled={!isValid}
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
