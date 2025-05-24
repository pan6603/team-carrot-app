import styled from 'styled-components';
import CarouselContent from './components/CarouselContent';
import carrotImage from './img/carrotstoryimage.png'

const MainContainer = styled.main`
    max-width: 1440px;
    width: 100%;
    height: 4281px;
    padding-top: 120px;
`

const MainInnerTitle = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 146px;
    margin: 0 auto;
    margin-bottom: 5.5rem;
`

const MainInnerTitleText = styled.h1`
    margin-bottom: 5.5rem;
    line-height: 4.5625rem;
    font-size: 3.375rem;
    font-weight: bold;
`

const MainInnerTitleTextBr = styled.br`

`

const MainInnerContent = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 4047px;
    margin: 0 auto;
    background-color: skyblue;
`

const InnerTextCarrotUsers = styled.section`
    max-width: 1200px;
    width: 100%;
    height: 813px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 6.5rem;
`

const InnerTextCarrotTeamImg = styled.img`
    max-width: 1152px;
    width: 100%;
    height: 648px;
    border-radius: 1.875rem;
    margin: 0 auto;
`

const InnerCarrotTeamContent = styled.p`
    max-width: 720px;
    width: 100%;
    height: 117px;
    font-size: 1.625rem;
    font-weight: bold;
    padding-left: 0rem;
    padding-right: 0rem;
    margin-left: 27px;
`

const WorkPhilosophy = styled.section`
    max-width: 664px;
    width: 100%;
    height: 196px;
    margin-bottom: -3.75rem;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    display: flex;
    gap: 1.5rem 0;
    flex-direction: column;
    align-items: center;
`

const HowCarrotsWork = styled.span`
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1.9375rem;
    font-weight: bold;
`

const UserValueFirst = styled.h2`
    max-width: 43.75rem;
    width: 100%;
    font-size: 2.625rem;
    line-height: 3.5625rem;
    margin: 0px;
    font-weight: bold;
    text-align: center;
`

const UserDrivenText = styled.p`
    max-width: 31.25rem;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 1.875rem;
    font-size: 1.125rem;
    color: #5C5F69;
`

const JobPostingLink = styled.section`
    position: relative;
    max-width: 1440px;
    width: 100%;
    height: 260px;
    background-color: lightgray;
    margin-bottom: -10rem;
`

const BannerImage = styled.img`
    width: 100%;
    opacity: 1;
    position: absolute;
`;

const BannerContent = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 260px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

`

const BannerContentFlex = styled.div`
    max-width: 417px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BannerContentTitle = styled.h3`
    font-size: 2.625rem;
    margin-bottom: 0.75rem;
`
const BannerContentLink = styled.a`
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

`

const BannerContentLinkText = styled.p`

`

const BannerContentLinkSvg = styled.svg`
    max-width: 34px;
    width: 100%;
    height: 34px;
    color: currentColor;
    display: inline-block;
`;

const CarrotStoryImage = styled.section`
    max-width: 1440px;
    width: 100%;
    height: 450px;
`

const CarrotStoryImageWrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    height: 450px;
`

const CarrotStoryImageWrapperImage = styled.img`
    max-width: 1440px;
    width: 100%;
    height: auto;
`


const CarrotStory = styled.section`
    max-width: 1440px;
    width: 100%;
    height: 571px;
    background-color: blue;
`


function Main() {
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

                <WorkPhilosophy>
                    <HowCarrotsWork>당근이 일하는 방식</HowCarrotsWork>
                    <UserValueFirst>사용자 가치를 가장 중요하게 생각해요</UserValueFirst>
                    <UserDrivenText>
                        좋은 서비스에 대한 답은 항상 사용자에게 있어요. 오래 고민하는 대신 빠르게 실험하며 사용자를 위한 서비스를 만들어요.
                    </UserDrivenText>
                </WorkPhilosophy>

                <CarouselContent />

                <CarrotStoryImage>
                    <CarrotStoryImageWrapper>
                        <CarrotStoryImageWrapperImage src={carrotImage} />
                    </CarrotStoryImageWrapper>
                </CarrotStoryImage>

                <CarrotStory></CarrotStory>

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