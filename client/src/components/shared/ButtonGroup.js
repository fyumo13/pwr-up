import styled from 'styled-components';

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    > * {
        margin-left: var(--gap);
    }
`;