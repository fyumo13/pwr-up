import styled from 'styled-components';

export const Card = styled.div`
    display: inline-flex;
    flex-direction: column;
    flex: 1;
    width: ${props => props.width ? props.width : '100%' };
    padding: var(--gap);
    margin-top: calc(var(--gap) * 0.5);
    margin-bottom: calc(var(--gap) * 0.5);
    border-radius: var(--border-radius);
    background: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.textColor};
`;

export const CardTitle = styled.div`
    display: flex;
    justify-content: space-between;
    > * {
        margin-bottom: calc(var(--gap) * 0.5);
        color: inherit;
    }
    
    svg {
        width: calc(var(--font-size) * 1.5);
        height: calc(var(--font-size) * 1.5);
    }
`;

export const CardSubtitle = styled.div`
    > *{
        font-size: 1rem;
        font-weight: 400;
        color: inherit;
    }
`;

export const CardImg = styled.img`
    margin-bottom: var(--gap);
    border-radius: var(--border-radius);
`;

export const CardBody = styled.div`
    > * {
        margin-bottom: 0;
    }
`;