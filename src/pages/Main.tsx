import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import ProductInfo from 'components/ProductInfo';
import styled from 'styled-components';

const Products = styled.ul`
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    gap: 70px;
    width: 1280px;
    margin: 0 auto;
`;

const MainEm = styled.main`
    padding: 80px 0 180px;
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
