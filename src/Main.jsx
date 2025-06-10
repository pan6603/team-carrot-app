// import React, { useEffect, useRef, useState } from 'react';
import CarouselContent from './components/carousel/Carousel';
import carrotImage from './img/carrotstoryimage.png'
import React, { useEffect, useState, useRef } from 'react';
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
    const teamRef = useRef(null);            
    const userValueRef = useRef(null);
    const carrotWayRef = useRef(null);
    const userDrivenRef = useRef(null);
    const workCultureTitleRef = useRef(null);
    const workCultureContentRef = useRef(null);
    const workCultureLinkRef = useRef(null);
    const carrotStoryBlogTitleRef = useRef(null);
    const carrotStoryBlogLinkTextRef = useRef(null);
    const bannerContentTitleRef = useRef(null);
    const bannerContentLinkRef = useRef(null);

    const [teamVisible, setTeamVisible] = useState(false);
    const [userValueVisible, setUserValueVisible] = useState(false);
    const [carrotWayVisble, setCarrotWayVisble] = useState(false);
    const [userDrivenVisble, setuserDrivenVisble] = useState(false);
    const [workCultureTitleVisble, setWorkCultureTitleVisble] = useState(false);
    const [workCultureContentVisble, setWorkCultureContentVisble] = useState(false);
    const [workCultureLinkVisble, setWorkCultureLinkVisble] = useState(false);
    const [carrotStoryBlogTitleVisble, setCarrotStoryBlogTitleVisble] = useState(false);
    const [carrotStoryBlogLinkTextVisble, setCarrotStoryBlogLinkTextVisble] = useState(false);
    const [bannerContentTitleVisble, setBannerContentTitleVisble] = useState(false);
    const [bannerContentLinkVisble, setBannerContentLinkVisble] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setTeamVisible(true);      
              observer.disconnect();   
          }
        },{
          threshold: 0,
        });

        if (teamRef.current) {
            observer.observe(teamRef.current);
        }

        const observer2 = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setUserValueVisible(true);      
              observer2.disconnect();   
          }
        },{
          threshold: 0,
        }); 

        if (userValueRef.current) {
            observer2.observe(userValueRef.current);
        }

        const observer3 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setCarrotWayVisble(true);
                observer3.disconnect();
            }
        },{
            threshold: 0,
        });

        if (carrotWayRef.current) {
            observer3.observe(carrotWayRef.current);
        }

     
        const observer4 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setuserDrivenVisble(true);
                observer4.disconnect();
            }
        },{
            threshold: 0,
        });

        if (userDrivenRef.current) {
            observer4.observe(userDrivenRef.current);
        }

        const observer5 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setWorkCultureTitleVisble(true);
                observer5.disconnect();
            }
        },{
            threshold: 0,
        });

        if (workCultureTitleRef.current) {
            observer5.observe(workCultureTitleRef.current);
        }

        const observer6 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setWorkCultureContentVisble(true);
                observer6.disconnect();
            }
        },{
            threshold: 0,
        });

        if (workCultureContentRef.current) {
            observer6.observe(workCultureContentRef.current);
        }
  

        const observer7 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setWorkCultureLinkVisble(true);
                observer7.disconnect();
            }
        },{
            threshold: 0,
        });

        if (workCultureLinkRef.current) {
            observer7.observe(workCultureLinkRef.current);
        }
      


        const observer8 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setCarrotStoryBlogTitleVisble(true);
                observer8.disconnect();
            }
        },{
            threshold: 0,
        });

        if (carrotStoryBlogTitleRef.current) {
            observer8.observe(carrotStoryBlogTitleRef.current);
        }

        const observer9 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setCarrotStoryBlogLinkTextVisble(true);
                observer9.disconnect();
            }
        },{
            threshold: 0,
        });

        if (carrotStoryBlogLinkTextRef.current) {
            observer9.observe(carrotStoryBlogLinkTextRef.current);
        }

        const observer10 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setBannerContentTitleVisble(true);
                observer10.disconnect();
            }
        },{
            threshold: 0,
        });

        if (bannerContentTitleRef.current) {
            observer10.observe(bannerContentTitleRef.current);
        }

        const observer11 = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setBannerContentLinkVisble(true);
                observer11.disconnect();
            }
        },{
            threshold: 0,
        });

        if (bannerContentLinkRef.current) {
            observer11.observe(bannerContentLinkRef.current);
        }
        
      return () => {
        observer.disconnect();
        observer2.disconnect();
        observer3.disconnect();
        observer4.disconnect();
        observer5.disconnect();
        observer6.disconnect();
        observer7.disconnect();
        observer8.disconnect();
        observer9.disconnect();
        observer10.disconnect();
        observer11.disconnect();
      }
    });
       
   
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
                    <InnerCarrotTeamContent ref={teamRef} className={teamVisible ? 'visible' : ''}>
                        우리 동네 이웃 5명 중 3명은 당근으로 이웃과 함께하고 있습니다. 중고 직거래로 시작한 당근은 이웃과 이웃, 흩어져 있던 정보를 연결하며 세상에 없던 지역 기반 커뮤니티 서비스를 만들어 나가고 있어요.
                    </InnerCarrotTeamContent>
                </InnerTextCarrotUsers>

                <WorkPhilosophyDiv>
                    <WorkPhilosophy>
                        <HowCarrotsWork ref={carrotWayRef} className={carrotWayVisble ? 'visible' : ''}>
                            당근이 일하는 방식
                        </HowCarrotsWork>
                        <UserValueFirst ref={userValueRef} className={userValueVisible ? 'visible' : ''}>
                                사용자 가치를 가장 중요하게 생각해요
                        </UserValueFirst>
                        <UserDrivenText ref={userDrivenRef} className={userDrivenVisble ? 'visible' : ''}>
                            좋은 서비스에 대한 답은 항상 사용자에게 있어요. 오래 고민하는 대신 빠르게 실험하며 사용자를 위한 서비스를 만들어요.
                        </UserDrivenText>
                    </WorkPhilosophy>

                    <CarouselContent />
                </WorkPhilosophyDiv>
             

                <WorkCulture>
                    <WorkCultureTitleLeft>
                        <WorkCultureTitle ref={workCultureTitleRef} className={workCultureTitleVisble ? 'visible' : ''}>
                            당근이 일하는 문화
                        </WorkCultureTitle>
                        <WorkCultureContent ref={workCultureContentRef} className={workCultureContentVisble ? 'visible' : ''}>
                            함께의 가치를 만드는 사람들은 <WorkCultureContentBr />어떤 문화에서 일할까요?
                        </WorkCultureContent>
                        <WorkCultureLink ref={workCultureLinkRef} className={workCultureLinkVisble ? 'visible' : ''}>
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
                    
                        <CarrotStoryBlogTitle 
                            ref={carrotStoryBlogTitleRef}
                            className={carrotStoryBlogTitleVisble ? 'visible' : ''}>
                            당근 팀 이야기가 더 궁금하다면
                        </CarrotStoryBlogTitle>

                        <CarrotStoryBlogLink>
                            <CarrotStoryBlogLinkText 
                                ref={carrotStoryBlogLinkTextRef}
                                className={carrotStoryBlogLinkTextVisble ? 'visible' : ''}
                                >
                                블로그 글 보러가기
                            </CarrotStoryBlogLinkText>
                            <CarrotStoryBlogLinkIcon 
                                ref={carrotStoryBlogLinkTextRef}
                                className={carrotStoryBlogLinkTextVisble ? 'visible' : ''}
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
                            <BannerContentTitle      
                                ref={bannerContentTitleRef}
                                className={bannerContentTitleVisble ? 'visible' : ''}>
                                당근과 함께 성장해보세요
                            </BannerContentTitle>

                            <BannerContentLink href='https://about.daangn.com/jobs/'
                                ref={bannerContentLinkRef}
                                className={bannerContentLinkVisble ? 'visible' : ''}
                            >
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