import Header from 'components/Header';
import Footer from 'components/Footer';
import ProductCard from 'components/ProductCard';
import styled from 'styled-components';

const Main = styled.main`
    padding: 80px 0 60px;
    width: 1300px;
    margin: 0 auto;
`;

const Ul = styled.ul`
    display: flex;
    margin-top: 140px;
    color: #767676;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
`;
const Li = styled.li`
    width: 320px;
    padding: 19px 0 12px;
    border-bottom: solid 6px #e0e0e0;
`;

const ProductDetails = () => {
    return (
        <>
            <Header />
            <Main>
                <h2>상품 상세 정보</h2>
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
