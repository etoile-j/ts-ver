import { UseFormRegister, FieldValues } from 'react-hook-form';
import { PAYMENT_METHOD } from 'constants/index';
import { Wrap, RadioInput, Label, KakkoLabel } from './PaymentMethodStyle';

const PaymentMethod = ({ register }: { register: UseFormRegister<FieldValues> }) => {
    return (
        <Wrap>
            <Label>
                <RadioInput value="CARD" {...register('paymentMethod', { required: true })} />
                {PAYMENT_METHOD.CARD}
            </Label>
            <Label>
                <RadioInput
                    value="DEPOSIT"
                    {...register('paymentMethod', { required: true })}
                />
                {PAYMENT_METHOD.DEPOSIT}
            </Label>
            <Label>
                <RadioInput
                    value="PHONE_PAYMENT"
                    {...register('paymentMethod', { required: true })}
                />
                {PAYMENT_METHOD.PHONE_PAYMENT}
            </Label>
            <Label>
                <RadioInput
                    value="NAVERPAY"
                    {...register('paymentMethod', { required: true })}
                />
                {PAYMENT_METHOD.NAVERPAY}
            </Label>
            <KakkoLabel>
                <RadioInput
                    value="KAKAOPAY"
                    {...register('paymentMethod', { required: true })}
                />
                {PAYMENT_METHOD.KAKAOPAY}
            </KakkoLabel>
        </Wrap>
    );
};
export default PaymentMethod;
