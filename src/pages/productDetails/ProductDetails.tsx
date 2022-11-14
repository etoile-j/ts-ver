import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import ProductCard from 'components/productDetail/ProductCard';
import { Main, Ul, Li } from './style';

const ProductDetails = () => {
    return (
        <>
            <Header />
            <Main>
                {/* <h2>상품 상세 정보</h2> */}
                {/* ir */}
                <ProductCard />
                <Ul>
                    <Li>상세정보</Li>
                    <Li>리뷰</Li>
                    <Li>Q&A</Li>
                    <Li>반품/교환정보</Li>
                </Ul>
            </Main>
            <Footer />
        </>
    );
};
export default ProductDetails;
