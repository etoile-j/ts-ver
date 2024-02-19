import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import server from 'mocks/server';
import { componentRender } from 'utils/test';
import { BASE_URL } from 'apis/axiosInstance';
import { product_mock_17 } from 'mocks/data';
import DashBoard from './DashBoard';

describe('DashBoard page: 상품이 2개인 경우', () => {
    test('상품 2개가 표시된다.', async () => {
        componentRender(<DashBoard />);

        await waitFor(() => {
            const productImgElement = screen.getAllByAltText('상품 이미지');
            expect(productImgElement).toHaveLength(2);
        });
    });

    test('1 페이지 버튼이 있다.', async () => {
        componentRender(<DashBoard />);

        await waitFor(() => {
            const page1Button = screen.getByRole('button', { name: '1' });
            expect(page1Button).toBeInTheDocument();
        });
    });

    test('2 페이지 버튼은 존재하지 않는다.', async () => {
        componentRender(<DashBoard />);

        await waitFor(() => {
            const page2Button = screen.queryByRole('button', { name: '2' });
            expect(page2Button).not.toBeInTheDocument();
        });
    });

    test('이전, 다음 페이지로 이동하는 버튼이 disable 상태이다.', async () => {
        componentRender(<DashBoard />);

        const previousButton = await screen.findByLabelText('이전 페이지로 이동');
        const nextButton = await screen.findByLabelText('다음 페이지로 이동');

        expect(previousButton).toBeDisabled();
        expect(nextButton).toBeDisabled();
    });
});

describe('DashBoard page: 상품이 17개인 경우', () => {
    beforeEach(() => {
        server.use(
            rest.get(BASE_URL + '/seller/', (_, res, ctx) => res(ctx.json(product_mock_17))),
        );
    });

    test('1, 2 페이지 버튼이 있다.', async () => {
        componentRender(<DashBoard />);

        const page1Button = await screen.findByRole('button', { name: '1' });
        const page2Button = await screen.findByRole('button', { name: '2' });

        expect(page1Button).toBeInTheDocument();
        expect(page2Button).toBeInTheDocument();
    });

    test('3 페이지 버튼은 존재하지 않는다.', async () => {
        componentRender(<DashBoard />);

        await waitFor(() => {
            const page3Button = screen.queryByRole('button', { name: '3' });
            expect(page3Button).not.toBeInTheDocument();
        });
    });

    test('다음 페이지로 이동하는 버튼이 활성화되어 있다.', async () => {
        componentRender(<DashBoard />);

        await waitFor(() => {
            const nextButton = screen.getByLabelText('다음 페이지로 이동');
            expect(nextButton).toBeEnabled();
        });
    });
});
