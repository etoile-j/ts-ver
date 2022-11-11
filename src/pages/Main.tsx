import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Carousel from 'components/main/Carousel';
import ProductInfo from 'components/main/ProductInfo';
import styled from 'styled-components';

const MainEm = styled.main`
    position: relative;
    max-width: 1280px;
    min-width: 767px;
    margin: 0 auto;
`;

const Main = () => {
    return (
        <>
            <Header />
            <MainEm>
                <Carousel />
                <ProductInfo />
            </MainEm>
            <Footer />
        </>
    );
};
export default Main;
