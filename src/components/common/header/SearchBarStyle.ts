import SearchIcon from '../../../assets/search.svg';
import ClearIcon from '../../../assets/icon-delete.svg';
import styled from 'styled-components';

const SearchContainer = styled.div`
    position: relative;
    width: 400px;
    @media screen and (max-width: 900px) {
        width: 310px;
    }
`;

const Search = styled.input`
    width: 100%;
    padding: 11px 87px 11px 20px;
    border: 2px solid var(--point-color);
    border-radius: 50px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    ::placeholder {
        color: #767676;
    }
`;

const ClearBtn = styled.button.attrs({ type: 'button' })`
    position: absolute;
    top: 10px;
    right: 60px;
    width: 26px;
    height: 26px;
    background-image: url(${ClearIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px 18px;
    :hover {
        border-radius: 50%;
        background-color: whitesmoke;
    }
`;

const SearchBtn = styled.button`
    width: 28px;
    height: 28px;
    position: absolute;
    top: 8px;
    right: 22px;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-size: contain;
`;

export { SearchContainer, Search, ClearBtn, SearchBtn };
