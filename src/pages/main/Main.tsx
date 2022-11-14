import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import Carousel from 'components/main/Carousel';
import ProductInfo from 'components/main/ProductInfo';
import { MainEm } from './style';

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
