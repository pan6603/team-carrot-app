import styled, { keyframes } from 'styled-components';


const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContainer = styled.main`
    max-width: 1440px;
    width: 100%;
    height: 4545px;
    padding-top: 120px;
`

export const MainInnerTitle = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 146px;
    margin: 0 auto;
    margin-bottom: 5.5rem;
`

export const MainInnerTitleText = styled.h1`
    margin-bottom: 5.5rem;
    line-height: 4.5625rem;
    font-size: 3.375rem;
    font-weight: bold;
    opacity: 0;
    animation: ${fadeInUp} 0.8s ease forwards;
`

export const MainInnerTitleTextBr = styled.br`

`

export const MainInnerContent = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 4047px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10rem;
`

export const InnerTextCarrotUsers = styled.section`
    max-width: 1200px;
    width: 100%;
    height: 813px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const InnerTextCarrotTeamImg = styled.img`
    max-width: 1152px;
    width: 100%;
    height: 648px;
    border-radius: 1.875rem;
    margin: 0 auto;
`

export const InnerCarrotTeamContent = styled.p`
    max-width: 720px;
    width: 100%;
    height: 117px;
    font-size: 1.625rem;
    font-weight: bold;
    padding-left: 0rem;
    padding-right: 0rem;
    margin-left: 27px;
    opacity: 0;

    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }
`


export const WorkPhilosophy = styled.section`
    max-width: 664px;
    width: 100%;
    height: 196px;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    display: flex;
    gap: 1.5rem 0;
    flex-direction: column;
    align-items: center;
`

export const WorkPhilosophyDiv = styled.div`

`

export const HowCarrotsWork = styled.span`
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1.9375rem;
    font-weight: bold;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 0.6s ease forwards;
    }
    
`

export const UserValueFirst = styled.h2`
    max-width: 43.75rem;
    width: 100%;
    font-size: 2.625rem;
    line-height: 3.5625rem;
    margin: 0px;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }
    
`

export const UserDrivenText = styled.p`
    max-width: 31.25rem;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 1.875rem;
    font-size: 1.125rem;
    color: #5C5F69;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 1s ease forwards;
    }
`

export const JobPostingLink = styled.section`
    position: relative;
    max-width: 1440px;
    width: 100%;
    height: 260px;
    background-color: lightgray;
    margin-bottom: -10rem;
`

export const BannerImage = styled.img`
    width: 100%;
    opacity: 1;
    position: absolute;
`;

export const BannerContent = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 260px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const BannerContentFlex = styled.div`
    max-width: 417px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BannerContentTitle = styled.h3`
    font-size: 2.625rem;
    margin-bottom: 0.75rem;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }
`
export const BannerContentLink = styled.a`
    font-size: 1.25rem;
    line-height: 1.9375rem;
    display: flex;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    color: black;

     &:hover {
        color: gray;
        cursor: pointer;
    }

     &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }

`

export const BannerContentLinkText = styled.p`
    opacity: 0;
    animation: ${fadeInUp} 1s ease forwards;
`

export const BannerContentLinkSvg = styled.svg`
    max-width: 34px;
    width: 100%;
    height: 34px;
    color: currentColor;
    display: inline-block;
`;

export const CarrotStoryImage = styled.section`
    max-width: 1440px;
    width: 100%;
    height: 450px;
`

export const CarrotStoryImageWrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 450px;
`

export const CarrotStoryImageWrapperImage = styled.img`
    max-width: 1440px;
    width: 100%;
    height: auto;
`


export const CarrotStory = styled.section`
    max-width: 1440px;
    width: 100%;
    height: 571px;
`

export const WorkCulture = styled.section`
    max-width: 1200px;
    width: 100%;
    height: 417px;
    margin: 0px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const WorkCultureTitleLeft = styled.div`
    max-width: 556px;
    width: 100%;
    height: 417px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WorkCultureImageWrapper = styled.div`
    max-width: 556px;
    width: 100%;
    height: 417px;
`

export const WorkCultureImage = styled.img`
    max-width: 556px;
    width: 100%;
    height: 417px;
`

export const WorkCultureTitle = styled.p`
    max-width: 556px;
    width: 100%;
    font-size: 20px;
    margin-bottom: 1.5rem;
    font-weight: bold;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }
`

export const WorkCultureContent = styled.h1`
    max-width: 556px;
    width: 100%;
    font-size: 2.625rem;
    margin-bottom: 2rem;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }
`

export const WorkCultureContentBr = styled.br``


export const WorkCultureLink = styled.a`
    max-width: 556px;
    width: 100%;
    height: 32px;
    display: flex;
    gap: 10px;
    align-items: center;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }

`

export const WorkCultureLinkSvg = styled.svg`
    max-width: 32px;
    width: 100%;
    height: 32px;
`

export const CarrotStoryBlog = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 171px;
`

export const CarrotStoryBlogSlideView = styled.div`
    max-width: 3892px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

`

export const CarrotStoryBlogSlideWrapper = styled.div`
    max-width: 3892px;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0%;
    top: 0%;
    justify-content: space-around;
    margin: 0;
    overflow: hidden;
    overflow-x: scroll;
    animation: autoPlay 10s linear infinite;
    flex-direction: row;

    @keyframes autoPlay {
        0% {
            left: 0%;
        }
        100% {
            left: -100%;
        }
    }

`

export const CarrotStoryBlogSlideViewLink = styled.a`
    max-width: 245px;
    width: 100%;
    height: 322px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    opacity: 0.99;

    &:hover {
        transform: translateY(-10px); 
    }
`

export const CarrotStoryBlogSlideViewImageWrraper = styled.div`
    max-width: 245px;
    width: 100%;
    height: 322px;
    position: relative;
    margin: 0;
    object-fit: scale-down;
    border-radius: 1.875rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px 0px;
    border-radius: 1.875rem;
` 

export const SlideViewImage = styled.img`
    position: relative;
    max-width: 245px;
    width: 100%;
    height: 322px;
    border-radius: 1.875rem;
`

export const SlideViewImageWrraperText = styled.div`
    max-width: 245px;
    width: 100%;
    height: 120px;
    top: 205px;
    z-index: 200;
    position: absolute;
    border-bottom-left-radius: 1.875rem;
    border-bottom-right-radius: 1.875rem;
`
export const SlideViewImageText = styled.p`
    max-width: 12.5rem;
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    z-index: 500;
    color: #fff;

`

export const CarrotStoryBlogTitle = styled.h1`
    font-size: 2.625rem;
    line-height: 3.5625rem;
    display: flex;
    justify-content: center;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }
`

export const CarrotStoryBlogLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
   

`

export const CarrotStoryBlogLinkIcon = styled.svg`
    max-width: 32px;
    width: 100%;
    height: 32px;
    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }
`
export const CarrotStoryBlogLinkText = styled.p`
    font-size: 20px;
    font-weight: bold;
    opacity: 0;
    &.visible {
        animation: ${fadeInUp} 0.8s ease forwards;
    }
`