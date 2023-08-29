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
interface IForm {
    buyer: string;
    seller: string;
    content: ReactElement;
    typeBuyer: boolean;
    setTypeBuyer: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContainer = (props: IForm) => {
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
                            <BuyerTap>
                                <BuyerBtn role="tab" aria-selected="true">
                                    {props.buyer}
                                </BuyerBtn>
                            </BuyerTap>
                            <SellerTap
                                onClick={() => props.setTypeBuyer!(false)}
                            >
                                <SellerBtn role="tab" aria-selected="false">
                                    {props.seller}
                                </SellerBtn>
                            </SellerTap>
                        </>
                    ) : (
                        <>
                            <BuyerTap2
                                onClick={() => props.setTypeBuyer!(true)}
                            >
                                <BuyerBtn role="tab" aria-selected="false">
                                    {props.buyer}
                                </BuyerBtn>
                            </BuyerTap2>
                            <SellerTap2>
                                <SellerBtn role="tab" aria-selected="true">
                                    {props.seller}
                                </SellerBtn>
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
