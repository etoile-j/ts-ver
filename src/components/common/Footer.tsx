import {
    FooterEl,
    Div,
    Ul,
    Li,
    GithubLi,
    Github,
    Address,
    Strong,
} from './FooterStyle';

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
                    <GithubLi>
                        <Github
                            target="_blank"
                            href="https://github.com/etoile-j"
                            rel="noreferrer"
                            aria-label="developer github"
                        ></Github>
                    </GithubLi>
                </Ul>
                <Address>
                    <Strong>(주)OUR SHOP</Strong>
                    <br />
                    서울특별시 서초구 OUR로 1
                    <br /> 사업자 번호 : 123-45-67890 | 통신판매업
                    <br /> 대표 : 임수진
                </Address>
            </Div>
        </FooterEl>
    );
};
export default Footer;
