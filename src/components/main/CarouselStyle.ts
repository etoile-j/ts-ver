import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    padding-bottom: 80px;
`;

const Temp = styled.div`
    background-color: lightblue;
    height: 430px;
`;
const Temp2 = styled(Temp)`
    background-color: lightgray;
`;

export { Container, Temp, Temp2 };
