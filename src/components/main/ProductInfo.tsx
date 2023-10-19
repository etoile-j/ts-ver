import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { IProduct } from 'GlobalType';
import ProductList from 'components/common/ProductList';
import Skeleton from './Skeleton';
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
            {data?.pages
                ? data?.pages.map((pageData) => {
                      return pageData.results.map((products: IProduct) => {
                          return (
                              <ProductList
                                  key={products.product_id}
                                  products={products}
                              />
                          );
                      });
                  })
                : new Array(15).fill(0).map((_, i) => <Skeleton key={i} />)}
        </Products>
    );
};
export default ProductInfo;
