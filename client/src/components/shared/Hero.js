import styled from 'styled-components';

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: url("${props => props.bg}") no-repeat fixed center;
    background-size: cover;
    &::after {
        content: "";
        background: rgba(40, 40, 40, 0.75);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
    
    > * {
        z-index: 10;
    }
    
    @media (min-width: 48rem) {
        div:first-child {
            text-align: center;
        }

        div:nth-child(2) {
            text-align: left;
        }
    }
`;