import { Link } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import {
    Products,
    Li,
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

    const initialUrl = `${BASE_URL}/products/`;
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
        'products',
        ({ pageParam = initialUrl }) => {
            console.log('pageParam', { pageParam });
            return getProductList(pageParam);
        },
        {
            getNextPageParam: (lastPage) => lastPage.next || undefined,
        },
    );

    return (
        <>
            <Products
                loadMore={(pageParam: any) => fetchNextPage(pageParam)}
                hasMore={hasNextPage}
            >
                {data?.pages.map((pageData) => {
                    return pageData.results.map((products: IProductProps) => {
                        return (
                            <Li key={products.product_id}>
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
                            </Li>
                        );
                    });
                })}
            </Products>
        </>
    );
};
export default ProductInfo;
