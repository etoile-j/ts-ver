import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import ProductList from 'components/common/ProductList';
import { Products } from './ProductInfoStyle';

const ProductInfo = () => {
    const getProductList = async (url: string) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            console.error(err);
        }
    };

    interface IProductProps {
        product_id?: string;
        image?: string;
        store_name?: string;
        product_name?: string;
        price?: number;
    }

    const initialUrl = 'https://openmarket.weniv.co.kr/products/';
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
        'products',
        ({ pageParam = initialUrl }) => {
            return getProductList(pageParam);
        },
        {
            getNextPageParam: (lastPage) => lastPage.next || undefined,
        },
    );

    return (
        <Products
            loadMore={(pageParam: any) => fetchNextPage(pageParam)}
            hasMore={hasNextPage}
        >
            {data?.pages ? (
                data?.pages.map((pageData) => {
                    return pageData.results.map((products: IProductProps) => {
                        return (
                            <ProductList
                                key={products.product_id}
                                products={products}
                            />
                        );
                    });
                })
            ) : (
                <></>
            )}
        </Products>
    );
};
export default ProductInfo;
