import ProductInput from 'components/seller/ProductInput';
import SellerCenterHeader from 'components/seller/SellerCenterHeader';
import { Main, H3, CautionWrap, H4, CautionBox } from './style';

const UploadProduct = () => {
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
                <ProductInput />
            </Main>
        </>
    );
};
export default UploadProduct;
