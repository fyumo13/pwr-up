import React from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../../api/index';

import { Sidebar, SidebarNav, SidebarNavItem, SidebarLogo } from '../shared/Sidebar';
import { ToggleContainer } from '../shared/ToggleContainer';

import PwrUpLogo from '../../assets/img/pwr-up-icon.png';
import { ReactComponent as WorkoutsIcon } from '../../assets/icons/workout-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout-icon.svg';
import { ReactComponent as DayIcon } from '../../assets/icons/day-icon.svg';
import { ReactComponent as NightIcon } from '../../assets/icons/night-icon.svg';

export default function CustomSidebar({ theme, toggleTheme, authenticated }) {
    const isLight = theme === 'light';

    return (
        <Sidebar bg="dark-2" color="light" role="navigation">
            <Link to="/dashboard">
                <SidebarLogo width="24px" height="40px">
                    <img src={PwrUpLogo} alt="PWR-UP Logo" />
                </SidebarLogo>
            </Link>
            <SidebarNav>
                <SidebarNavItem to="/dashboard">
                    <WorkoutsIcon />
                </SidebarNavItem>
                <SidebarNavItem to="/profile">
                    <UserIcon />
                </SidebarNavItem>
                <SidebarNavItem onClick={logout}>
                    <LogoutIcon />
                </SidebarNavItem>
            </SidebarNav>
            <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
                <DayIcon />
                <NightIcon />
            </ToggleContainer>
        </Sidebar>
    );
}