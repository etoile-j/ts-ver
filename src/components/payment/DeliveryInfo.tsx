import { UseFormRegister, FieldValues, FieldError, DeepMap } from 'react-hook-form';
import { FORM_MSG, REGEX } from 'constants/index';
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
        return value.trim() !== '' || `${field} 입력해 주세요.`;
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
                        <PhoneInput title="휴대폰 첫 세 자리" width="80px" maxLength={3} />
                        <Hyphen>-</Hyphen>
                        <PhoneInput title="휴대폰 중간 네 자리" width="100px" maxLength={4} />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            title="휴대폰 마지막 네 자리"
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
                            required: FORM_MSG.REQUIRED,
                            validate: (value) => isWhitespaceOnly(value, '수령인을'),
                        })}
                    />
                    {showCautionText(errors.receiver)}
                </Line>
                <Line>
                    <Label>휴대폰</Label>
                    <span>
                        <PhoneInput
                            title="휴대폰번호 첫 세 자리"
                            width="80px"
                            maxLength={3}
                            {...register('phone.first', {
                                required: FORM_MSG.REQUIRED,
                                minLength: { value: 2, message: FORM_MSG.INSUFFICIENT_LENGTH },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: FORM_MSG.ONLY_NUMBER,
                                },
                            })}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            title="휴대폰번호 중간 네 자리"
                            width="100px"
                            maxLength={4}
                            {...register('phone.second', {
                                required: FORM_MSG.REQUIRED,
                                minLength: { value: 4, message: FORM_MSG.INSUFFICIENT_LENGTH },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: FORM_MSG.ONLY_NUMBER,
                                },
                            })}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            title="휴대폰번호 마지막 네 자리"
                            width="100px"
                            maxLength={4}
                            {...register('phone.third', {
                                required: FORM_MSG.REQUIRED,
                                minLength: { value: 4, message: FORM_MSG.INSUFFICIENT_LENGTH },
                                pattern: {
                                    value: REGEX.ONLY_NUMBER,
                                    message: FORM_MSG.ONLY_NUMBER,
                                },
                            })}
                        />
                        {showCautionText(errors.phone?.first) ||
                            showCautionText(errors.phone?.second) ||
                            showCautionText(errors.phone?.third)}
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
                    <Label />
                    <AddressInput
                        title="기본 주소"
                        type="text"
                        width="600px"
                        {...register('address1', {
                            required: '주소를 입력해 주세요.',
                            validate: (value) => isWhitespaceOnly(value, '주소를'),
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
                            validate: (value) => isWhitespaceOnly(value, '나머지 주소를'),
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
                            validate: (value) => isWhitespaceOnly(value, '배송 메세지를'),
                        })}
                    />
                </Line>
            </fieldset>
        </>
    );
};
export default DeliveryInfo;
