import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-gap: ${props => props.gap}rem;
    grid-template-columns: repeat(1, 1fr);

    div:first-child {
        text-align: center;
    }
    
    @media (min-width: 48rem) {
        grid-template-columns: repeat(${props => props.cols}, 1fr);
    }
`;