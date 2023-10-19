import styled from 'styled-components';

const Li = styled.li`
    padding-top: 40px;
`;

const ImgContainer = styled.div`
    overflow: hidden;
    position: relative;
    padding-top: 102%;
`;

const ProductImg = styled.div`
    background-color: #f1f3f4;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin-bottom: 13px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
`;

const SellerName = styled.p`
    background-color: #f1f3f4;
    width: 200px;
    height: 21px;
`;

const ProductName = styled.p`
    background-color: #f1f3f4;
    margin: 10px 0;
    width: 300px;
    height: 22px;
    @media screen and (max-width: 1100px) {
        width: 240px;
    }
`;

const Price = styled.p`
    background-color: #f1f3f4;
    margin-bottom: 8px;
    height: 30px;
    width: 120px;
`;

export { Li, ImgContainer, ProductImg, ProductName, SellerName, Price };
