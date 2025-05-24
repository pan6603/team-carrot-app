import styled from 'styled-components';

const FooterContainer = styled.footer`
    padding-top: 4.375rem;
    padding-bottom: 6rem;
    max-width: 1440px;
    width: 100%;
    height: 185px;
    border-top: 1px solid #f2f3f6;
    margin: 0 auto;
`

const InnerFooter = styled.nav`
    max-width: 1200px;
    width: 100%;
    height: 118px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavFooterMenu = styled.div`
    max-width: 1152px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavFooterMenuItem = styled.div`
    max-width: 488px;
    width: 100%;
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavFooterMenuItemLink = styled.a`
    text-decoration: none;
    display: inline-flex;
    align-items: center;

     &:hover {
        color: gray;
        cursor: pointer;
    }
`


const NavFooterMenuSns = styled.div`
    max-width: 200px;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavFooterMenuSnsLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const StyledGithubIcon = styled.svg`
    max-width: 27px;
    width: 100%;
    height: 28px;
    fill: #212124;
`;

const StyledMediumIcon = styled.svg`
    max-width: 27px;
    width: 100%;
    height: 27px;
    fill: #212124;
`;

const StyledFacebookIcon = styled.svg`
    max-width: 28px;
    width: 100%;
    height: 28px;
    fill: #212124;
`;

const StyledInstagramIcon = styled.svg`
    max-width: 27px;
    width: 100%;
    height: 27px;
    fill: #212124;
`;

function Footer() {
    return (
        <FooterContainer>
            <InnerFooter>
                <NavFooterMenu>
                    <NavFooterMenuItem>
                        <NavFooterMenuItemLink>개인정보처리방침</NavFooterMenuItemLink>
                        <NavFooterMenuItemLink>브랜드 리소스</NavFooterMenuItemLink>
                        <NavFooterMenuItemLink>자주 묻는 질문</NavFooterMenuItemLink>
                        <NavFooterMenuItemLink>IR</NavFooterMenuItemLink>
                        <NavFooterMenuItemLink>PR</NavFooterMenuItemLink>
                    </NavFooterMenuItem>
                    <NavFooterMenuSns>
                        <NavFooterMenuSnsLink href='https://github.com/daangn'>
                            <StyledGithubIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 28">
                                <path
                                fill="#212124"
                                d="M13.5.604C6.046.604 0 6.802 0 14.446 0 20.56 3.868 25.75 9.233 27.58c.674.128.892-.301.892-.665v-2.577c-3.755.837-4.537-1.634-4.537-1.634-.614-1.6-1.5-2.025-1.5-2.025-1.225-.86.094-.84.094-.84 1.355.096 2.068 1.426 2.068 1.426 1.204 2.115 3.158 1.504 3.929 1.15.12-.894.47-1.505.857-1.85-2.998-.352-6.15-1.539-6.15-6.841 0-1.512.527-2.747 1.39-3.716-.14-.349-.601-1.757.132-3.663 0 0 1.134-.371 3.714 1.419 1.076-.307 2.23-.46 3.378-.466 1.148.006 2.303.16 3.382.466 2.577-1.79 3.709-1.419 3.709-1.419.735 1.907.272 3.315.133 3.663.866.97 1.389 2.205 1.389 3.716 0 5.316-3.158 6.487-6.164 6.83.484.428.926 1.27.926 2.562v3.799c0 .367.216.8.901.664C23.136 25.746 27 20.559 27 14.446 27 6.802 20.955.604 13.5.604Z"
                                />
                            </StyledGithubIcon>
                        </NavFooterMenuSnsLink>
                        <NavFooterMenuSnsLink href='https://medium.com/daangn'>
                            <StyledMediumIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
                                <path
                                    fill="#212124"
                                    d="M15.101 14c0 3.866-3.156 7-7.05 7C4.157 21 1 17.866 1 14s3.157-7 7.05-7c3.895 0 7.051 3.134 7.051 7ZM22.836 14c0 3.64-1.578 6.59-3.525 6.59-1.947 0-3.526-2.95-3.526-6.59 0-3.639 1.578-6.59 3.526-6.59 1.947 0 3.525 2.95 3.525 6.59ZM26 14c0 3.26-.555 5.904-1.24 5.904-.685 0-1.24-2.644-1.24-5.904s.556-5.904 1.24-5.904C25.445 8.096 26 10.74 26 14Z"
                                />
                            </StyledMediumIcon>
                        </NavFooterMenuSnsLink>

                        <NavFooterMenuSnsLink href='https://www.facebook.com/daangn/'>
                            <StyledFacebookIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                                <path
                                fill="#212124"
                                d="M27.5 13.975C27.5 6.69 21.403.79 13.877.79 6.351.791.254 6.691.254 13.975c0 6.58 4.983 12.035 11.492 13.025v-9.217H8.282v-3.808h3.464v-2.907c0-3.304 2.034-5.127 5.146-5.127 1.49 0 3.052.258 3.052.258v3.24h-1.72c-1.689 0-2.222 1.014-2.222 2.057v2.473h3.778l-.605 3.808h-3.173v9.211c6.515-.984 11.498-6.433 11.498-13.013Z"
                                />
                            </StyledFacebookIcon>
                        </NavFooterMenuSnsLink>
                        <NavFooterMenuSnsLink href='https://www.instagram.com/daangnmarket/'>
                            <StyledInstagramIcon
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 27 27"
                            >
                                <path
                                fill="#212124"
                                d="M13.5 3.447c3.605 0 4.032.013 5.455.076 1.316.057 2.031.27 2.507.447.63.236 1.08.518 1.552.973.473.455.765.888 1.01 1.494.185.459.405 1.147.465 2.414.065 1.371.078 1.782.078 5.253 0 3.472-.013 3.883-.078 5.254-.06 1.267-.28 1.955-.465 2.414a4.018 4.018 0 0 1-1.01 1.494 4.2 4.2 0 0 1-1.552.973c-.476.178-1.19.39-2.507.447-1.423.063-1.85.076-5.455.076s-4.032-.013-5.455-.076c-1.316-.057-2.031-.27-2.507-.447a4.2 4.2 0 0 1-1.552-.973 4.017 4.017 0 0 1-1.01-1.494c-.185-.459-.405-1.147-.465-2.414-.065-1.371-.079-1.782-.079-5.254 0-3.47.014-3.882.08-5.253.06-1.267.28-1.955.464-2.414a4.016 4.016 0 0 1 1.01-1.494 4.202 4.202 0 0 1 1.552-.973c.476-.178 1.19-.39 2.507-.447 1.423-.063 1.85-.076 5.455-.076Zm0-2.343c-3.666 0-4.126.015-5.566.079-1.437.063-2.418.283-3.277.604a6.649 6.649 0 0 0-2.391 1.5A6.353 6.353 0 0 0 .709 5.588C.375 6.416.147 7.361.08 8.745.015 10.13 0 10.574 0 14.105c0 3.53.015 3.973.081 5.36.066 1.383.294 2.328.628 3.155.345.855.806 1.58 1.557 2.303a6.648 6.648 0 0 0 2.39 1.499c.86.321 1.841.541 3.278.604 1.44.064 1.9.079 5.566.079s4.126-.015 5.566-.079c1.437-.063 2.418-.283 3.277-.604a6.648 6.648 0 0 0 2.391-1.5 6.353 6.353 0 0 0 1.557-2.302c.334-.827.562-1.772.628-3.156.066-1.386.081-1.829.081-5.36 0-3.53-.015-3.973-.081-5.36-.066-1.383-.294-2.328-.628-3.155a6.353 6.353 0 0 0-1.557-2.303 6.648 6.648 0 0 0-2.391-1.499c-.859-.321-1.84-.541-3.277-.604-1.44-.064-1.9-.079-5.566-.079Zm0 6.325c-3.829 0-6.932 2.989-6.932 6.675 0 3.687 3.103 6.676 6.932 6.676s6.932-2.989 6.932-6.676c0-3.686-3.103-6.675-6.932-6.675Zm0 11.009c-2.485 0-4.5-1.94-4.5-4.333 0-2.394 2.015-4.334 4.5-4.334s4.5 1.94 4.5 4.333c0 2.394-2.015 4.334-4.5 4.334Zm8.826-11.273c0 .862-.725 1.56-1.62 1.56-.894 0-1.62-.698-1.62-1.56 0-.862.726-1.56 1.62-1.56.895 0 1.62.698 1.62 1.56Z"
                                />
                            </StyledInstagramIcon>
                        </NavFooterMenuSnsLink>
                    </NavFooterMenuSns>
                </NavFooterMenu>
            </InnerFooter>
        </FooterContainer>
    )
}

export default Footer;