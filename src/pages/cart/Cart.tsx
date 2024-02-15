import CartContent from 'components/cart/CartContent';
import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import { Main } from './style';

const Cart = () => {
    return (
        <>
            <Header />
            <Main>
                <h2>장바구니</h2>
                <CartContent />
            </Main>
            <Footer />
        </>
    );
};
export default Cart;
