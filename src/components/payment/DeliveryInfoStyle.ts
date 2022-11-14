import styled from 'styled-components';

interface styledCompo {
    width: string;
}

const Legend = styled.div`
    padding: 40px 0 8px;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
`;

const Line = styled.div`
    padding: 8px 0;
    border-bottom: 1px solid #c4c4c4;
`;

const Label = styled.label`
    display: inline-block;
    width: 170px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    @media screen and (max-width: 820px) {
        width: 98px;
    }
`;

const Input = styled.input`
    width: ${(props: styledCompo) => props.width};
    height: 40px;
    padding-left: 15px;
    border: 1px solid #c4c4c4;
    font-size: 17px;
`;
const PhoneInput = styled(Input)`
    padding-left: 0;
    text-align: center;
`;
const AddressInput = styled(Input)`
    margin: 8px 0;
`;

const Hyphen = styled.span`
    padding: 0 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const PostCodeBtn = styled.button`
    background-color: #6997f7;
    width: 154px;
    padding: 10px 0;
    margin-left: 10px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

export {
    Legend,
    Line,
    Label,
    Input,
    PhoneInput,
    AddressInput,
    Hyphen,
    PostCodeBtn,
};