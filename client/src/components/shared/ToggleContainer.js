import styled from 'styled-components';

export const ToggleContainer = styled.button`
    background: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    box-shadow: -2px 2px 4px ${({ theme }) => theme.toggleBoxShadow};
    border-radius: 64px;
    cursor: pointer;
    justify-content: space-between;
    overflow: hidden;
    padding: 0.25rem;
    width: 5rem;
    height: 2.5rem;
    margin: 8px;

    svg {
        height: auto;
        width: 1.75rem;
        
        &:first-child {
            transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
            fill: var(--secondary);
        }
        
        &:nth-child(2) {
            transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0)'};
            fill: var(--primary);
        }
    }
`;