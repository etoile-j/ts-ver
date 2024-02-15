import Header from 'components/common/header/Header';
import Footer from 'components/common/Footer';
import ProductCard from 'components/productDetail/ProductCard';
import { Main, Ul, Li } from './style';

const ProductDetails = () => {
    return (
        <>
            <Header />
            <Main>
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
