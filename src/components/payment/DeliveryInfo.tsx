import { UseFormRegister, FieldValues, FieldError, DeepMap } from 'react-hook-form';
import { REGEX } from 'constants/index';
import {
    Legend,
    Line,
    Label,
    Input,
    PhoneInput,
    AddressInput,
    Hyphen,
    PostCodeBtn,
    CautionText,
} from './DeliveryInfoStyle';

interface IForm {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
    TFieldValues,
    FieldError
>;

const DeliveryInfo = ({ register, errors }: IForm) => {
    const showCautionText = (error: FieldErrors<FieldValues>) => {
        return error && <CautionText aria-live="assertive">{error.message}</CautionText>;
    };

    const isWhitespaceOnly = (value: string, field: string) => {
        return value.trim() !== '' || `${field}를 입력해 주세요.`;
    };

    return (
        <>
            <fieldset>
                <Legend>
                    <legend>주문자 정보</legend>
                </Legend>
                <Line>
                    <Label htmlFor="buyer_name">이름</Label>
                    <Input
                        id="buyer_name"
                        aria-label="주문자 이름"
                        type="text"
                        width="334px"
                    />
                </Line>
                <Line>
                    <Label>휴대폰</Label>
                    <span>
                        <PhoneInput
                            title="휴대폰번호 첫 세 자리"
                            type="text"
                            inputMode="tel"
                            width="80px"
                            maxLength={3}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            title="휴대폰번호 중간 네 자리"
                            type="text"
                            inputMode="tel"
                            width="100px"
                            maxLength={4}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            title="휴대폰번호 마지막 네 자리"
                            type="text"
                            inputMode="tel"
                            width="100px"
                            maxLength={4}
                        />
                    </span>
                </Line>
                <Line>
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" width="334px" />
                </Line>
            </fieldset>
            <fieldset>
                <Legend>
                    <legend>배송지 정보</legend>
                </Legend>
                <Line>
                    <Label htmlFor="receiver">수령인</Label>
                    <Input
                        id="receiver"
                        type="text"
                        width="334px"
                        {...register('receiver', {
                            required: '필수 정보입니다.',
                            pattern: {
                                value: REGEX.ONLY_LETTER,
                                message: '한글, 영문만 입력 가능합니다.',
                            },
                        })}
                    />
                    {showCautionText(errors.receiver)}
                </Line>
                <Line>
                    <Label>휴대폰</Label>
                    <span>
                        <PhoneInput
                            title="휴대폰번호 첫 세 자리"
                            type="text"
                            inputMode="tel"
                            width="80px"
                            maxLength={3}
                            {...register('phone1', {
                                required: '필수 정보입니다.',
                                minLength: { value: 2, message: '모두 입력해 주세요.' },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            title="휴대폰번호 중간 네 자리"
                            type="text"
                            inputMode="tel"
                            width="100px"
                            maxLength={4}
                            {...register('phone2', {
                                required: '필수 정보입니다.',
                                minLength: { value: 4, message: '모두 입력해 주세요.' },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            title="휴대폰번호 마지막 네 자리"
                            type="text"
                            inputMode="tel"
                            width="100px"
                            maxLength={4}
                            {...register('phone3', {
                                required: '필수 정보입니다.',
                                minLength: { value: 4, message: '모두 입력해 주세요.' },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        {showCautionText(errors.phone1) ||
                            showCautionText(errors.phone2) ||
                            showCautionText(errors.phone3)}
                    </span>
                </Line>
                <Line>
                    <Label>배송주소</Label>
                    <Input title="우편번호" type="text" width="170px" />
                    <PostCodeBtn>우편번호 조회</PostCodeBtn>
                    {showCautionText(errors.address1) ||
                        showCautionText(errors.address2) ||
                        showCautionText(errors.deliveryMessage)}
                    <br />
                    <Label></Label>
                    <AddressInput
                        title="기본 주소"
                        type="text"
                        width="600px"
                        {...register('address1', {
                            required: '주소를 입력해 주세요.',
                            validate: (value) => isWhitespaceOnly(value, '주소'),
                        })}
                    />
                    <br />
                    <Label />
                    <Input
                        title="상세 주소"
                        placeholder="나머지 주소"
                        type="text"
                        width="600px"
                        {...register('address2', {
                            required: '나머지 주소를 입력해 주세요.',
                            validate: (value) => isWhitespaceOnly(value, '나머지 주소'),
                        })}
                    />
                </Line>
                <Line>
                    <Label htmlFor="delivery_message">배송 메시지</Label>
                    <Input
                        id="delivery_message"
                        type="text"
                        width="600px"
                        {...register('deliveryMessage', {
                            required: '배송 메세지를 입력해 주세요.',
                            validate: (value) => isWhitespaceOnly(value, '배송 메세지'),
                        })}
                    />
                </Line>
            </fieldset>
        </>
    );
};
export default DeliveryInfo;
