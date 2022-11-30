import styled from 'styled-components';

const Keyword = styled.strong`
    color: #2c6cf6;
    font-weight: 600;
`;

interface ISearch {
    keyword: string;
}

const SearchContent = ({ keyword }: ISearch) => {
    return (
        <>
            <p>
                <Keyword>'{keyword}'</Keyword>에 대한 0개의 검색 결과
            </p>
        </>
    );
};
export default SearchContent;
