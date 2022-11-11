import GithubIcon from '../../assets/githubIcon.svg';
import styled from 'styled-components';

const FooterEl = styled.footer`
    background-color: #f2f2f2;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 15px 0;
    height: 294px;
    margin-top: 110px;
`;

const Div = styled.div`
    background-color: #f2f2f2;
    max-width: 1280px;
    min-width: 750px;
    margin: 0 auto;
`;

const Ul = styled.ul`
    padding: 54px 0 50px 0;
    margin: 0 auto;
    border-bottom: 1px solid #c4c4c4;
`;

const Li = styled.li`
    float: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    ::before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 14px;
        margin: 0 8px;
        background-color: black;
        vertical-align: -2px;
    }
`;

const GithubLink = styled.button`
    float: right;
    width: 32px;
    height: 32px;
    background-image: url(${GithubIcon});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Address = styled.address`
    padding: 30px 0 63px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
`;

const Strong = styled.strong`
    font-weight: 700;
`;

const Footer = () => {
    return (
        <FooterEl>
            <Div>
                <Ul>
                    <Li>OUR SHOP 소개</Li>
                    <Li>이용약관</Li>
                    <Li>개인정보처리방침</Li>
                    <Li>전자금융거래약관</Li>
                    <Li>청소년보호정책</Li>
                    <Li>제휴문의</Li>
                    <GithubLink
                        type="button"
                        onClick={() =>
                            window.open('https://github.com/etoile-j')
                        }
                    />
                </Ul>
                <Address>
                    <Strong>(주)OUR SHOP</Strong>
                    <br />
                    서울특별시 서초구 OUR로 1
                    <br /> 사업자 번호 : 123-4567-8910 | 통신판매업
                    <br /> 대표 : 임수진
                </Address>
            </Div>
        </FooterEl>
    );
};
export default Footer;
