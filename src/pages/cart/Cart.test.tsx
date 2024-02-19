import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import server from 'mocks/server';
import { componentRender } from 'utils/test';
import { BASE_URL } from 'apis/axiosInstance';
import CartContent from 'components/cart/CartContent';

describe('처음 장바구니 진입 시, 장바구니에 담긴 상품이 2개 있는 경우', () => {
    test('NoneCartItem 컴포넌트가 렌더링되지 않는다.', async () => {
        componentRender(<CartContent />);

        await waitFor(() => {
            const textEl = screen.queryByText('장바구니에 담긴 상품이 없습니다.');
            expect(textEl).toBeNull();
        });
    });

    test('담긴 상품 2개가 렌더링된다.', async () => {
        componentRender(<CartContent />);

        await waitFor(() => {
            const deleteButton = screen.getAllByLabelText('삭제');
            expect(deleteButton).toHaveLength(2);
        });
    });

    test('최상단 체크박스 및 상품 2개의 체크박스가 체크되어 있다.', async () => {
        componentRender(<CartContent />);

        await waitFor(() => {
            const checkboxes = screen.getAllByRole('checkbox', { checked: true });
            expect(checkboxes).toHaveLength(3);
        });
    });

    test('최하단의 "주문하기" 버튼이 활성화되어 있다.', async () => {
        componentRender(<CartContent />);

        const orderButtons = await screen.findAllByText('주문하기');
        expect(orderButtons[2]).toBeEnabled();
    });

    test('최상단 체크박스를 체크 해제하면, 최하단의 "주문하기" 버튼이 비활성화 된다.', async () => {
        componentRender(<CartContent />);

        const checkboxes = await screen.findAllByRole('checkbox', { checked: true });
        fireEvent.click(checkboxes[0]);

        const orderButtons = screen.getAllByText('주문하기');
        expect(orderButtons[2]).toBeDisabled();
    });
});

describe('처음 장바구니 진입 시, 장바구니에 담긴 상품이 없는 경우', () => {
    beforeEach(() => {
        server.use(
            rest.get(BASE_URL + '/cart/', (_, res, ctx) =>
                res(ctx.json({ count: 0, results: [] })),
            ),
        );
    });

    test('NoneCartItem 컴포넌트가 렌더링된다.', async () => {
        componentRender(<CartContent />);

        await waitFor(() => {
            const emptyCartText = screen.getByText('장바구니에 담긴 상품이 없습니다.');
            expect(emptyCartText).toBeInTheDocument();
        });
    });

    test('최상단 체크박스가 체크 해제되어 있다.', async () => {
        componentRender(<CartContent />);

        await waitFor(() => {
            const toggleAll = screen.getByRole('checkbox', { checked: false });
            expect(toggleAll).toBeInTheDocument();
        });
    });
});
