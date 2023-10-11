import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
    Logos,
    LogoImg,
    LogoText,
    Container,
    Ul,
    SellerTap,
    SellerTap2,
    BuyerTap,
    BuyerTap2,
    BuyerBtn,
    SellerBtn,
} from './FormContainerStyle';

interface IFormContainer {
    buyer: string;
    seller: string;
    content: ReactElement;
    typeBuyer: boolean;
    setTypeBuyer: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContainer = (props: IFormContainer) => {
    return (
        <>
            <Link to="/" aria-label="OUR-SHOP 메인 페이지">
                <Logos>
                    <LogoImg />
                    <LogoText />
                </Logos>
            </Link>
            <Container>
                <Ul role="tablist">
                    {props.typeBuyer ? (
                        <>
                            <BuyerTap role="tab" aria-selected="true">
                                <BuyerBtn>{props.buyer}</BuyerBtn>
                            </BuyerTap>
                            <SellerTap
                                role="tab"
                                aria-selected="false"
                                onClick={() => props.setTypeBuyer!(false)}
                            >
                                <SellerBtn>{props.seller}</SellerBtn>
                            </SellerTap>
                        </>
                    ) : (
                        <>
                            <BuyerTap2
                                role="tab"
                                aria-selected="false"
                                onClick={() => props.setTypeBuyer!(true)}
                            >
                                <BuyerBtn>{props.buyer}</BuyerBtn>
                            </BuyerTap2>
                            <SellerTap2 role="tab" aria-selected="true">
                                <SellerBtn>{props.seller}</SellerBtn>
                            </SellerTap2>
                        </>
                    )}
                </Ul>
                {props.content}
            </Container>
        </>
    );
};
export default FormContainer;
