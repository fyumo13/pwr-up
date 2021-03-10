import styled from 'styled-components';

export const Panel = styled.div`
    padding: var(--gap);
    background: ${({ theme }) => theme.panelBg};
    border-radius: var(--border-radius);
    margin: var(--gap) calc(var(--gap) * 0.5);
`;