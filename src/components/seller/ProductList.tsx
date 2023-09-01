import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getProductListOfId } from 'apis/seller';
import { IProductSeller } from 'GlobalType';
import ProductOnSale from './ProductOnSale';

interface IproductList {
    count: number | undefined;
    setCount: React.Dispatch<React.SetStateAction<undefined>>;
    currentPage: number;
}

const ProductList = ({ count, setCount, currentPage }: IproductList) => {
    const getProductList = async (pageNum: number) => {
        const result = await getProductListOfId(pageNum);
        setCount(result.count);
        return result.results;
    };

    useEffect(() => {
        getProductList(currentPage);
    }, []);

    const queryClient = useQueryClient();
    const totalPage = Math.ceil(count! / 15);

    useEffect(() => {
        if (currentPage < totalPage!) {
            const nextPage = currentPage + 1;
            queryClient.prefetchQuery(['product', nextPage], () =>
                getProductList(nextPage),
            );
        }
    }, [currentPage, queryClient]);

    const { data } = useQuery(
        ['product', currentPage],
        () => getProductList(currentPage),
        { keepPreviousData: true },
    );

    return (
        <>
            {data?.map((data: IProductSeller) => {
                return (
                    <ProductOnSale
                        key={data.product_id}
                        product_id={data.product_id}
                        image={data.image}
                        product_name={data.product_name}
                        stock={data.stock}
                        price={data.price}
                    />
                );
            })}
        </>
    );
};
export default ProductList;
