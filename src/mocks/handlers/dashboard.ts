import { IProductSeller } from 'GlobalType';
import { BASE_URL } from 'apis/axiosInstance';
import { productMock_2 } from 'mocks/data';
import { rest } from 'msw';

export const dashboardHandlers = [
    rest.get<IProductSeller>(BASE_URL + '/seller/', (req, res, ctx) => {
        const page = req.url.searchParams.get('page');

        if (page === '1') {
            return res(ctx.status(200), ctx.json(productMock_2));
        }
    }),
];
