import { Link } from 'react-router-dom';
import { ISearch } from 'GlobalType';
import SearchBar from './SearchBar';
import RightButtons from './RightButtons';
import { HeaderElement, Nav, Wrap, Logos, LogoImg, LogoText } from './HeaderStyle';

const Header = ({ searchKeyword }: ISearch) => {
    return (
        <HeaderElement>
            <Nav>
                <Wrap>
                    <Link
                        to="/"
                        aria-label="OUR-SHOP 메인 페이지"
                        title="OUR-SHOP 메인 페이지"
                    >
                        <Logos>
                            <LogoImg />
                            <LogoText />
                        </Logos>
                    </Link>
                    <SearchBar searchKeyword={searchKeyword} />
                </Wrap>
                <RightButtons />
            </Nav>
        </HeaderElement>
    );
};
export default Header;
