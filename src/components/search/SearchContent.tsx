import { useEffect, useState } from 'react';
import { axiosApi } from 'apis/axiosInstance';
import { IProduct } from 'GlobalType';
import ProductList from 'components/common/ProductList';
import {
    Main,
    H2,
    Keyword,
    Container,
    Nothing,
    Description,
} from './SearchContentStyle';

interface ISearch {
    keyword: string;
}

const SearchContent = ({ keyword }: ISearch) => {
    const [products, setProducts] = useState<any[]>([]);
    const [total, setTotal] = useState();

    const getProductList = async (num: number) => {
        try {
            const response = await axiosApi.get(`/products/?page=${num}`);
            setTotal(response.data.count);
            setProducts((products) => [...products, ...response.data.results]);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getProductList(1);
    }, []);

    useEffect(() => {
        const pageLength = Math.ceil(total! / 15);
        for (let i = 2; i < pageLength + 1; i++) {
            getProductList(i);
        }
    }, [total]);

    const filtering = products?.filter(
        (data: IProduct) =>
            data.product_name?.includes(keyword) ||
            data.store_name?.includes(keyword),
    );

    return (
        <Main>
            <H2>
                <Keyword>'{keyword}'</Keyword>에 대한 {filtering?.length}개의
                검색 결과
            </H2>
            <Container>
                {filtering.map((i: IProduct) => {
                    return <ProductList key={i.product_id} products={i} />;
                })}
            </Container>
            {filtering.length === 0 && (
                <Nothing>
                    <p>
                        <Keyword>'{keyword}'</Keyword>에 대한 검색결과가
                        없습니다.
                    </p>
                    <Description>
                        입력한 검색어의 철자가 정확한지 확인해 주세요.
                        <br />
                        검색어의 단어 수를 줄이거나, 두 단어 이상의 검색어인
                        경우 띄어쓰기를 해주세요.
                    </Description>
                </Nothing>
            )}
        </Main>
    );
};
export default SearchContent;
