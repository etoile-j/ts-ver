import { useState } from 'react';
import FormContainer from 'components/FormContainer';
import JoinContent from 'components/JoinContent';

const Join = () => {
    const [typeBuyer, setTypeBuyer] = useState(true);

    return (
        <>
            <main>
                <FormContainer
                    content={<JoinContent typeBuyers={typeBuyer} />}
                    buyer="구매회원가입"
                    seller="판매회원가입"
                    typeBuyer={typeBuyer}
                    setTypeBuyer={setTypeBuyer}
                />
            </main>
        </>
    );
};
export default Join;
