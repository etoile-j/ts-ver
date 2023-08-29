import styled from 'styled-components';

const Main = styled.main`
    margin: 0 25px;
`;

const Ul = styled.ul`
    text-align: center;
    margin-bottom: 50px;
`;

const Li = styled.li`
    display: inline;
    position: relative;
    color: #333333;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const LiPseudo = styled(Li)`
    padding-left: 33px;
    ::after {
        content: '';
        position: absolute;
        background-color: #333333;
        top: 2px;
        left: 16px;
        width: 1px;
        height: 17px;
    }
`;

export { Main, Ul, Li, LiPseudo };
