import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Wrap, RadioInput, Label, KakkoLabel } from './PaymentMethodStyle';

const PaymentMethod = ({ register }: { register: UseFormRegister<FieldValues> }) => {
    return (
        <Wrap>
            <Label>
                <RadioInput value="CARD" {...register('paymentMethod', { required: true })} />
                신용/체크카드
            </Label>
            <Label>
                <RadioInput
                    value="DEPOSIT"
                    {...register('paymentMethod', { required: true })}
                />
                무통장 입금
            </Label>
            <Label>
                <RadioInput
                    value="PHONE_PAYMENT"
                    {...register('paymentMethod', { required: true })}
                />
                휴대폰 결제
            </Label>
            <Label>
                <RadioInput
                    value="NAVERPAY"
                    {...register('paymentMethod', { required: true })}
                />
                네이버페이
            </Label>
            <KakkoLabel>
                <RadioInput
                    value="KAKAOPAY"
                    {...register('paymentMethod', { required: true })}
                />
                카카오페이
            </KakkoLabel>
        </Wrap>
    );
};
export default PaymentMethod;
