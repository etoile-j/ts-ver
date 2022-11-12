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
            <Link to="/">
                <Logos>
                    <LogoImg />
                    <LogoText />
                </Logos>
            </Link>
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
