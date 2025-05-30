import styled from 'styled-components';

export const CarrotHeader = styled.header`
    max-width: 1440px;
    width: 100%;
    height: 68px;
    background-color: #fff;
    z-index: 3000;
    position: fixed;
`;

export const CarrotInnerHeader = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 68px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CarrotLogoLink = styled.a`
    max-width: 64px;
    width: 100%;
    height: 36px;
    cursor: pointer;
`

export const CarrotLogoSvg = styled.svg`
    max-width: 64px;
    width: 100%;
    height: 36px;
    cursor: pointer;
`

export const InnerHeaderNav = styled.div`
    max-width: 460px;
    width: 100%;
    height: 20px;
`

export const InnerHeaderNavUl = styled.div`
    max-width: 460px;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavItemLink = styled.a`
    color: #000;
    font-size: 1rem;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
        color: gray;
        cursor: pointer;
    }
`