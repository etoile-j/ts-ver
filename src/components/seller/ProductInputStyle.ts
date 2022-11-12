import uploadIcon from '../../assets/icon-img.svg';
import styled from 'styled-components';

interface styledCompo {
    width?: string;
    font?: string;
    color?: string;
    border?: string;
}

const Wrap = styled.div`
    display: flex;
    @media screen and (max-width: 870px) {
        flex-direction: column;
    }
`;

const InputContainer = styled.div`
    width: 826px;
    margin-left: 40px;
    @media screen and (max-width: 870px) {
        margin-left: 0;
        margin-top: 20px;
        width: 100%;
    }
`;

const Field = styled.div`
    margin-bottom: 16px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const ImgWrap = styled.div`
    position: relative;
`;

const ImgLabel = styled(Label)`
    ::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 50px;
        height: 50px;
        bottom: 10px;
        right: 10px;
        background-image: url(${uploadIcon});
        background-repeat: no-repeat;
        background-size: 50px 50px;
        cursor: pointer;
    }
`;

const ImgInput = styled.input`
    display: none;
`;

const ImgPreview = styled.img`
    background-color: lightgray;
    width: 454px;
    height: 454px;
    object-fit: cover;
    @media screen and (max-width: 870px) {
        width: 100%;
        height: 354px;
    }
`;

const Input = styled.input`
    width: ${(props: styledCompo) => props.width};
    padding: 16px 25px 16px 15px;
    border: 1px solid #c4c4c4;
    border-radius: 5px 0 0 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const NameInputWrap = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
`;
const NameInput = styled(Input)`
    border: none;
`;

const NameLength = styled.span`
    position: absolute;
    top: 17px;
    right: 15px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #c4c4c4;
`;

const Unit = styled.button`
    background-color: #c4c4c4;
    width: 54px;
    height: 54px;
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const RadioInput = styled.input.attrs({
    type: 'radio',
    name: 'shippingMethod',
})`
    display: none;
`;
const RadioLabel = styled.label`
    display: inline-block;
    background-color: ${(props: styledCompo) => props.color};
    width: 220px;
    padding: 16px 0;
    margin-right: 10px;
    border: ${(props: styledCompo) => props.border};
    border-radius: 5px;
    color: ${(props: styledCompo) => props.font};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    @media screen and (min-width: 870px) and (max-width: 1400px) {
        width: 154px;
    }
`;

const StockLabel = styled.div`
    display: flex;
`;

const CautionText = styled.strong`
    display: inline-block;
    margin-left: 45px;
    margin-bottom: 10px;
    color: red;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;

const BtnContainer = styled.div`
    margin-top: 50px;
    text-align: right;
`;

const ColorBtn = styled.button`
    background-color: #6997f7;
    width: 200px;
    padding: 19px 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border-radius: 5px;
    @media screen and (max-width: 870px) {
        width: 150px;
    }
`;
const WhiteBtn = styled(ColorBtn)`
    background-color: #ffffff;
    padding: 18px 0;
    margin-right: 14px;
    border: 1px solid #c4c4c4;
    color: #767676;
`;

export {
    Wrap,
    InputContainer,
    Field,
    Label,
    ImgWrap,
    ImgLabel,
    ImgInput,
    ImgPreview,
    Input,
    NameInputWrap,
    NameInput,
    NameLength,
    Unit,
    RadioInput,
    RadioLabel,
    StockLabel,
    CautionText,
    BtnContainer,
    ColorBtn,
    WhiteBtn,
};
