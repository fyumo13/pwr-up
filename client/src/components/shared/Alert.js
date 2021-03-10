import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';

const StyledAlert = styled.div`
    display: ${props => props.open ? 'inline-flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    padding: calc(var(--gap) * 2);
    margin: var(--gap) 0;
    width: 100%;
    border-radius: var(--border-radius);
    background: var(--${props => props.status});
    color: var(--${props => props.color});

    p {
        margin-bottom: 0;
    }
    
    svg {
        fill: var(--${props => props.color});
        cursor: pointer;
    }
`;

export default function Alert(props) {
    const [open, setOpen] = useState(true);

    const handleClick = () => setOpen(!open);

    return (
        <StyledAlert status={props.status} color={props.color} open={open}>
            <p>{props.children}</p>
            <CloseIcon onClick={handleClick} />
        </StyledAlert> 
    );
}

Alert.propTypes = {
    status: PropTypes.string,
    color: PropTypes.string,
    open: PropTypes.bool,
    children: PropTypes.node
}