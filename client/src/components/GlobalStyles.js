import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --light: #FCFCFC;
        --light-2: #E3E3E3;
        --dark: #1A1A1A;
        --dark-2: #212121;
        --primary: #F1555A;
        --primary-2: #EC131A;
        --secondary: #ED9907;
        --secondary-2: #BC7A06;
        --success: #60DC79;
        --success-2: #27B042;
        --warning: #DCC860;
        --warning-2: #B09A27;
        --error: #DC6060;
        --error-2: #B02727;
        --info: #7C7CC1;
        --info-2: #5959B1;

        --gray: #E0E0E0;
        --gray-2: #C2C2C2;
        --gray-3: #A3A3A3;
        --gray-4: #8F8F8F;
        --gray-5: #7A7A7A;
        --gray-6: #666666;
        --gray-7: #474747;
        --gray-8: #333333;

        --gap: 1rem;
        --border-radius: 0.5rem;
        --font-size: 1rem;
        --font-weight-light: 200;
        --font-weight-regular: 400;
        --font-weight-bold: 700;

        --length-xs: 1rem;
        --length-sm: 1.25rem;
        --length-md: 1.5rem;
        --length-lg: 1.75rem;
        --length-xl: 2rem;
        
        --screen-xs: 0;
        --screen-sm: 36rem;
        --screen-md: 48rem;
        --screen-lg: 62rem;
        --screen-xl: 120rem;

        --max-width-xs: 100%;
        --max-width-sm: 100%;
        --max-width-md: 90%;
        --max-width-lg: 56.25rem;
        --max-width-xl: 67.5rem;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        transition: all 0.25s linear;
    }

    body {
        margin: 0;
        font-family: 'Source Sans Pro', 'Sora', BlinkMacSystemFont, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
        font-size: var(--font-size);
        font-weight: var(--font-weight-regular);
        --webkit-text-adjust: 100%;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        font-family: 'Sora', 'Source Sans Pro', BlinkMacSystemFont, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
        font-weight: var(--font-weight-bold);
        line-height: 1.25;
    }

    h1, h2, h3 {
        margin-bottom: calc(var(--gap) * 0.5);
    }

    h4, h5, h6 {
        margin-bottom: calc(var(--gap) * 0.15);
    }

    h1 {
        font-size: calc(1.375rem + 1.5vw);
    }
    @media (min-width: 48rem) {
        h1 {
            font-size: calc(var(--font-size) * 3);
        }
    }

    h2 {
        font-size: calc(1.325rem + 0.9vw);
    }
    @media (min-width: 48rem) {
        h2 {
            font-size: calc(var(--font-size) * 2.25);
        }
    }

    h3 {
        font-size: calc(1.3rem + 0.6vw);
    }
    @media (min-width: 48rem) {
        h3 {
            font-size: calc(var(--font-size) * 2);
        }
    }

    h4 {
        font-size: calc(1.275rem + 0.3vw);
    }
    @media (min-width: 48rem) {
        h4 {
            font-size: calc(var(--font-size) * 1.75);
        }
    }

    h5 {
        font-size: calc(var(--font-size) * 1.5);
    }

    h6 {
        font-size: calc(var(--font-size) * 1.25);
    }

    p {
        margin-top: 0;
        margin-bottom: var(--gap);
    }

    a:active, a:focus, button:active, button:focus {
        outline: none;
    }

    img {
        width: 100%;
        vertical-align: middle;
        border-style: none;
    }

    svg {
        height: var(--font-size);
        width: var(--font-size);
        cursor: pointer;
        fill: ${({ theme }) => theme.textColor};
    }
`;