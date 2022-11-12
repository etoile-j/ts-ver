import {
    Legend,
    Line,
    Label,
    Input,
    PhoneInput,
    AddressInput,
    Hyphen,
    PostCodeBtn,
} from './DeliveryInfoStyle';

const DeliveryInfo = ({ register }: any) => {
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
                        <PhoneInput type="text" width="80px" maxLength={3} />
                        <Hyphen>-</Hyphen>
                        <PhoneInput type="text" width="100px" maxLength={4} />
                        <Hyphen>-</Hyphen>
                        <PhoneInput type="text" width="100px" maxLength={4} />
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
                            required: '필수정보 입니다.',
                        })}
                    />
                </Line>
                <Line>
                    <Label>휴대폰</Label>
                    <span>
                        <PhoneInput
                            type="text"
                            width="80px"
                            maxLength={3}
                            {...register('phone1', {
                                required: '필수정보 입니다.',
                            })}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            type="text"
                            width="100px"
                            maxLength={4}
                            {...register('phone2', {
                                required: '필수정보 입니다.',
                            })}
                        />
                        <Hyphen>-</Hyphen>
                        <PhoneInput
                            type="text"
                            width="100px"
                            maxLength={4}
                            {...register('phone3', {
                                required: '필수정보 입니다.',
                            })}
                        />
                    </span>
                </Line>
                <Line>
                    <Label>배송주소</Label>
                    <Input type="text" width="170px" />
                    <PostCodeBtn>우편번호 조회</PostCodeBtn>
                    <br />
                    <Label></Label>
                    <AddressInput
                        type="text"
                        width="600px"
                        {...register('address1', {
                            required: '필수정보 입니다.',
                        })}
                    />
                    <br />
                    <Label></Label>
                    <Input
                        type="text"
                        width="600px"
                        {...register('address2', {
                            required: '필수정보 입니다.',
                        })}
                    />
                </Line>
                <Line>
                    <Label>배송 메시지</Label>
                    <Input
                        type="text"
                        width="600px"
                        {...register('deliveryMessage')}
                    />
                </Line>
            </fieldset>
        </>
    );
};
export default DeliveryInfo;
