import React from 'react';

import { ToggleContainer } from '../shared/ToggleContainer';

import { ReactComponent as DayIcon } from '../../assets/icons/day.svg';
import { ReactComponent as NightIcon } from '../../assets/icons/night.svg';

export default function DarkModeToggle({ theme, toggleTheme }) {
    const isLight = theme === 'light';

    return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
            <DayIcon />
            <NightIcon />
        </ToggleContainer>
    );
}