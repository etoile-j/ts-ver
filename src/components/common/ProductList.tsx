import { Link } from 'react-router-dom';
import { IProduct } from 'GlobalType';
import {
    Li,
    ImgContainer,
    ProductImg,
    ProductName,
    SellerName,
    Price,
    Won,
} from './ProductListStyle';

const ProductList = ({ products }: { products: IProduct }) => {
    return (
        <Li>
            <Link to={`/detail/${products.product_id}`}>
                <ImgContainer>
                    <ProductImg src={products.image}></ProductImg>
                </ImgContainer>
                <SellerName>{products.store_name}</SellerName>
                <ProductName>{products.product_name}</ProductName>
                <Price>
                    {products.price.toLocaleString('Ko-KR')}
                    <Won>원</Won>
                </Price>
            </Link>
        </Li>
    );
};
export default ProductList;
