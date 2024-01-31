import styled from 'styled-components';

interface styledCompo {
    width?: string;
}

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
    position: relative;
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;
export { TitleLi, Content };
