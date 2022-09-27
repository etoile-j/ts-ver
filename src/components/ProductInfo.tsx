import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import styled from 'styled-components';

const ProductImg = styled.img`
    width: 380px;
    height: 380px;
    margin-bottom: 16px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    object-fit: cover;
`;

const ProductName = styled.p`
    padding: 10px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const SellerName = styled.p`
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`;

const Price = styled.p`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;
const Won = styled.span`
    margin-left: 2px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const ProductInfo = () => {
    const [products, setProducts] = useState<[]>();
    const { product_id } = useParams();

    const getProductList = async () => {
        try {
            const response = await axios.get(BASE_URL + '/products/');
            console.log(response);
            setProducts(response.data.results);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getProductList();
    }, []);

    interface IProductProps {
        // products: {} | undefined;
        product_id?: string;
        image?: string;
        store_name?: string;
        product_name?: string;
        price?: number;
    }

    return (
        <>
            {products?.map((products: IProductProps) => {
                return (
                    <Link to={`/productdetail/${product_id}`}>
                        <li key={products.product_id}>
                            <ProductImg src={products.image}></ProductImg>
                            <SellerName>{products.store_name}</SellerName>
                            <ProductName>{products.product_name}</ProductName>
                            <Price>
                                {products.price?.toLocaleString('Ko-KR')}
                                <Won>원</Won>
                            </Price>
                        </li>
                    </Link>
                );
            })}
        </>
    );
};
export default ProductInfo;
