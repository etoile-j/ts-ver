import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from 'pages/Join';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Payment from 'pages/Payment';
import ProductDetails from 'pages/ProductDetails';
import { GlobalStyle } from './styles/global';
import ShoppingCart from 'pages/ShoppingCart';
import UploadProduct from 'pages/seller/UploadProduct';
import DashBoard from 'pages/seller/DashBoard';

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route
                        path="/detail/:product_id"
                        element={<ProductDetails />}
                    />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                    <Route path="/seller" element={<DashBoard />} />
                    <Route path="/seller/upload" element={<UploadProduct />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
