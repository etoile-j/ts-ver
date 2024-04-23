import { useEffect } from 'react';
import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import Carousel from 'components/main/Carousel';
import ProductInfo from 'components/main/ProductInfo';
import CloseIcon from '../../assets/icon-delete.svg';
import { MainEm } from './style';

const Main = () => {
    useEffect(() => {
        const img = new Image();
        img.src = CloseIcon;
    }, []);

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
