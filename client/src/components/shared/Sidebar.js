import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 12;
    
    background: ${({ theme }) => theme.navbarBg};
    color: ${({ theme }) => theme.textColor};

    svg {
        fill: ${({ theme }) => theme.textColor};
        width: calc(var(--font-size) * 1.5);
        height: calc(var(--font-size) * 1.5);
        transition: all 0.25s linear;
        &:hover {
            fill: var(--primary);
        }
    }

    @media (max-width: 47.9rem) {
        padding: calc(var(--gap) * 1.5);
        width: 100%;
        bottom: 0;
        left: 0;
    }

    @media (min-width: 48rem) {
        flex-direction: column;
        justify-content: space-between;
        padding: calc(var(--gap) * 1.5) calc(var(--gap) * 0.5);
        height: 100%;
        top: 0;
        left: 0;
    }
`;

export const SidebarNav = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 47.9rem) {
        justify-content: space-evenly;
    } 

    @media (min-width: 48rem) {
        flex-direction: column;
        justify-content: center;
        top: 0;
        left: 0;
        height: 100%;
    }
`;

export const SidebarNavItem = styled(Link)`
    display: inline-flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: var(--gap) 0;
    margin: 0 var(--gap);
    font-size: calc(var(--font-size) * 0.85);
    text-decoration: none;
    transition: all 0.25s linear;
`;

export const SidebarLogo = styled.div`
    img {
        width: ${props => props.width};
        height: ${props => props.height};
    }
`;