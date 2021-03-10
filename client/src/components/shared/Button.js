import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Form } from './Form';

const DefaultBtn = styled.button`
    display: inline-flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: var(--length-${props => props.size}) calc(var(--length-${props => props.size}) * 2);
    border-radius: var(--border-radius);
    background: var(--${props => props.bg});
    border: 1px solid var(--${props => props.bg});
    color: var(--${props => props.color});
    font-family: 'Source Sans Pro', BlinkMacSystemFont, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 0.85rem;
    text-decoration: none;
    cursor: pointer;
    &:hover, &:active {
        background: var(--${props => props.bg}-2);
        border: 1px solid var(--${props => props.bg}-2);
    }

    svg {
        margin-right: calc(var(--length-${props => props.size}) * 0.25);
        fill: var(--${props => props.color});
    }

    ${Form} & {
        float: right;

        @media (max-width: 47.9rem) {
            width: 100%;
        }
    }
`;

const OutlineBtn = styled(DefaultBtn)`
    background: transparent;
    border: 1px solid var(--${props => props.bg});
    color: var(--${props => props.bg});
    &:hover, &:active {
        background: var(--${props => props.bg});
        color: var(--${props => props.color});

        svg {
            fill: var(--${props => props.color});
        }
    }

    svg {
        fill: var(--${props => props.bg});
        transition: all 0.25s linear;
    }
`;

export default function Button(props) {
    switch(props.variant) {
        case 'outline':
            return <OutlineBtn bg={props.bg} color={props.color} size={props.size} as={props.as} href={props.href} to={props.to}>{props.children}</OutlineBtn>
        default:
            return <DefaultBtn bg={props.bg} color={props.color} size={props.size} as={props.as} href={props.href} to={props.to}>{props.children}</DefaultBtn>
    }
}

Button.propTypes = {
    variant: PropTypes.string,
    bg: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    as: PropTypes.elementType,
    href: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node
}