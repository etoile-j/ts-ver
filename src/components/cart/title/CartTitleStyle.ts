import styled from 'styled-components';
import { tabeleContent } from 'styles/mixins';

const TitleLi = styled.li`
    display: flex;
    background: var(--light-gray);
    padding: 10px 0;
    margin-bottom: 35px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 39px;
`;

const Content = styled.span`
    ${tabeleContent}
`;

const ContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
`;

const AllDeleteBtn = styled.button`
    background-color: var(--base-gray);
    width: 73px;
    height: 30px;
    border-radius: 5px;
    color: var(--white);
    font-weight: 550;
    font-size: 12.5px;
    line-height: 20px;
`;

export { TitleLi, Content, ContentWrap, AllDeleteBtn };
