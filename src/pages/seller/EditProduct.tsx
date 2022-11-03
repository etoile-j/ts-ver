import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import ProductInput from 'components/seller/ProductInput';
import SellerCenterHeader from 'components/seller/SellerCenterHeader';
import styled from 'styled-components';

const Main = styled.main`
    max-width: 1720px;
    min-width: 540px;
    margin: 0 auto;
    padding: 0 20px;
`;

const H3 = styled.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: left;
`;

const CautionWrap = styled.div`
    float: left;
    margin-right: 80px;
    @media screen and (max-width: 1300px) {
        margin-right: 30px;
    }
    @media screen and (max-width: 1220px) {
        margin-bottom: 35px;
        margin-right: 0px;
        float: none;
    }
`;

const H4 = styled.h3`
    margin-bottom: 10px;
    color: red;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const CautionBox = styled.div`
    background: #ffefe8;
    width: 320px;
    height: 346px;
    padding: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    @media screen and (max-width: 1220px) {
        width: 100%;
        height: 160px;
        overflow: scroll;
    }
`;

const EditProduct = () => {
    const product_id = useLocation().state.product_id;
    const [productDetail, setProductDetail] = useState({});

    const getProductDetail = async () => {
        try {
            const response = await axios.get(
                BASE_URL + `/products/${product_id}`,
            );
            console.log(response);
            setProductDetail(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <>
            <SellerCenterHeader />
            <Main>
                <H3>상품 등록</H3>
                <CautionWrap>
                    <H4>*상품 등록 주의 사항</H4>
                    <CautionBox>
                        <p>- 너무 귀여운 사진은 심장이 아파올 수 있습니다.</p>
                        <p>- 상품명은 20자까지만 등록 가능합니다.</p>
                        <p>- 재고는 1개 이상 입력해야 합니다.</p>
                    </CautionBox>
                </CautionWrap>
                <ProductInput detail={productDetail} />
            </Main>
        </>
    );
};
export default EditProduct;
