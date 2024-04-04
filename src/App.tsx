import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import queryClient from 'queries/queryClient';
import ScrollToTop from 'components/common/ScrollToTop';
import UserRoute from 'components/route/UserRoute';
import TypeRoute from 'components/route/TypeRoute';
import { LOGIN_TYPE } from 'constants/index';
import { GlobalStyle } from './styles/global';

import Join from 'pages/join/Join';
import Login from 'pages/login/Login';
import Main from 'pages/main/Main';
import Search from 'pages/search/Search';
import Payment from 'pages/payment/Payment';
import ProductDetails from 'pages/productDetails/ProductDetails';
import Cart from 'pages/cart/Cart';
import MyPage from 'pages/myPage/MyPage';
import UploadProduct from 'pages/seller/UploadProduct';
import DashBoard from 'pages/seller/DashBoard';
import EditProduct from 'pages/seller/EditProduct';
import CompletePayment from 'pages/notification/CompletePayment';
import CompleteJoin from 'pages/notification/CompleteJoin';
import NotFound from 'pages/notification/NotFound';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<UserRoute component={<Login />} />} />
                    <Route path="/join" element={<UserRoute component={<Join />} />} />
                    <Route path="/complete_join" element={<CompleteJoin />} />
                    <Route path="/detail/:product_id" element={<ProductDetails />} />
                    <Route
                        path="/cart"
                        element={<TypeRoute component={<Cart />} type={LOGIN_TYPE.BUYER} />}
                    />
                    <Route
                        path="/payment"
                        element={<TypeRoute component={<Payment />} type={LOGIN_TYPE.BUYER} />}
                    />
                    <Route path="/complete_payment" element={<CompletePayment />} />
                    <Route
                        path="/mypage"
                        element={<TypeRoute component={<MyPage />} type={LOGIN_TYPE.BUYER} />}
                    />

                    <Route
                        path="/seller"
                        element={
                            <TypeRoute component={<DashBoard />} type={LOGIN_TYPE.SELLER} />
                        }
                    />
                    <Route
                        path="/seller/upload"
                        element={
                            <TypeRoute
                                component={<UploadProduct />}
                                type={LOGIN_TYPE.SELLER}
                            />
                        }
                    />
                    <Route
                        path="/seller/edit"
                        element={
                            <TypeRoute component={<EditProduct />} type={LOGIN_TYPE.SELLER} />
                        }
                    />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
