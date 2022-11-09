import Logo from '../../assets/icon-logoImg.png';
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
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #767676;
`;
const MainBtn = styled(BackBtn)`
    background: #6997f7;
    margin-right: 14px;
    color: #ffffff;
`;

interface IContent {
    mainText?: string;
    errorText?: string;
    subText1: string;
    subText2?: string;
    leftText?: string;
    rightText: string;
    leftBtn?: React.MouseEventHandler<HTMLButtonElement>;
    rightBtn: React.MouseEventHandler<HTMLButtonElement>;
    leftNone?: string;
}

const Notification = (content: IContent) => {
    return (
        <Container>
            <Img src={Logo} alt="로고 이미지" />
            <div>
                <MainText>{content.mainText}</MainText>
                <ErrorText>{content.errorText}</ErrorText>
                <SubTextWrap>
                    <p>{content.subText1}</p>
                    <p>{content.subText2}</p>
                </SubTextWrap>
                <BtnWrap>
                    <MainBtn
                        onClick={content.leftBtn}
                        style={{
                            display: content.leftNone,
                        }}
                    >
                        {content.leftText}
                    </MainBtn>
                    <BackBtn onClick={content.rightBtn}>
                        {content.rightText}
                    </BackBtn>
                </BtnWrap>
            </div>
        </Container>
    );
};
export default Notification;
