import { Link } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import styled from 'styled-components';

const Products = styled(InfiniteScroll)`
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    gap: 58px;
    @media screen and (max-width: 1100px) {
        gap: 28px;
    }
    @media screen and (max-width: 770px) {
        grid-template: auto / repeat(2, 1fr);
        gap: 20px;
    }
`;

const ImgContainer = styled.div`
    overflow: hidden;
    position: relative;
    padding-top: 102%;
`;

const ProductImg = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin-bottom: 16px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    object-fit: cover;
`;

const ProductName = styled.p`
    padding: 10px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    @media screen and (max-width: 1100px) {
        font-size: 17px;
        line-height: 20px;
    }
`;

const SellerName = styled.p`
    margin-top: 7px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`;

const Price = styled.p`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;
const Won = styled.span`
    margin-left: 2px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

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
