// components/Carousel.tsx
import { CarouselContainer } from "../../styles/carousel/Carousel.styles";
import { CarouselContentBottom } from "../../styles/carousel/Carousel.styles";
import { CarouselContentLink } from "../../styles/carousel/Carousel.styles";
import { CarouselContentTop } from "../../styles/carousel/Carousel.styles";
import { CarouselLeftbutton } from "../../styles/carousel/Carousel.styles";
import { CarouselLeftbuttonSpan } from "../../styles/carousel/Carousel.styles";
import { CarouselLeftbuttonSpanSvg } from "../../styles/carousel/Carousel.styles";
import { CarouselRightbutton } from "../../styles/carousel/Carousel.styles";
import { CarouselRightbuttonSpan } from "../../styles/carousel/Carousel.styles";
import { CarouselRightbuttonSpanSvg } from "../../styles/carousel/Carousel.styles";
import { CarouselWrapper } from "../../styles/carousel/Carousel.styles";
import { SlideIndicator } from "../../styles/carousel/Carousel.styles";
import { SlideIndicatorButton } from "../../styles/carousel/Carousel.styles";

function CarouselContent () {

  return (
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
                <CarouselContentLink>
                    <CarouselContentTop></CarouselContentTop>
                    <CarouselContentBottom></CarouselContentBottom>
                </CarouselContentLink>
                <CarouselContentLink>
                    <CarouselContentTop></CarouselContentTop>
                    <CarouselContentBottom></CarouselContentBottom>
                </CarouselContentLink>
                <CarouselContentLink>
                    <CarouselContentTop></CarouselContentTop>
                    <CarouselContentBottom></CarouselContentBottom>
                </CarouselContentLink>
                <CarouselContentLink>
                    <CarouselContentTop></CarouselContentTop>
                    <CarouselContentBottom></CarouselContentBottom>
                </CarouselContentLink>
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

            <SlideIndicator>
                <SlideIndicatorButton />
                <SlideIndicatorButton />
                <SlideIndicatorButton />
            </SlideIndicator>

        </CarouselContainer>
    );
};

export default CarouselContent;
