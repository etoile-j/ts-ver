import Logo from '../../assets/icon-logoImg.png';
import {
    Container,
    Img,
    MainText,
    ErrorText,
    SubTextWrap,
    BtnWrap,
    BackBtn,
    MainBtn,
} from './NotificationStyle';

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
