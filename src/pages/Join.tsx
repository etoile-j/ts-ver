import { useState } from 'react';
import FormContainer from 'components/register/FormContainer';
import JoinContent from 'components/register/JoinContent';
import styled from 'styled-components';

const Main = styled.main`
    min-width: 767px;
`;

const Join = () => {
    const [typeBuyer, setTypeBuyer] = useState(true);

    return (
        <>
            <Main>
                <FormContainer
                    content={<JoinContent typeBuyers={typeBuyer} />}
                    buyer="구매회원가입"
                    seller="판매회원가입"
                    typeBuyer={typeBuyer}
                    setTypeBuyer={setTypeBuyer}
                />
            </Main>
        </>
    );
};
export default Join;
