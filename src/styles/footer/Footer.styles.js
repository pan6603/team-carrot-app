import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding-top: 4.375rem;
    padding-bottom: 6rem;
    max-width: 1440px;
    width: 100%;
    height: 185px;
    border-top: 1px solid #f2f3f6;
    margin: 0 auto;
`

export const InnerFooter = styled.nav`
    max-width: 1200px;
    width: 100%;
    height: 118px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavFooterMenu = styled.div`
    max-width: 1152px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavFooterMenuItem = styled.div`
    max-width: 488px;
    width: 100%;
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavFooterMenuItemLink = styled.a`
    text-decoration: none;
    display: inline-flex;
    align-items: center;

     &:hover {
        color: gray;
        cursor: pointer;
    }
`


export const NavFooterMenuSns = styled.div`
    max-width: 200px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavFooterMenuSnsLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    
`

export const StyledGithubIcon = styled.svg`
    max-width: 27px;
    width: 100%;
    height: 28px;
    color: #212124;

`;

export const StyledMediumIcon = styled.svg`
    max-width: 27px;
    width: 100%;
    height: 27px;
    color: #212124;

    &:hover {
        color: gray;
        cursor: pointer;
    }
`;

export const StyledFacebookIcon = styled.svg`
    max-width: 28px;
    width: 100%;
    height: 28px;
    color: #212124;

    &:hover {
        color: gray;
        cursor: pointer;
    }
`;

export const StyledInstagramIcon = styled.svg`
    max-width: 27px;
    width: 100%;
    height: 27px;
    color: #212124;

    &:hover {
        color: gray;
        cursor: pointer;
    }
`;