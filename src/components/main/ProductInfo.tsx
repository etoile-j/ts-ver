import { Link } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import {
    Products,
    ImgContainer,
    ProductImg,
    ProductName,
    SellerName,
    Price,
    Won,
} from './ProductInfoStyle';

const ProductInfo = () => {
    const getProductList = async (url: string) => {
        try {
            const response = await axios.get(
                // BASE_URL + `/products/?page=${pageParam}`,
                url,
            );
            return response.data;
            console.log(response);
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

    const initialUrl = `${BASE_URL}/products/`;
    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
        'products',
        ({ pageParam = initialUrl }) => {
            console.log('pageParam', { pageParam });
            return getProductList(pageParam);
        },
        {
            getNextPageParam: (lastPage) => lastPage.next || undefined,
        },
    );

    if (isLoading) return <h2>로딩ㅇ중이요</h2>;

    return (
        <>
            <Products
                loadMore={(pageParam: any) => fetchNextPage(pageParam)}
                hasMore={hasNextPage}
            >
                {data?.pages.map((pageData) => {
                    return pageData.results.map((products: IProductProps) => {
                        return (
                            <li key={products.product_id}>
                                <Link to={`/detail/${products.product_id}`}>
                                    <ImgContainer>
                                        <ProductImg
                                            src={products.image}
                                        ></ProductImg>
                                    </ImgContainer>
                                    <SellerName>
                                        {products.store_name}
                                    </SellerName>
                                    <ProductName>
                                        {products.product_name}
                                    </ProductName>
                                    <Price>
                                        {products.price?.toLocaleString(
                                            'Ko-KR',
                                        )}
                                        <Won>원</Won>
                                    </Price>
                                </Link>
                            </li>
                        );
                    });
                })}
            </Products>
        </>
    );
};
export default ProductInfo;
