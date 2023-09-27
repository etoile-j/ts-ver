import {
    UseFormRegister,
    FieldValues,
    FieldError,
    DeepMap,
} from 'react-hook-form';
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
    return (
        <>
            <fieldset>
                <Legend>
                    <legend>주문자 정보</legend>
                </Legend>
                <Line>
                    <Label>이름</Label>
                    <Input type="text" width="334px" />
                </Line>
                <Line>
                    <Label>휴대폰</Label>
                    <span>
                        <PhoneInput
                            type="text"
                            inputMode="tel"
                            width="80px"
                            maxLength={3}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            type="text"
                            inputMode="tel"
                            width="100px"
                            maxLength={4}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            type="text"
                            inputMode="tel"
                            width="100px"
                            maxLength={4}
                        />
                    </span>
                </Line>
                <Line>
                    <Label>이메일</Label>
                    <Input type="email" width="334px" />
                </Line>
            </fieldset>
            <fieldset>
                <Legend>
                    <legend>배송지 정보</legend>
                </Legend>
                <Line>
                    <Label>수령인</Label>
                    <Input
                        type="text"
                        width="334px"
                        {...register('name', {
                            required: '필수 정보입니다.',
                            pattern: {
                                value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
                                message: '한글, 영문만 입력 가능합니다.',
                            },
                        })}
                    />
                    {errors.name && (
                        <CautionText aria-live="assertive">
                            {errors.name.message}
                        </CautionText>
                    )}
                </Line>
                <Line>
                    <Label>휴대폰</Label>
                    <span>
                        <PhoneInput
                            type="text"
                            inputMode="tel"
                            width="80px"
                            maxLength={3}
                            {...register('phone1', {
                                required: '필수 정보입니다.',
                                minLength: {
                                    value: 2,
                                    message: '모두 입력해 주세요.',
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: '숫자만 입력 가능합니다.',
                                },
                            })}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            type="text"
                            inputMode="tel"
                            width="100px"
                            maxLength={4}
                            {...register('phone2', {
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
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            type="text"
                            inputMode="tel"
                            width="100px"
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
                        {(errors.phone1 && (
                            <CautionText aria-live="assertive">
                                {errors.phone1.message}
                            </CautionText>
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
                    </span>
                </Line>
                <Line>
                    <Label>배송주소</Label>
                    <Input type="text" width="170px" />
                    <PostCodeBtn>우편번호 조회</PostCodeBtn>
                    {(errors.address1 && (
                        <CautionText aria-live="assertive">
                            {errors.address1.message}
                        </CautionText>
                    )) ||
                        (errors.address2 && (
                            <CautionText aria-live="assertive">
                                {errors.address2.message}
                            </CautionText>
                        )) ||
                        (errors.deliveryMessage && (
                            <CautionText aria-live="assertive">
                                {errors.deliveryMessage.message}
                            </CautionText>
                        ))}
                    <br />
                    <Label></Label>
                    <AddressInput
                        type="text"
                        width="600px"
                        {...register('address1', {
                            required: '주소를 입력해 주세요.',
                            pattern: {
                                value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
                                message: '한글, 영문만 입력 가능합니다.',
                            },
                        })}
                    />
                    <br />
                    <Label></Label>
                    <Input
                        type="text"
                        width="600px"
                        {...register('address2', {
                            required: '나머지 주소를 입력해 주세요.',
                        })}
                    />
                </Line>
                <Line>
                    <Label>배송 메시지</Label>
                    <Input
                        type="text"
                        width="600px"
                        {...register('deliveryMessage', {
                            required: '배송 메세지를 입력해 주세요.',
                            pattern: {
                                value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/,
                                message: '한글, 영문만 입력 가능합니다.',
                            },
                        })}
                    />
                </Line>
            </fieldset>
        </>
    );
};
export default DeliveryInfo;
