import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { IProductSeller } from 'GlobalType';
import { PRODUCT_MOCK_2, PRODUCT_MOCK_17 } from 'mocks/data';
import { dashBoardRender } from 'utils/test';

// jest.mock('react-router-dom', () => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//     return {
//         ...jest.requireActual('react-router-dom'),
//         useParams: () => ({ page: '1' }),
//     };
// });

// const options = queryClient.getDefaultOptions();
// options.queries = { ...options.queries, retry: false };

const server = setupServer(
    rest.get<IProductSeller>('https://openmarket.weniv.co.kr/seller/', (req, res, ctx) => {
        // console.log('MSW intercepted the request:', req);
        const page = req.url.searchParams.get('page');

        if (page === '1') {
            return res(ctx.status(200), ctx.json(PRODUCT_MOCK_2));
        }
    }),
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('DashBoard page: 상품이 2개인 경우', () => {
    test('상품 2개가 표시된다.', async () => {
        dashBoardRender();

        await waitFor(() => {
            const productImgElement = screen.getAllByAltText('상품 이미지');

            expect(productImgElement).toHaveLength(2);
        });
    });

    test('1 페이지 버튼이 있다.', async () => {
        dashBoardRender();

        await waitFor(() => {
            const page1Button = screen.getByRole('button', { name: '1' });

            expect(page1Button).toBeInTheDocument();
        });
    });

    test('2 페이지 버튼은 존재하지 않는다.', async () => {
        dashBoardRender();

        await waitFor(() => {
            const page2Button = screen.queryByRole('button', { name: '2' });

            expect(page2Button).not.toBeInTheDocument();
        });
    });

    test('다음 페이지로 이동하는 버튼이 disable 상태이다.', async () => {
        dashBoardRender();

        await waitFor(() => {
            const nextButton = screen.getByLabelText('다음 페이지로 이동');

            expect(nextButton).toBeDisabled();
        });
    });
});

describe('dashboard page: 상품이 17개인 경우', () => {
    beforeEach(() => {
        server.use(
            rest.get('https://openmarket.weniv.co.kr/seller/', (_, res, ctx) =>
                res(ctx.json(PRODUCT_MOCK_17)),
            ),
        );
    });

    test('1 페이지 버튼이 있다.', async () => {
        dashBoardRender();

        await waitFor(() => {
            const page1Button = screen.getByRole('button', { name: '1' });

            expect(page1Button).toBeInTheDocument();
        });
    });

    test('2 페이지 버튼이 있다.', async () => {
        dashBoardRender();

        await waitFor(() => {
            const page2Button = screen.getByRole('button', { name: '2' });

            expect(page2Button).toBeInTheDocument();
        });
    });

    test('3 페이지 버튼은 존재하지 않는다.', async () => {
        dashBoardRender();

        await waitFor(() => {
            const page3Button = screen.queryByRole('button', { name: '3' });

            expect(page3Button).not.toBeInTheDocument();
        });
    });

    test('다음 페이지로 이동하는 버튼이 활성화되어 있다.', async () => {
        dashBoardRender();

        await waitFor(() => {
            const nextButton = screen.getByLabelText('다음 페이지로 이동');

            expect(nextButton).toBeEnabled();
        });
    });
});
