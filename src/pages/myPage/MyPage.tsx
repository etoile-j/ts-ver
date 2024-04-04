import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import MyOrders from '../../components/myPage/myOrders/MyOrders';
import { Main } from './style';

const MyPage = () => {
    return (
        <>
            <Header />
            <Main>
                <h2>마이페이지</h2>
                <MyOrders />
            </Main>
            <Footer />
        </>
    );
};
export default MyPage;
