import styled from 'styled-components';

const MainContainer = styled.main`
    max-width: 1440px;
    width: 100%;
    height: 4281px;
    margin-top: 6.25rem;
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
    margin-bottom: 5.5rem;
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

const CarouselContainer = styled.section`
    position: relative;
    max-width: 1200px;
    width: 100%;
    height: 600px;
    background-color: blue;
    margin: 6.25rem auto;
`

const CarouselLeftbutton = styled.button`
    position: absolute;
    max-width: 24px;
    width: 100%;
    height: 24px;
    background: none;
    right: calc(100% + 1rem);
    top: 12.5rem;
    transform: scaleX(-1);
    color: #212124;
    border: none;
    border-radius: 999px;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
`

const CarouselLeftbuttonSpan = styled.span`
    max-width: 24px;
    width: 100%;
    height: 24px;
    cursor: pointer;
    color: #212124;
    display: inline-flex;
`

const CarouselLeftbuttonSpanSvg = styled.svg`
    max-width: 24px;
    width: 100%;
    height: 24px;
    fill: none;
`


const CarouselRightbutton = styled.button`
    position: absolute;
    max-width: 24px;
    width: 100%;
    height: 24px;
    left: calc(100% + 1rem);
    top: 12.5rem;
    color: #212124;
    border: none;
    border-radius: 999px;
    background: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
`

const CarouselRightbuttonSpan = styled.span`
    max-width: 24px;
    width: 100%;
    height: 24px;
    cursor: pointer;
    color: #212124;
    display: inline-flex;
`

const CarouselRightbuttonSpanSvg = styled.svg`
    max-width: 24px;
    width: 100%;
    height: 24px;
    fill: none;
`


const CarouselWrapper = styled.div`
    max-width: 1128px;
    width: 100%;
    height: 532px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: yellow;
`

const CarouselContentLink = styled.a`
    max-width: 544px;
    width: 100%;
    height: 512px;
`

const CarouselContentTop = styled.figure`
    border-top-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
    max-width: 544px;
    width: 100%;
    height: 304px;
    background-color: red; 
    margin: 0 auto;
`

const CarouselContentBottom = styled.figure`
    border-bottom-right-radius: 1.875rem;
    border-bottom-left-radius: 1.875rem;
    max-width: 544px;
    width: 100%;
    height: 206px;
    background-color: green; 
    margin: 0 auto;
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

                <CarouselContainer>
                    <CarouselLeftbutton>
                        <CarouselLeftbuttonSpan>
                            <CarouselLeftbuttonSpanSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.42511 3.22988L16.6551 11.4499C16.9551 11.7499 16.9551 12.2399 16.6551 12.5399L8.42511 20.7699C8.12511 21.0699 7.63511 21.0699 7.33511 20.7699C7.03511 20.4699 7.03511 19.9799 7.33511 19.6799L15.0151 11.9999L7.33511 4.31988C7.03511 4.01988 7.03511 3.52988 7.33511 3.22988C7.63511 2.92988 8.12511 2.92988 8.42511 3.22988Z"
                                    fill="currentColor"
                                    />
                                </g>
                            </CarouselLeftbuttonSpanSvg>
                        </CarouselLeftbuttonSpan>
                    </CarouselLeftbutton>
                    <CarouselWrapper>
                        <CarouselContentLink>
                            <CarouselContentTop></CarouselContentTop>
                            <CarouselContentBottom></CarouselContentBottom>
                        </CarouselContentLink>
                        <CarouselContentLink>
                            <CarouselContentTop></CarouselContentTop>
                            <CarouselContentBottom></CarouselContentBottom>
                        </CarouselContentLink>
                        {/* <CarouselContentLink>
                            <CarouselContentTop></CarouselContentTop>
                            <CarouselContentBottom></CarouselContentBottom>
                        </CarouselContentLink>
                        <CarouselContentLink>
                            <CarouselContentTop></CarouselContentTop>
                            <CarouselContentBottom></CarouselContentBottom>
                        </CarouselContentLink> */}
                    </CarouselWrapper>
                    <CarouselRightbutton>
                        <CarouselRightbuttonSpan>
                            <CarouselRightbuttonSpanSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <g>
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.42511 3.22988L16.6551 11.4499C16.9551 11.7499 16.9551 12.2399 16.6551 12.5399L8.42511 20.7699C8.12511 21.0699 7.63511 21.0699 7.33511 20.7699C7.03511 20.4699 7.03511 19.9799 7.33511 19.6799L15.0151 11.9999L7.33511 4.31988C7.03511 4.01988 7.03511 3.52988 7.33511 3.22988C7.63511 2.92988 8.12511 2.92988 8.42511 3.22988Z"
                                fill="currentColor"
                                />
                            </g>
                            </CarouselRightbuttonSpanSvg>
                        </CarouselRightbuttonSpan>
                    </CarouselRightbutton>
                </CarouselContainer>

            </MainInnerContent>
        </MainContainer>
    )
}

export default Main;