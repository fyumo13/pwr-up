import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Topbar = styled.nav`
    position: fixed;
    z-index: 12;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--gap) calc(var(--gap) * 2);
    background: ${({ theme }) => theme.navbarBg};
    color:  ${({ theme }) => theme.textColor};
    
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
        bottom: 0;
    }

    @media (min-width: 48rem) {
        top: 0;
        background: transparent;
    }
`;

export const TopbarNav = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const TopbarMobileNav = styled.div`
    z-index: 12;
    position: relative;
    top: 0;
    left: 90;
    transform: translate(-90%, 0%);

    svg {
        fill: inherit;
    }

    @media (min-width: 48rem) {
        display: none;
    }
`;

export const TopbarNavItem = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: var(--gap) 0;
    margin: 0 var(--gap);
    border-bottom: 2px solid transparent;
    font-size: calc(var(--font-size) * 0.85);
    color: inherit;
    text-decoration: none;
    &:hover {
        color: var(--primary);
        text-decoration: none;
        border-bottom: 2px solid var(--primary);
        svg {
            fill: var(--primary);
        }
    }

    svg {
        margin-right: calc(var(--gap) * 0.5);
    }
`;

export const TopbarLogo = styled.div`
    img, svg {
        width: ${props => props.width};
        height: ${props => props.height};
    }
`;