import styled from 'styled-components';

const Section = styled.section`
    margin: 15px 0px 5px;
    border-bottom: 1px solid var(--base-gray);
`;

const Container = styled.div`
    margin: 0 auto;
    padding: 10px;
`;

const Title = styled.p`
    padding-bottom: 9px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid var(--light-gray);
`;

const Ul = styled.ul`
    margin: 8px 0 30px;
`;

const List = styled.li`
    padding: 5px 0;
`;

const ListTitle = styled.span`
    display: inline-block;
    width: 150px;
    color: var(--dark-gray);
    font-weight: 600;
`;
export { Section, Container, Title, Ul, List, ListTitle };
