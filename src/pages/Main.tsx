import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import ProductInfo from 'components/ProductInfo';
import styled from 'styled-components';

const MainEm = styled.main`
    max-width: 1280px;
    min-width: 767px;
    padding: 80px 0 180px;
    margin: 0 auto;
`;

const Products = styled.ul`
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

const Main = () => {
    return (
        <>
            <Header />
            <MainEm>
                <Products>
                    <ProductInfo />
                </Products>
            </MainEm>
            <Footer />
        </>
    );
};
export default Main;
