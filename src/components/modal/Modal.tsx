import CloseIcon from '../../assets/icon-delete.svg';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Wrap = styled.div`
    position: relative;
    background-color: #ffffff;
    width: 360px;
    height: 200px;
    padding: 45px 0 40px;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    width: 22px;
    height: 22px;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    background-size: 22px 22px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
`;

const BtnLeft = styled.button.attrs({
    type: 'button',
})`
    width: 100px;
    padding: 9px 0;
    margin-right: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    color: #767676;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    box-sizing: border-box;
`;
const BtnRight = styled(BtnLeft)`
    background-color: #6997f7;
    padding: 10px 0;
    margin-right: 0px;
    border: none;
    color: #ffffff;
`;

const Modal = ({ close }: any) => {
    return (
        <Container>
            <Wrap>
                <CloseBtn onClick={close} />
                <Content>
                    <p>
                        로그인이 필요한 서비스입니다.
                        <br />
                        로그인 하시겠습니까?
                    </p>

                    <div>
                        <BtnLeft onClick={close}>아니오</BtnLeft>
                        <BtnRight
                            onClick={() => (window.location.href = '/login')}
                        >
                            예
                        </BtnRight>
                    </div>
                </Content>
            </Wrap>
        </Container>
    );
};
export default Modal;
