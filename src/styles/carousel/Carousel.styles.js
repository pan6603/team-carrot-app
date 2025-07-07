import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const CarouselSlider = styled(Slider)`
    .slick-list {
        position: relative;
        margin: 115px auto;
        max-width: 1173px;
        width: 100%;
        height: 600px;
    }

    .slick-track {
        display: flex !important;
        gap: 2.5rem;
    }
       
    .slick-slide {
        width: 544px !important;
        height: 512px;
        border-radius: 1.875rem;
        overflow: hidden;   
        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px; 
        cursor: pointer;
    }

`    

export const StyledDotsContainer = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 10px;

    li {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ccc;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border: 1px solid #212124;
        background: #fff;

        &.slick-active {
            background-color: #212124; // 활성 dot 색상
        }
    }
`;


export const CarouselLeftbutton = styled.button`
    position: absolute;
    max-width: 24px;
    width: 100%;
    height: 24px;
    background: none;
    left: 85px;
    top: 12.5rem;
    transform: scaleX(-1);
    color: #212124;
    border: none;
    border-radius: 999px;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    overflow: hidden;
    z-index: 100;
`

export const CarouselLeftbuttonSpan = styled.span`
    max-width: 24px;
    width: 100%;
    height: 24px;
    cursor: pointer;
    color: #212124;
    display: inline-flex;
`

export const CarouselLeftbuttonSpanSvg = styled.svg`
    max-width: 24px;
    width: 100%;
    height: 24px;
`


export const CarouselRightbutton = styled.button`
    position: absolute;
    right: 85px;
    top: 12.5rem;
    max-width: 24px;
    width: 100%;
    height: 24px;
    color: #212124;
    border: none;
    border-radius: 999px;
    background: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    z-index: 100;
`

export const CarouselRightbuttonSpan = styled.span`
    max-width: 24px;
    width: 100%;
    height: 24px;
    cursor: pointer;
    color: #212124;
    display: inline-flex;
`

export const CarouselRightbuttonSpanSvg = styled.svg`
    max-width: 24px;
    width: 100%;
    height: 24px;
    fill: none;
`

export const CarouselItem = styled.div`
    box-sizing: border-box;
`

export const CarouselWrapper = styled.div`
    
`

export const SliderDotsContainer = styled.div`
    max-width: 1152px;
    width: 100%;
    height: 12px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    background-color: red;
`	

export const Dot = styled.button`
    max-width: 12px;
    width: 100%;
    height: 12px;
    background: #fff;
    border-radius: 100%;
    border: 1px solid #212124;
    padding: 0;
    cursor: pointer;
`


export const CarouselContentLink = styled.a`
    max-width: 544px;
    width: 100%;
    height: 512px;
`

export const CarouselContentTop = styled.figure`
    border-top-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
    max-width: 544px;
    width: 100%;
    height: 304px;
    background-color: red; 
    margin: 0 auto;
`

export const CarouselContentBottom = styled.figure`
    border-radius: 0 0 1.875rem 1.875rem;
    max-width: 544px;
    width: 100%;
    height: 206px;
    margin: 0 auto;
    background-color: #fff;
    padding: 2.75rem 2.5rem;
    box-sizing: border-box;
` 

export const CarouselContentBottomTitle = styled.h3`
    margin: 0;
    max-width: 300px;
    width: 100%;
    height: 78px;
    font-size: 1.625rem;
    line-height: 2.4375rem;
    font-weight: bold;
    color: #212124;
    
`

export const CarouselContentBottomDescription = styled.p`
    margin-top: 0.75rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #868b94;
`

export const CarouselContentTopImg = styled.img`
    max-width: 544px;
    width: 100%;
    height: 304px;
    border-top-left-radius: 1.875rem;
    border-top-right-radius: 1.875rem;
`

