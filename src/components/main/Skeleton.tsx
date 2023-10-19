import {
    Li,
    ImgContainer,
    ProductImg,
    ProductName,
    SellerName,
    Price,
} from './SkeletonStyle';

const Skeleton = () => {
    return (
        <Li>
            <ImgContainer>
                <ProductImg />
            </ImgContainer>
            <SellerName />
            <ProductName />
            <Price />
        </Li>
    );
};
export default Skeleton;
