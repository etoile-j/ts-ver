import { Link } from 'react-router-dom';
import {
    Li,
    ImgContainer,
    ProductImg,
    ProductName,
    SellerName,
    Price,
    Won,
} from './ProductListStyle';

interface IProductProps {
    product_id?: string;
    image?: string;
    store_name?: string;
    product_name?: string;
    price?: number;
}

const ProductList = ({ products }: { products: IProductProps }) => {
    return (
        <Li>
            <Link to={`/detail/${products.product_id}`}>
                <ImgContainer>
                    <ProductImg src={products.image}></ProductImg>
                </ImgContainer>
                <SellerName>{products.store_name}</SellerName>
                <ProductName>{products.product_name}</ProductName>
                <Price>
                    {products.price?.toLocaleString('Ko-KR')}
                    <Won>원</Won>
                </Price>
            </Link>
        </Li>
    );
};
export default ProductList;
