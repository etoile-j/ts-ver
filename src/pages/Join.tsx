import FormContainer from 'components/FormContainer';
import JoinContent from 'components/JoinContent';
import styled from 'styled-components';

const Div = styled.div`
    width: 550px;
    margin: 0 auto;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
`;

const JoinBtn = styled.button`
    background: #c4c4c4;
    padding: 19px 206px;
    margin-top: 34px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

const Join = () => {
    return (
        <>
            <main>
                <FormContainer content={<JoinContent />} />
                <Div>
                    <label>
                        <input type="checkbox" />
                        ㅇㅇ샵의 이용약관 및 개인정보처리방침에 대한 내용을
                        확인하였고 동의합니다.
                    </label>
                    <JoinBtn>가입하기</JoinBtn>
                </Div>
            </main>
        </>
    );
};
export default Join;
