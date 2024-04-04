import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ISearch } from 'GlobalType';
import { SearchContainer, Search, ClearBtn, SearchBtn } from './SearchBarStyle';

const SearchBar = ({ searchKeyword }: ISearch) => {
    const keywordRef = useRef<HTMLInputElement>(null);
    const [clearVisible, setClearVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchKeyword !== undefined) {
            keywordRef.current!.value = searchKeyword;
        }
    }, [searchKeyword]);

    const handleSearch = () => {
        if (keywordRef.current!.value.trim() === '') {
            return;
        } else {
            navigate('/search', {
                state: { keyword: keywordRef.current!.value.trim() },
            });
        }
    };

    const handleInput = () => {
        if (keywordRef.current?.value) {
            setClearVisible(true);
        } else {
            setClearVisible(false);
        }
    };

    return (
        <SearchContainer>
            <Search
                type="text"
                ref={keywordRef}
                placeholder="상품을 검색해보세요!"
                maxLength={20}
                onChange={handleInput}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
            />
            {clearVisible && (
                <ClearBtn
                    onClick={() => {
                        keywordRef.current!.value = '';
                    }}
                />
            )}
            <SearchBtn onClick={() => handleSearch()} aria-label="검색하기" />
        </SearchContainer>
    );
};
export default SearchBar;
