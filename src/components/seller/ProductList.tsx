import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import ProductOnSale from './ProductOnSale';

interface Iproduct {
    setCount: React.Dispatch<React.SetStateAction<undefined>>;
}

const ProductList = ({ setCount }: Iproduct) => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');

    interface IData {
        product_id?: string;
        image?: string;
        product_name?: string;
        stock?: number;
        price?: number;
    }

    const getProductList = async () => {
        try {
            const response = await axios.get(BASE_URL + '/seller/', {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            });
            console.log(response);
            setCount(response.data.count);
            setData(response.data.results);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getProductList();
    }, []);

    return (
        <>
            {data?.map((data: IData) => {
                return (
                    <ProductOnSale
                        key={data.product_id}
                        product_id={data.product_id}
                        image={data.image}
                        product_name={data.product_name}
                        stock={data.stock}
                        price={data.price}
                    />
                );
            })}
        </>
    );
};
export default ProductList;
