import styled from 'styled-components';

export const SpanText = styled.span`
    color: ${({ theme }) => theme.spanText};
    font-size: calc(var(--font-size) * 0.85);
`;