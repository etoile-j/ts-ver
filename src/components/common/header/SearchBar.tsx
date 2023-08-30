import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContainer, Search, ClearBtn, SearchBtn } from './SearchBarStyle';

interface ISearch {
    searchKeyword?: string;
}

const SearchBar = ({ searchKeyword }: ISearch) => {
    const [keyword, setKeyword] = useState(searchKeyword || '');
    const navigate = useNavigate();

    useEffect(() => {
        setKeyword(searchKeyword!);
    }, [searchKeyword]);

    const handleSearch = () => {
        if (keyword.trim() === '') {
            return;
        } else {
            navigate('/search', {
                state: {
                    keyword: keyword.trim(),
                },
            });
        }
    };

    return (
        <SearchContainer>
            <Search
                type="text"
                value={keyword || ''}
                placeholder="상품을 검색해보세요!"
                maxLength={20}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setKeyword(e.target.value)
                }
                onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
            />
            {keyword && <ClearBtn onClick={() => setKeyword('')} />}
            <SearchBtn onClick={() => handleSearch()} aria-label="검색하기" />
        </SearchContainer>
    );
};
export default SearchBar;
