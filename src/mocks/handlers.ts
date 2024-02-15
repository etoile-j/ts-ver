import { rest } from 'msw';
import { IProductSeller } from 'GlobalType';
import { BASE_URL } from 'apis/axiosInstance';
import { PRODUCT_MOCK_2 } from './data';

export const handlers = [
    rest.get<IProductSeller>(BASE_URL + '/seller/', (req, res, ctx) => {
        const page = req.url.searchParams.get('page');

        if (page === '1') {
            return res(ctx.status(200), ctx.json(PRODUCT_MOCK_2));
        }
    }),
];
