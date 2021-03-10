import styled from 'styled-components';

import { Hero } from './Hero';

export const Form = styled.form`
    border-radius: var(--border-radius);
    background: ${({ theme }) => theme.formBg};
    color: ${({ theme }) => theme.formText};
    font-family: 'Source Sans Pro', BlinkMacSystemFont, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    overflow: hidden;
    
    @media (min-width: 0) {
        padding: calc(var(--length-xs) * 2);
    }

    @media (min-width: 36rem) {
        padding: calc(var(--length-sm) * 2);
    }

    @media (min-width: 48rem) {
        padding: calc(var(--length-md) * 2); 
    }

    @media (min-width: 62rem) {
        padding: calc(var(--length-lg) * 2);
    }

    @media (min-width: 120rem) {
        padding: var(--length-xl);
    }

    ${Hero} & {
        @media (max-width: 47.9rem) {
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 0;
        }
    }
`;

export const FormHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        width: calc(var(--font-size) * 1.5);
        height: calc(var(--font-size) * 1.5);
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: ${props => props.variant};
    align-items: ${props => props.variant ? 'left' : 'center'};
    margin: var(--gap) 0;
`;

export const FormLabel = styled.label`
    width: 25%;
`;

export const FormInput = styled.input`
    border-radius: var(--border-radius);
    border: 1px solid ${({ theme }) => theme.formInputBg};
    width: 100%;
    padding: calc(var(--gap) * 1.25) var(--gap);
    outline: none;
    font-family: inherit;
    background: transparent;
    color: ${({ theme }) => theme.formText};
    &::placeholder {
        color: var(--gray-2);
    }
    &:focus {
        background: ${({ theme }) => theme.formInputBg};
        color: ${({ theme }) => theme.formInputText};
    }
`;

export const FormTextarea = styled.textarea`
    border-radius: var(--border-radius);
    background: transparent;
    border: 1px solid ${({ theme }) => theme.formInputText};
    width: 100%;
    padding: calc(var(--gap) * 1.25) var(--gap);
    outline: none;
    font-family: inherit;
    &::placeholder {
        color: var(--gray);
    }
    &:focus {
        background: ${({ theme }) => theme.formInputBg};
        color: ${({ theme }) => theme.formInputText};
        &::placeholder {
            color: var(--gray-2);
        }
    }
`;