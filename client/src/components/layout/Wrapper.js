import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: calc(var(--gap) + 96px);

    @media (min-width: 48rem) {
        grid-template-columns: 40% 60%;
        margin: var(--gap) calc(var(--gap) * 0.5) var(--gap) calc(calc(var(--gap) * 1.5) + 96px);
    }
`;