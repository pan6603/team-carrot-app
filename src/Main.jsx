// import React, { useEffect, useRef, useState } from 'react';
import CarouselContent from './components/carousel/Carousel';
import carrotImage from './img/carrotstoryimage.png'
// import { useInView } from 'react-intersection-observer';
import {
    MainContainer,
    MainInnerTitle,
    MainInnerTitleText,
    MainInnerTitleTextBr,
    MainInnerContent,
    InnerTextCarrotUsers,
    InnerTextCarrotTeamImg,
    InnerCarrotTeamContent,
    WorkPhilosophy,
    HowCarrotsWork,
    UserValueFirst,
    UserDrivenText,
    JobPostingLink,
    BannerImage, 
    BannerContent, 
    BannerContentFlex, 
    BannerContentTitle, 
    BannerContentLink, 
    BannerContentLinkText, 
    BannerContentLinkSvg, 
    CarrotStoryImage, 
    CarrotStoryImageWrapper, 
    CarrotStoryImageWrapperImage,
    CarrotStory,
    WorkCulture,
    WorkCultureTitleLeft, 
    WorkCultureImageWrapper, 
    WorkCultureImage, 
    WorkCultureTitle, 
    WorkCultureContent, 
    WorkCultureLink, 
    WorkCultureLinkSvg, 
    WorkCultureContentBr, 
    WorkPhilosophyDiv, 
    CarrotStoryBlog, 
    CarrotStoryBlogSlideView, 
    CarrotStoryBlogTitle, 
    CarrotStoryBlogLink, 
    CarrotStoryBlogLinkIcon, 
    CarrotStoryBlogLinkText 
    } from './styles/main/Main.styles';


function Main() {
    // const ref = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => {
    //       if (entry.isIntersecting) {
    //         setIsVisible(true);
    //         observer.disconnect(); // 한 번만 보여주기
    //       }
    //     });
    
    //     if (ref.current) observer.observe(ref.current);
    //     return () => observer.disconnect();
    // }, []);
   
    return (
        <MainContainer>
            <MainInnerTitle>
                <MainInnerTitleText>
                이웃과 더 가까워지는
                <MainInnerTitleTextBr />
                따뜻한 동네를 만들어요
                </MainInnerTitleText>
            </MainInnerTitle>

            <MainInnerContent>
                <InnerTextCarrotUsers>
                    <InnerTextCarrotTeamImg src='https://about.daangn.com/static/effc58503119b61b80a68008f7f2c5f9/96bce/535e4041-7678-4723-9de3-b435bda64ad1_main_key_visual.avif'/>
                    <InnerCarrotTeamContent>
                        우리 동네 이웃 5명 중 3명은 당근으로 이웃과 함께하고 있습니다. 중고 직거래로 시작한 당근은 이웃과 이웃, 흩어져 있던 정보를 연결하며 세상에 없던 지역 기반 커뮤니티 서비스를 만들어 나가고 있어요.
                    </InnerCarrotTeamContent>
                </InnerTextCarrotUsers>

                <WorkPhilosophyDiv>
                    <WorkPhilosophy>
                        <HowCarrotsWork>당근이 일하는 방식</HowCarrotsWork>
                        <UserValueFirst>사용자 가치를 가장 중요하게 생각해요</UserValueFirst>
                        <UserDrivenText>
                            좋은 서비스에 대한 답은 항상 사용자에게 있어요. 오래 고민하는 대신 빠르게 실험하며 사용자를 위한 서비스를 만들어요.
                        </UserDrivenText>
                    </WorkPhilosophy>

                    <CarouselContent />
                </WorkPhilosophyDiv>
             

                <WorkCulture>
                    <WorkCultureTitleLeft>
                        <WorkCultureTitle>당근이 일하는 문화</WorkCultureTitle>
                        <WorkCultureContent>함께의 가치를 만드는 사람들은 <WorkCultureContentBr />어떤 문화에서 일할까요?</WorkCultureContent>
                        <WorkCultureLink>
                            자세히 보기 
                            <WorkCultureLinkSvg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 34 34">
                                    <circle
                                    cx="17"
                                    cy="17"
                                    r="15.5"
                                    stroke="currentColor"
                                    />
                                    
                                    <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M16.884 11.035a.8.8 0 0 1 1.132 0l5.4 5.4a.8.8 0 0 1 0 1.13l-5.4 5.4a.8.8 0 0 1-1.131-1.13l4.034-4.035H10.7a.8.8 0 0 1 0-1.6H20.92l-4.035-4.034a.8.8 0 0 1 0-1.131Z"
                                    clipRule="evenodd"
                                    />
                            </WorkCultureLinkSvg>

                         
                        </WorkCultureLink>
                    </WorkCultureTitleLeft>
                    <WorkCultureImageWrapper>
                        <WorkCultureImage src='https://about.daangn.com/static/f908ab4f62ab752775740da5815f4596/66698/0608bdb2-2324-44ba-825f-48dd0165a92c_main_culture.avif'/>
                    </WorkCultureImageWrapper>
                </WorkCulture>

                <CarrotStoryImage>
                    <CarrotStoryImageWrapper>
                        <CarrotStoryImageWrapperImage src={carrotImage} />
                    </CarrotStoryImageWrapper>
                </CarrotStoryImage>

                <CarrotStory>
                    <CarrotStoryBlog>
                        <CarrotStoryBlogTitle>당근 팀 이야기가 더 궁금하다면</CarrotStoryBlogTitle>
                        <CarrotStoryBlogLink>
                            <CarrotStoryBlogLinkText>블로그 글 보러가기</CarrotStoryBlogLinkText>
                            <CarrotStoryBlogLinkIcon 
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 34 34">

                                    <circle
                                        cx="17"
                                        cy="17"
                                        r="15.5"
                                        stroke="currentColor"
                                        />
                                        <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M16.884 11.035a.8.8 0 0 1 1.132 0l5.4 5.4a.8.8 0 0 1 0 1.13l-5.4 5.4a.8.8 0 0 1-1.131-1.13l4.034-4.035H10.7a.8.8 0 0 1 0-1.6H20.92l-4.035-4.034a.8.8 0 0 1 0-1.131Z"
                                        clipRule="evenodd"
                                        />

                            </CarrotStoryBlogLinkIcon>
                        </CarrotStoryBlogLink>
                    </CarrotStoryBlog>
                    <CarrotStoryBlogSlideView></CarrotStoryBlogSlideView>
                </CarrotStory>

                <JobPostingLink>
                    <BannerImage
                        src="https://about.daangn.com/static/820a2f87e787ba3ed97b1c153abf81f1/3069d/jobs_banner.avif"
                        alt="이미지_채용배너"
                        sizes="100vw"
                        decoding="async"
                        loading="lazy"
                    />
                    
                    <BannerContent> 
                        <BannerContentFlex>
                            <BannerContentTitle>당근과 함께 성장해보세요</BannerContentTitle>

                            <BannerContentLink href='https://about.daangn.com/jobs/'>
                                <BannerContentLinkText>채용공고 보러 가기</BannerContentLinkText>
                                
                                <BannerContentLinkSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34"aria-hidden="true">
                                    <circle cx="17" cy="17" r="15.5" stroke="currentColor" />
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.884 11.035a.8.8 0 0 1 1.132 0l5.4 5.4a.8.8 0 0 1 0 1.13l-5.4 5.4a.8.8 0 0 1-1.131-1.13l4.034-4.035H10.7a.8.8 0 0 1 0-1.6H20.92l-4.035-4.034a.8.8 0 0 1 0-1.131Z"
                                    />
                                </BannerContentLinkSvg>
                            </BannerContentLink>
                        </BannerContentFlex>
                    </BannerContent>
                </JobPostingLink>

            </MainInnerContent>
        </MainContainer>
    )
}

export default Main;