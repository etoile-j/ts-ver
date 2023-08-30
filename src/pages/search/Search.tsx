import { useLocation } from 'react-router-dom';
import Header from 'components/common/header/Header';
import SearchContent from 'components/search/SearchContent';
import Footer from 'components/common/Footer';

const Search = () => {
    const keyword = useLocation().state.keyword;

    return (
        <>
            <Header searchKeyword={keyword} />
            <SearchContent keyword={keyword} />
            <Footer />
        </>
    );
};
export default Search;
