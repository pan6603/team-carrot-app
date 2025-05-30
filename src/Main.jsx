import CarouselContent from './components/carousel/Carousel';
import carrotImage from './img/carrotstoryimage.png'

import { MainContainer } from './styles/main/Main.styles';
import { MainInnerTitle } from './styles/main/Main.styles';
import { MainInnerTitleText } from './styles/main/Main.styles';
import { MainInnerTitleTextBr } from './styles/main/Main.styles';
import { MainInnerContent } from './styles/main/Main.styles';
import { InnerTextCarrotUsers } from './styles/main/Main.styles';
import { InnerTextCarrotTeamImg } from './styles/main/Main.styles';
import { InnerCarrotTeamContent } from './styles/main/Main.styles';
import { WorkPhilosophy } from './styles/main/Main.styles';
import { HowCarrotsWork } from './styles/main/Main.styles';
import { UserValueFirst } from './styles/main/Main.styles';
import { UserDrivenText } from './styles/main/Main.styles';
import { JobPostingLink } from './styles/main/Main.styles';
import { BannerImage } from './styles/main/Main.styles';
import { BannerContent } from './styles/main/Main.styles';
import { BannerContentFlex } from './styles/main/Main.styles';
import { BannerContentTitle } from './styles/main/Main.styles';
import { BannerContentLink } from './styles/main/Main.styles';
import { BannerContentLinkText } from './styles/main/Main.styles';
import { BannerContentLinkSvg } from './styles/main/Main.styles';
import { CarrotStoryImage } from './styles/main/Main.styles';
import { CarrotStoryImageWrapper } from './styles/main/Main.styles';
import { CarrotStoryImageWrapperImage } from './styles/main/Main.styles';
import { CarrotStory } from './styles/main/Main.styles';
import { WorkCulture } from './styles/main/Main.styles';

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

                <WorkCulture></WorkCulture>

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