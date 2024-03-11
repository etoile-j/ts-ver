import styled from 'styled-components';
import { tabeleContent } from 'styles/mixins';

const TitleLi = styled.li`
    display: flex;
    background: var(--light-gray);
    padding: 19px 0 18px;
    margin-bottom: 35px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const Content = styled.span`
    ${tabeleContent}
`;
export { TitleLi, Content };
