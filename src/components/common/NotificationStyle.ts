import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    min-width: 710px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
`;

const Img = styled.img`
    width: 230px;
    margin-right: 50px;
`;

const MainText = styled.strong`
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
`;
const ErrorText = styled(MainText)`
    color: red;
`;

const SubTextWrap = styled.div`
    margin: 20px 0 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
`;

const BtnWrap = styled.div`
    text-align: center;
`;

const BackBtn = styled.button`
    background: #ffffff;
    width: 200px;
    padding: 18px 0;
    border: 1px solid var(--base-gray);
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #767676;
`;
const MainBtn = styled(BackBtn)`
    background: var(--point-color);
    margin-right: 14px;
    color: #ffffff;
`;

export { Container, Img, MainText, ErrorText, SubTextWrap, BtnWrap, BackBtn, MainBtn };
