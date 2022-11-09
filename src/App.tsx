import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Join from 'pages/Join';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Payment from 'pages/Payment';
import ProductDetails from 'pages/ProductDetails';
import Cart from 'pages/Cart';
import UploadProduct from 'pages/seller/UploadProduct';
import DashBoard from 'pages/seller/DashBoard';
import EditProduct from 'pages/seller/EditProduct';
import CompletePayment from 'pages/CompletePayment';
import CompleteJoin from 'pages/CompleteJoin';
import NotFound from 'pages/NotFound';
import { GlobalStyle } from './styles/global';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/complete_join" element={<CompleteJoin />} />
                    <Route
                        path="/detail/:product_id"
                        element={<ProductDetails />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route
                        path="/complete_payment"
                        element={<CompletePayment />}
                    />
                    <Route path="/seller" element={<DashBoard />} />
                    <Route path="/seller/upload" element={<UploadProduct />} />
                    <Route path="/seller/edit" element={<EditProduct />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
