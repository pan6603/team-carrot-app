// components/Carousel.tsx
import React from "react";
import styled from 'styled-components';


const CarouselContainer = styled.section`
    position: relative;
    max-width: 1200px;
    width: 100%;
    height: 600px;
    margin: 6.25rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

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
    max-width: 1152px;
    width: 100%;
    height: 532px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
`

const SlideIndicator = styled.div`
    max-width: 1152px;
    width: 100%;
    height: 12px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
`	

const SlideIndicatorButton = styled.button`
    max-width: 12px;
    width: 100%;
    height: 12px;
    background: #fff;
    border-radius: 100%;
    border: 1px solid #212124;
    padding: 0;
    cursor: pointer;
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
