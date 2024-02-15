import styled from 'styled-components';

interface styledCompo {
    width?: string;
    color?: string;
    backgroundImage?: string;
}

const Form = styled.form`
    width: 100%;
    z-index: 2;
    background-color: var(--white);
    position: relative;
    top: -20px;
    padding: 35px;
    border: 1px solid var(--base-gray);
    border-radius: 10px;
`;

const Div = styled.div`
    position: relative;
    margin-top: 12px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: var(--dark-gray);
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Input = styled.input`
    width: ${(props: styledCompo) => props.width};
    padding: 16px 15px;
    border: 1px solid var(--base-gray);
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const VaildCheckBtn = styled.button.attrs({ type: 'button' })`
    background-color: var(--point-color);
    width: 120px;
    padding: 17px 0px;
    margin-left: 12px;
    border-radius: 5px;
    color: var(--white);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const CautionText = styled.strong`
    display: inline-block;
    margin-top: 10px;
    color: red;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const PassText = styled(CautionText)`
    color: #2c6cf6;
`;

const PasswordInput = styled.div`
    position: relative;
`;

const PwCheck = styled.div`
    display: inline-block;
    position: absolute;
    top: 13px;
    right: 16px;
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
`;

const Fieldset = styled.fieldset`
    margin-top: 50px;
`;

const At = styled.span`
    margin: 0 11px;
    color: var(--dark-gray);
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const PhoneNumber = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PhoneInput = styled(Input).attrs({ type: 'text', inputMode: 'tel' })`
    text-align: center;
`;

const Div2 = styled.div`
    margin-top: 40px;
    color: var(--dark-gray);
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Agree = styled.input`
    float: left;
    margin: 12px 10px 15px 0;
`;

const JoinBtn = styled.button.attrs({ type: 'submit' })`
    background: ${(props: styledCompo) => props.color};
    width: 100%;
    padding: 19px 0;
    margin-top: 34px;
    border-radius: 5px;
    color: var(--white);
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export {
    Form,
    Div,
    Label,
    Input,
    VaildCheckBtn,
    CautionText,
    PassText,
    PasswordInput,
    PwCheck,
    Fieldset,
    At,
    PhoneNumber,
    PhoneInput,
    Div2,
    Agree,
    JoinBtn,
};
