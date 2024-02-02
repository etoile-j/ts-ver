import styled from 'styled-components';

const Count = styled.button`
    width: 50px;
    height: 50px;
    border-top: 1px solid var(--base-gray);
    border-bottom: 1px solid var(--base-gray);
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
`;

const CountBtn = styled.button.attrs({ type: 'button' })`
    position: relative;
    width: 50px;
    height: 50px;
    border: 1px solid var(--base-gray);
    border-radius: 5px 0 0 5px;
    color: transparent;
    font-weight: 500;
    font-size: 18px;
    ::before {
        content: '';
        background-color: var(--base-gray);
        position: absolute;
        top: 24px;
        left: 15px;
        width: 18px;
        height: 2px;
    }
`;

const CountBtnplus = styled(CountBtn)`
    border-radius: 0 5px 5px 0;
    ::after {
        content: '';
        background-color: var(--base-gray);
        position: absolute;
        top: 16px;
        left: 23px;
        width: 2px;
        height: 18px;
    }
`;

export { Count, CountBtn, CountBtnplus };
