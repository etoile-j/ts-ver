import { fireEvent, screen, waitFor } from '@testing-library/react';
import { paymentRender } from 'utils/test';

describe('payment 페이지 테스트', () => {
    test('수령인에 공백을 입력하면 에러 메시지가 표시된다.', async () => {
        paymentRender();

        const receiverInput = screen.getByLabelText('수령인');

        fireEvent.change(receiverInput, { target: { value: '  ' } });

        await waitFor(() => {
            expect(screen.getByText('수령인을 입력해 주세요.')).toBeInTheDocument();
        });
    });

    test('휴대폰에 숫자가 아닌 문자를 입력하면 에러 메시지가 표시된다.', async () => {
        paymentRender();

        const phone1Input = screen.getByTitle('휴대폰번호 첫 세 자리');

        fireEvent.change(phone1Input, { target: { value: 'kk' } });

        await waitFor(() => {
            expect(screen.getByText('숫자만 입력 가능합니다.')).toBeInTheDocument();
        });
    });

    test('휴대폰에 입력해야 하는 길이를 채우지 못하면 에러 메시지가 표시된다.', async () => {
        paymentRender();

        const phone2Input = screen.getByTitle('휴대폰번호 중간 네 자리');

        fireEvent.change(phone2Input, { target: { value: '71' } });

        await waitFor(() => {
            expect(screen.getByText('모두 입력해 주세요.')).toBeInTheDocument();
        });
    });

    test('배송메시지에 공백을 입력하면 에러 메시지가 표시된다.', async () => {
        paymentRender();

        const deliveryMessageInput = screen.getByLabelText('배송 메시지');

        fireEvent.change(deliveryMessageInput, { target: { value: ' ' } });

        await waitFor(() => {
            expect(screen.getByText('배송 메세지를 입력해 주세요.')).toBeInTheDocument();
        });
    });

    test('모든 항목을 올바르게 입력하거나 클릭하면 결제하기 버튼이 활성화된다.', async () => {
        paymentRender();

        const receiverInput = screen.getByLabelText('수령인');
        const phone1Input = screen.getByTitle('휴대폰번호 첫 세 자리');
        const phone2Input = screen.getByTitle('휴대폰번호 중간 네 자리');
        const phone3Input = screen.getByTitle('휴대폰번호 마지막 네 자리');
        const address1Input = screen.getByTitle('기본 주소');
        const address2Input = screen.getByTitle('상세 주소');
        const deliveryMessageInput = screen.getByLabelText('배송 메시지');
        const paymentMethoudInput = screen.getByLabelText('무통장 입금');
        const agreeInput = screen.getByRole('checkbox');
        const paymentButton = screen.getByRole('button', { name: '결제하기' });

        fireEvent.change(receiverInput, { target: { value: '수진' } });
        fireEvent.change(phone1Input, { target: { value: '010' } });
        fireEvent.change(phone2Input, { target: { value: '1234' } });
        fireEvent.change(phone3Input, { target: { value: '5678' } });
        fireEvent.change(address1Input, {
            target: { value: '서울특별시 서초구 OUR로 1' },
        });
        fireEvent.change(address2Input, { target: { value: '1101' } });
        fireEvent.change(deliveryMessageInput, { target: { value: '잘 부탁드립니다.' } });
        fireEvent.click(paymentMethoudInput);
        fireEvent.click(agreeInput);

        await waitFor(() => {
            expect(paymentButton).toBeEnabled();
        });
    });
});
