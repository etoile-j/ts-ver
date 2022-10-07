import { ReactElement } from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
    margin: 70px 0;
    text-align: center;
`;

const Container = styled.div`
    max-width: 550px;
    min-width: 326px;
    margin: 0 auto;
`;

const Ul = styled.ul`
    display: flex;
`;

const SellerTap = styled.li`
    background-color: #f2f2f2;
    width: 100%;
    padding: 19px 0 37px;
    border: 1px solid #c4c4c4;
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
`;
const SellerTap2 = styled(SellerTap)`
    position: relative;
    background-color: #ffffff;
    z-index: 3;
    ::after {
        content: '';
        position: absolute;
        background-color: #ffffff;
        top: 59px;
        left: -5px;
        width: 7px;
        height: 19px;
    }
`;

const BuyerTap = styled(SellerTap)`
    z-index: 3;
    background-color: #ffffff;
    width: 550px;
    position: relative;
    border-radius: 10px 10px 0 0;
    border-bottom: 0;
    box-sizing: content-box;
    ::after {
        content: '';
        position: absolute;
        background-color: #ffffff;
        top: 59px;
        width: 90px;
        height: 19px;
    }
`;
const BuyerTap2 = styled(BuyerTap)`
    background-color: #f2f2f2;
    z-index: 2;
`;

interface IForm {
    buyer: string;
    seller: string;
    content: ReactElement;
    typeBuyer?: boolean;
    setTypeBuyer?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContainer = (props: IForm) => {
    return (
        <>
            <Logo>로고</Logo>
            <Container>
                <Ul>
                    {props.typeBuyer ? (
                        <>
                            <BuyerTap>{props.buyer}</BuyerTap>
                            <SellerTap
                                onClick={() => props.setTypeBuyer!(false)}
                            >
                                {props.seller}
                            </SellerTap>
                        </>
                    ) : (
                        <>
                            <BuyerTap2
                                onClick={() => props.setTypeBuyer!(true)}
                            >
                                {props.buyer}
                            </BuyerTap2>
                            <SellerTap2>{props.seller}</SellerTap2>
                        </>
                    )}
                </Ul>
                {props.content}
            </Container>
        </>
    );
};
export default FormContainer;
