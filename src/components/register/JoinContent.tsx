import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
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
    const [id, setId] = useState<string>();
    const [cautionText, setCautionText] = useState<string>();
    const [passText, setPassText] = useState<string>();
    const [passId, setPassId] = useState(false);

    console.log('passId', passId);

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
    } = useForm<Inputs>({ mode: 'onChange' });

    const onSubmit = (data: Inputs) => {
        console.log('훅', data);
        if (!passId) {
            setCautionText('중복확인을 해주세요.');
        } else if (typeBuyers === true) {
            handleBuyerJoin(data);
        } else {
            handleSellerJoin(data);
        }
    };

    useEffect(() => {
        setCautionText('');
        setPassText('');
        setPassId(false);
    }, [id]);

    const regex = /^[A-za-z0-9]{6,19}/g;
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
                setPassId(true);
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
        } catch (err) {
            console.error(err);
        }
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
        } catch (err) {
            console.error(err);
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
                        value={id || ''}
                        {...register('id', {
                            required: '필수정보 입니다.',
                            pattern: {
                                value: regex,
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
                                required: '필수정보 입니다.',
                                minLength: {
                                    value: 3,
                                    message: '모두 입력해주세요.',
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
                            {...register('phone2', {
                                required: '필수정보 입니다.',
                                minLength: {
                                    value: 3,
                                    message: '모두 입력해주세요.',
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
                                required: '필수정보 입니다.',
                                minLength: {
                                    value: 4,
                                    message: '모두 입력해주세요.',
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: '숫자만 입력 가능합니다.',
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
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message:
                                            '숫자 10자리만 입력 가능합니다.',
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
