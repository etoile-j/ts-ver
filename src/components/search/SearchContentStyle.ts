import styled from 'styled-components';

const Main = styled.main`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
`;

const H2 = styled.h2`
    padding-top: 30px;
    padding-bottom: 0;
    text-align: left;
    font-size: 22px;
`;

const Keyword = styled.strong`
    color: #2c6cf6;
`;

const Container = styled.article`
    display: grid;
    grid-template: auto / repeat(4, 1fr);
    gap: 20px;
    padding-top: 20px;
    @media screen and (max-width: 1100px) {
        grid-template: auto / repeat(3, 1fr);
        gap: 28px;
    }
    @media screen and (max-width: 770px) {
        grid-template: auto / repeat(2, 1fr);
        gap: 20px;
    }
`;

const Nothing = styled.section`
    height: 450px;
    padding-top: 180px;
    text-align: center;
    font-size: 19px;
    font-weight: 500;
`;

const Description = styled.p`
    margin-top: 15px;
    color: gray;
    font-size: 16px;
    line-height: 1.4;
`;

export { Main, H2, Keyword, Container, Nothing, Description };
