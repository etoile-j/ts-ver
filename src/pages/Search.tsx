import { useLocation } from 'react-router-dom';
import Header from 'components/common/Header';
import styled from 'styled-components';
import SearchContent from 'components/search/SearchContent';

const Ul = styled.ul`
    display: flex;
`;

const Search = () => {
    const keyword = useLocation().state.keyword;

    return (
        <>
            <Header searchKeyword={keyword} />
            <SearchContent keyword={keyword} />
        </>
    );
};
export default Search;
