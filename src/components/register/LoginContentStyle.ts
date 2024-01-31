import styled from 'styled-components';

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

const Input = styled.input`
    width: 100%;
    padding: 19px 0;
    margin-bottom: 6px;
    border-bottom: 1px solid var(--base-gray);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    ::placeholder {
        color: var(--dark-gray);
        font-weight: 400;
    }
`;

const SubmitButton = styled.button`
    background-color: var(--point-color);
    width: 100%;
    padding: 19px;
    margin-top: 26px;
    border-radius: 5px;
    color: var(--white);
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

const Div = styled.div`
    margin-top: 20px;
`;

const CautionText = styled.strong`
    color: red;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

export { Form, Input, SubmitButton, Div, CautionText };
