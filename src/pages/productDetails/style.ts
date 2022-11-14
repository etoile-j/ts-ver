import styled from 'styled-components';

const Main = styled.main`
    padding: 80px 20px 60px;
    max-width: 1300px;
    margin: 0 auto;
`;

const Ul = styled.ul`
    display: flex;
    margin-top: 140px;
    color: #767676;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    @media screen and (max-width: 620px) {
        margin-top: 640px;
    }
`;
const Li = styled.li`
    width: 320px;
    padding: 19px 0 12px;
    border-bottom: solid 6px #e0e0e0;
`;

export { Main, Ul, Li };
