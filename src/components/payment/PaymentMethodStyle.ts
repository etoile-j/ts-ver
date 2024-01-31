import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0;
    border-top: 2px solid var(--base-gray);
    border-bottom: 2px solid var(--base-gray);
    line-height: 30px;
`;

const RadioInput = styled.input.attrs({
    type: 'radio',
    name: 'paymentMethod',
})`
    margin: 0 10px 0 8px;
`;

const Label = styled.label`
    width: 135px;
`;

const KakkoLabel = styled(Label)`
    margin-right: 30px;
`;

export { Wrap, RadioInput, Label, KakkoLabel };
