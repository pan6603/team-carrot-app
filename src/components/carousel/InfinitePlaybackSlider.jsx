import { 
    CarrotStoryBlogSlideView,
    CarrotStoryBlogSlideWrapper,
    CarrotStoryBlogSlideViewLink,
    CarrotStoryBlogSlideViewImageWrraper,
    SlideViewImageWrraperText,
    SlideViewImage,
    SlideViewImageText
 } from "../../styles/main/Main.styles";


function InfinitePlaybackSlider () {
    return (
        <CarrotStoryBlogSlideView>
            <CarrotStoryBlogSlideWrapper>
                <CarrotStoryBlogSlideViewLink>
                    <CarrotStoryBlogSlideViewImageWrraper>
                        <SlideViewImage src='https://about.daangn.com/static/b22edcf482a7634091110c3fc2956fd5/72995/Z5IATpbqstJ99xXX_thumb2.avif' />
                        <SlideViewImageWrraperText>
                            <SlideViewImageText>
                                어느 신입 프로덕트 디자이너의 좌충우돌 성장기
                            </SlideViewImageText>
                        </SlideViewImageWrraperText>
                    </CarrotStoryBlogSlideViewImageWrraper>
                </CarrotStoryBlogSlideViewLink>
                <CarrotStoryBlogSlideViewLink>
                    <CarrotStoryBlogSlideViewImageWrraper></CarrotStoryBlogSlideViewImageWrraper>
                </CarrotStoryBlogSlideViewLink>
                <CarrotStoryBlogSlideViewLink>
                    <CarrotStoryBlogSlideViewImageWrraper></CarrotStoryBlogSlideViewImageWrraper>
                </CarrotStoryBlogSlideViewLink>
                <CarrotStoryBlogSlideViewLink>
                    <CarrotStoryBlogSlideViewImageWrraper></CarrotStoryBlogSlideViewImageWrraper>
                </CarrotStoryBlogSlideViewLink>
                <CarrotStoryBlogSlideViewLink>
                    <CarrotStoryBlogSlideViewImageWrraper></CarrotStoryBlogSlideViewImageWrraper>
                </CarrotStoryBlogSlideViewLink>
                
            </CarrotStoryBlogSlideWrapper>
        </CarrotStoryBlogSlideView> 
    )
}

export default InfinitePlaybackSlider;