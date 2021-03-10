import React from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../../api/index';

import { Topbar, TopbarNav, TopbarNavItem, TopbarLogo } from '../shared/Topbar';
import { ToggleContainer } from '../shared/ToggleContainer';

import { ReactComponent as PwrUpLogo } from '../../assets/img/pwr-up-logo.svg';
import { ReactComponent as WorkoutsIcon } from '../../assets/icons/workout-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout-icon.svg';
import { ReactComponent as DayIcon } from '../../assets/icons/day-icon.svg';
import { ReactComponent as NightIcon } from '../../assets/icons/night-icon.svg';

export default function CustomTopbar({ theme, toggleTheme, authenticated }) {
    const isLight = theme === 'light';

    return (
        <Topbar bg="dark-2" color="light" role="navigation">
            <Link to="/dashboard">
                <TopbarLogo width="80px" height="34px">
                    <PwrUpLogo />
                </TopbarLogo>
            </Link>
            { authenticated ? 
                <TopbarNav>
                    <TopbarNavItem to="/dashboard">
                        <WorkoutsIcon />Workouts
                    </TopbarNavItem>
                    <TopbarNavItem to="/profile">
                        <UserIcon />Profile
                    </TopbarNavItem>
                    <TopbarNavItem onClick={logout}>
                        <LogoutIcon />Log Out
                    </TopbarNavItem>
                </TopbarNav> : null
            }   
            <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
                <DayIcon />
                <NightIcon />
            </ToggleContainer>
        </Topbar>
    );
}