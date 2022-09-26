import FormContainer from 'components/FormContainer';
import JoinContent from 'components/JoinContent';

const Join = () => {
    return (
        <>
            <main>
                <FormContainer
                    content={<JoinContent />}
                    buyer="구매회원가입"
                    seller="판매회원가입"
                />
            </main>
        </>
    );
};
export default Join;
