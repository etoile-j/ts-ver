import { rest } from 'msw';
import { BASE_URL } from 'apis/axiosInstance';
import { cartData, productId_1, productId_2 } from 'mocks/data';

export const cartHandlers = [
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
