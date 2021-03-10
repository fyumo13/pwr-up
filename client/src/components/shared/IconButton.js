import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconBtn = styled.button`
    display: inline-flex;
    padding: var(--gap);
    border-radius: var(--border-radius);
    align-items: center;
    text-align: center;
    justify-content: center;
    background: var(--${props => props.bg});
    border: 1px solid var(--${props => props.bg});
    color: var(--${props => props.color});
    cursor: pointer;
    &:hover {
        background: var(--${props => props.bg}-2);
        border: 1px solid var(--${props => props.bg}-2);
    }

    svg {
        height: var(--length-${props => props.size});
        width: var(--length-${props => props.size});
        fill: var(--${props => props.color});
    }
`;

const IconOutlineBtn = styled(IconBtn)`
    background: transparent;
    border: 1px solid var(--${props => props.bg});
    color: var(--${props => props.bg});
    &:hover {
        background: var(--${props => props.bg});
        color: var(--${props => props.color});

        svg {
            fill: var(--${props => props.color});
        }
    }

    svg {
        height: var(--length-${props => props.size});
        width: var(--length-${props => props.size});
        fill: var(--${props => props.bg});
        transition: all 0.25s linear;
    }
`;

export default function IconButton(props) {
    switch(props.variant) {
        case 'outline':
            return (
                <IconOutlineBtn bg={props.bg} color={props.color} size={props.size}>{props.children}</IconOutlineBtn>
            );
        default:
            return (
                <IconBtn bg={props.bg} color={props.color} size={props.size}>{props.children}</IconBtn>
            );
    }
}

IconButton.propTypes = {
    variant: PropTypes.string,
    bg: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string
}