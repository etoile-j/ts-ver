import styled from 'styled-components';

const Main = styled.main`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
`;

const Total = styled.div`
    text-align: right;
    margin: 30px 0 90px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    & > strong {
        margin-left: 10px;
        color: red;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
    }
`;

const Section = styled.section`
    margin-left: 40px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`;

const Heading = styled.h3`
    padding-bottom: 18px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
`;

export { Main, Total, Section, Container, Heading };
