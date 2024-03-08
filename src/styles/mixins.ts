import { css } from 'styled-components';

interface styledCompo {
    width?: string;
}

export const productCircleImg = css`
    width: 70px;
    height: 70px;
    margin: 0 20px 0 10px;
    border-radius: 50%;
    object-fit: contain;
`;

export const tabeleContent = css`
    position: relative;
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;
