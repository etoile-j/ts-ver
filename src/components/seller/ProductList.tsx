import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getProductListOfId } from 'apis/seller';
import { IProductSeller } from 'GlobalType';
import { ITEMS_PER_PAGE } from 'constants/index';
import ProductOnSale from './ProductOnSale';

interface IproductList {
    totalCount: number;
    setTotalCount: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
}

const ProductList = ({ totalCount, setTotalCount, currentPage }: IproductList) => {
    const queryClient = useQueryClient();
    const totalPage = Math.ceil(totalCount! / ITEMS_PER_PAGE);

    const getProductList = async (pageNum: number) => {
        const result = await getProductListOfId(pageNum);
        setTotalCount(result.count);
        return result.results;
    };

    useEffect(() => {
        if (currentPage < totalPage!) {
            const nextPage = currentPage + 1;
            queryClient.prefetchQuery(['product', nextPage], () => getProductList(nextPage));
        }
    }, [currentPage, queryClient]);

    const { data: productList } = useQuery(
        ['product', currentPage],
        () => getProductList(currentPage),
        { keepPreviousData: true },
    );

    return (
        <>
            {productList?.map((product: IProductSeller) => {
                return (
                    <ProductOnSale
                        key={product.product_id}
                        product_id={product.product_id}
                        image={product.image}
                        product_name={product.product_name}
                        stock={product.stock}
                        price={product.price}
                    />
                );
            })}
        </>
    );
};
export default ProductList;
