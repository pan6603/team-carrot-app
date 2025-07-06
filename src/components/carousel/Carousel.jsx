// components/Carousel.tsx
import React, { useState } from "react";
import { 
    CarouselSlider,
    CarouselItem,
    CarouselContentLink,
    CarouselContentTop,
    CarouselContentTopImg,
    CarouselContentBottom,
    CarouselContentBottomTitle,
    CarouselContentBottomDescription,
    CarouselRightbutton,
    CarouselRightbuttonSpan,
    CarouselRightbuttonSpanSvg,
    CarouselLeftbutton,
    CarouselLeftbuttonSpan,
    CarouselLeftbuttonSpanSvg
} from "../../styles/carousel/Carousel.styles";



const slides = [
    {
        id: 1,
        image: "https://about.daangn.com/static/cacd9f0642c255d67f622e67b3346bc0/3c1cf/ffd08d03-9f52-4b22-857f-8905ab90183a_vthumb_1.avif",
        title: "전단지를 대체할 당근 광고의 등장",
        description: "당근 광고실을 소개합니다!",
    },
    {
        id: 2,
        image: "https://about.daangn.com/static/9f2d7c3446a63259c4aca04218079ae8/a9bae/3b8d5b45-c81f-4007-b3ed-7c410ba7b91d_img_1160_650.avif",
        title: "혹시...? 네, '당근'입니다!",
        description: "당근마켓에서 당근으로, 리브랜딩에 대한 모든 것",
    },
    {
        id: 3,
        image: "https://about.daangn.com/static/a9a6d19d3feed753f3f60dc7fb0d831f/2a619/0405df96-6410-4c95-873e-7e47f10d08e7_thumb_job-OKR.avif",
        title: "당근알바 성장 비결을 공개합니다",
        description: "OKR, 어떻게 느껴진 적 있다면",
    },
    {
        id: 4,
        image: "https://about.daangn.com/static/b399fd4d25f453811f45c3d54d277afa/1040b/03f654dc-e7d0-4f84-bdfa-8aea66c5aade_thumb-daagni.avif",
        title: "당근이의 시루떡 배달기",
        description: "똑똑, 계세요? 떡 가지러 왔어요!",
    },
    {
        id: 5,
        image: "https://about.daangn.com/static/d597e650acee1e464e8203869b660a21/f6455/a1421505-fb62-428f-9b84-3fc5f30d8fb2_blogthumb_1%E1%84%8C%E1%85%AE1%E1%84%80%E1%85%A2%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A5%E1%86%B7%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%83%E1%85%A5%E1%86%A8%E1%84%90%E1%85%B3%E1%84%90%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B5%E1%84%83%E1%85%AC%E1%84%82%E1%85%B3%E1%86%AB%E1%84%8B%E1%85%A7%E1%84%8C%E1%85%A5%E1%86%BC.avif",
        title: "1주 1개 실험하는 프로덕트 팀이 되는 여정",
        description: "당근마켓의 실험 문화를 이끄는 데이터가치화팀",
    },
    {
        id: 6,
        image: "https://about.daangn.com/static/03c1ba44dbf337d0bed06d0e48910bf4/f6455/0b9c548a-be61-4e0c-aedd-879059b79f80_thumb_fleamarket-coworking.avif",
        title: "당근 개발자, 디자이너, PM 이렇게 협업합니다",
        description: "‘그렇게 오래 걸려요?’라는 질문에 답하는 법",
    },
];

// react-slick 설정



function NextArrow(props) {
    const { onClick, isVisible } = props;
    console.log("NextArrow:", isVisible)
    return (
        isVisible && (
            <CarouselRightbutton onClick={onClick}>
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
        )  
    );
}
  
  // PrevArrow 컴포넌트
function PrevArrow(props) {
    const { onClick, isVisible } = props;
    console.log("PrevArrow:", isVisible)
    return (
        isVisible && (
            <CarouselLeftbutton onClick={onClick}>
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
        )
    );
}


function CarouselContent () {

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <NextArrow isVisible={currentSlide === 0 || currentSlide === 2} />,
        prevArrow: <PrevArrow isVisible={currentSlide === 2 || currentSlide === 4}/>,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };
    
  
    return (
       
        <CarouselSlider {...settings}> 
            {slides.map((slide) => (
            <CarouselItem key={slide.id}>
                <CarouselContentLink>
                    <CarouselContentTop>
                        <CarouselContentTopImg src={slide.image} alt={slide.title} />
                    </CarouselContentTop>
                    <CarouselContentBottom>
                        <CarouselContentBottomTitle>{slide.title}</CarouselContentBottomTitle>
                        <CarouselContentBottomDescription>{slide.description}</CarouselContentBottomDescription>
                    </CarouselContentBottom>
                </CarouselContentLink>
            </CarouselItem>
            ))}
        </CarouselSlider>

    );   
};

export default CarouselContent;
