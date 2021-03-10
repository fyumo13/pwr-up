import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding-right: var(--gap, 0.75rem);
    padding-left: var(--gap, 0.75rem);
    margin-top: calc(var(--gap) * 2);
    margin-right: auto;
    margin-left: auto;
    
    @media (min-width: 0) {
        max-width: var(--max-width-xs);
    }

    @media (min-width: 36rem) {
        max-width: var(--max-width-sm);
    }

    @media (min-width: 48rem) {
        max-width: var(--max-width-md);
    }

    @media (min-width: 62rem) {
        max-width: var(--max-width-lg);
    }

    @media (min-width: 120rem) {
        max-width: var(--max-width-xl);
    }
`;