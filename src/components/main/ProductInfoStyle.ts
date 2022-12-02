import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

const Products = styled(InfiniteScroll)`
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    gap: 58px;
    @media screen and (max-width: 1100px) {
        gap: 28px;
    }
    @media screen and (max-width: 770px) {
        grid-template: auto / repeat(2, 1fr);
        gap: 20px;
    }
`;

export { Products };
