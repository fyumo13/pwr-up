import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TextLink = styled(Link)`
    color: var(--info);
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`; 