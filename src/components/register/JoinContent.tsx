import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosApi } from '../../apis/axiosInstance';
import { AxiosError } from 'axios';
import { FieldErrors, ILoginType } from 'GlobalType';
import { FORM_MSG, REGEX } from 'constants/index';
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
    phone: { first: number; second: number; third: number };
    email: { id: string; domain: string };
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
                phone_number: Object.values(data.phone).join(''),
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
                        'phone.first',
                        { message: err.response?.data.phone_number },
                        { shouldFocus: true },
                    );
                }
                if (err.response?.data.store_name) {
                    setError(
                        'storeName',
                        { message: err.response?.data.store_name },
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
                    { message: err.response?.data?.FAIL_Message },
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

    const showCautionText = (error: FieldErrors) => {
        return error && <CautionText aria-live="assertive">{error.message}</CautionText>;
    };

    return (
        <Form onSubmit={handleSubmit(handleJoin)}>
            <fieldset>
                <Div>
                    <Label htmlFor="id">아이디</Label>
                    <Input
                        id="id"
                        type="text"
                        placeholder="20자 이내의 영문 및 숫자"
                        width="346px"
                        {...register('id', {
                            required: FORM_MSG.REQUIRED,
                            pattern: {
                                value: ID_REGEX,
                                message:
                                    '20자 이내의 영문(소문자, 대문자), 숫자만 사용 가능합니다.',
                            },
                            onChange() {
                                setPassIdText('');
                                setIsPassId(false);
                            },
                        })}
                    />
                    <VaildCheckBtn aria-label="아이디 중복 확인하기" onClick={idValidCheck}>
                        중복확인
                    </VaildCheckBtn>
                </Div>
                <PassText>{passIdText}</PassText>
                {showCautionText(errors.id!)}
                <Div>
                    <Label htmlFor="password">비밀번호</Label>
                    <PasswordInput>
                        <Input
                            id="password"
                            type="password"
                            placeholder="8자 이상의 문자 및 숫자"
                            width="100%"
                            {...register('password', {
                                required: FORM_MSG.REQUIRED,
                                pattern: {
                                    value: PW_REGEX,
                                    message:
                                        '8자 이상, 최소 하나의 문자 및 하나의 숫자를 포함해야 합니다.',
                                },
                            })}
                        />
                        <PwCheck
                            style={{
                                backgroundImage:
                                    getValues('password') && !errors.password
                                        ? `url(${Check_on})`
                                        : `url(${Check_off})`,
                            }}
                        />
                    </PasswordInput>
                </Div>
                {showCautionText(errors.password!)}
                <Div>
                    <Label htmlFor="passwordCheck">비밀번호 재확인</Label>
                    <PasswordInput>
                        <Input
                            id="passwordCheck"
                            type="password"
                            width="100%"
                            {...register('passwordCheck', {
                                required: FORM_MSG.REQUIRED,
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
                {showCautionText(errors.passwordCheck!)}
            </fieldset>
            <Fieldset>
                <div>
                    <Label htmlFor="name">이름</Label>
                    <Input
                        id="name"
                        type="text"
                        width="100%"
                        {...register('name', {
                            required: FORM_MSG.REQUIRED,
                            pattern: {
                                value: REGEX.ONLY_LETTER,
                                message: '한글, 영문만 입력 가능합니다.',
                            },
                        })}
                    />
                </div>
                {showCautionText(errors.name!)}
                <Div>
                    <Label>휴대폰번호</Label>
                    <PhoneNumber>
                        <PhoneInput
                            width="152px"
                            maxLength={3}
                            title="휴대폰번호 첫 세 자리"
                            {...register('phone.first', {
                                required: FORM_MSG.REQUIRED,
                                minLength: { value: 3, message: FORM_MSG.INSUFFICIENT_LENGTH },
                                pattern: {
                                    value: /^01[0-9]+$/,
                                    message: '01으로 시작하는 숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <PhoneInput
                            width="152px"
                            maxLength={4}
                            title="휴대폰번호 중간 네 자리"
                            {...register('phone.second', {
                                required: FORM_MSG.REQUIRED,
                                minLength: { value: 3, message: FORM_MSG.INSUFFICIENT_LENGTH },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: FORM_MSG.ONLY_NUMBER,
                                },
                            })}
                        />
                        <PhoneInput
                            width="152px"
                            maxLength={4}
                            title="휴대폰번호 마지막 네 자리"
                            {...register('phone.third', {
                                required: FORM_MSG.REQUIRED,
                                minLength: { value: 4, message: FORM_MSG.INSUFFICIENT_LENGTH },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: FORM_MSG.ONLY_NUMBER,
                                },
                            })}
                        />
                    </PhoneNumber>
                </Div>
                {showCautionText(errors.phone?.first!) ||
                    showCautionText(errors.phone?.second!) ||
                    showCautionText(errors.phone?.third!)}
                <Div>
                    <Label>이메일</Label>
                    <Input
                        type="text"
                        width="220px"
                        title="이메일 주소 중 아이디"
                        {...register('email.id', {
                            required: FORM_MSG.REQUIRED,
                            pattern: {
                                value: ID_REGEX,
                                message: '잘못된 이메일 형식입니다.(아이디)',
                            },
                        })}
                    />
                    <At>@</At>
                    <Input
                        type="text"
                        width="220px"
                        title="이메일 주소 중 도메인"
                        {...register('email.domain', {
                            required: FORM_MSG.REQUIRED,
                            pattern: {
                                value: /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: '잘못된 이메일 형식입니다.(도메인)',
                            },
                        })}
                    />
                </Div>
                {showCautionText(errors.email?.id!) || showCautionText(errors.email?.domain!)}

                {!typeBuyers && (
                    <Fieldset>
                        <div>
                            <Label htmlFor="companyValid">사업자 등록번호</Label>
                            <Input
                                id="companyValid"
                                type="text"
                                width="346px"
                                {...register('companyNum', {
                                    required: FORM_MSG.REQUIRED,
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: '숫자 10자까지만 입력 가능합니다.',
                                    },
                                    onChange() {
                                        setIsPassCompany(false);
                                        setPassCompanyText('');
                                    },
                                })}
                            />
                            <VaildCheckBtn
                                aria-label="사업자 등록번호 인증하기"
                                onClick={companyValidCheck}
                            >
                                인증
                            </VaildCheckBtn>
                        </div>
                        {showCautionText(errors.companyNum!)}
                        <PassText>{passCompanyText}</PassText>
                        <Div>
                            <Label htmlFor="storeName">스토어 이름</Label>
                            <Input
                                id="storeName"
                                type="text"
                                width="100%"
                                {...register('storeName', { required: FORM_MSG.REQUIRED })}
                            />
                        </Div>
                        {showCautionText(errors.storeName!)}
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
                        disabled={!isValid}
                        color={isValid ? 'var(--point-color)' : 'var(--base-gray)'}
                    >
                        가입하기
                    </JoinBtn>
                </Div2>
            </Fieldset>
        </Form>
    );
};
export default JoinContent;
