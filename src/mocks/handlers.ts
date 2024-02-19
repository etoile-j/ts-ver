import { rest } from 'msw';
import { IProductSeller } from 'GlobalType';
import { BASE_URL } from 'apis/axiosInstance';
import { productMock_2, cartData, productId_1, productId_2 } from './data';

export const handlers = [
    rest.get<IProductSeller>(BASE_URL + '/seller/', (req, res, ctx) => {
        const page = req.url.searchParams.get('page');

        if (page === '1') {
            return res(ctx.status(200), ctx.json(productMock_2));
        }
    }),

    // Cart
    rest.get(BASE_URL + '/cart/', (_, res, ctx) => res(ctx.status(200), ctx.json(cartData))),

    rest.get(BASE_URL + '/products/:productId/', (req, res, ctx) => {
        const productId = req.params.productId;

        if (productId === '1') {
            return res(ctx.status(200), ctx.json(productId_1));
        }
        if (productId === '2') {
            return res(ctx.status(200), ctx.json(productId_2));
        }
    }),
];
