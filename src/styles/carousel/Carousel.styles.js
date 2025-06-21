import styled from 'styled-components';


export const CarouselContainer = styled.section`
    position: relative;
    max-width: 1200px;
    width: 100%;
    height: 600px;
    margin: 6.25rem auto;
    background-color: blue;
`

export const CarouselLeftbutton = styled.button`
    position: absolute;
    max-width: 24px;
    width: 100%;
    height: 24px;
    background: none;
    right: 1210px;
    top: 12.5rem;
    transform: scaleX(-1);
    color: #212124;
    border: none;
    border-radius: 999px;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    overflow: hidden;
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
    fill: none;
`


export const CarouselRightbutton = styled.button`
    position: absolute;
    max-width: 24px;
    width: 100%;
    height: 24px;
    left: 1210px;
    top: 12.5rem;
    color: #212124;
    border: none;
    border-radius: 999px;
    background: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
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

export const CarouselWrapper = styled.div`
    max-width: 1152px;
    width: 100%;
    height: 532px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const SliderDots = styled.div`
    max-width: 1152px;
    width: 100%;
    height: 12px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
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

export const CarouselItem = styled.div`
    max-width: 544px;
    width: 100%;
    height: 512px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    transition: box-shadow 0.3s ease;
    border-radius: 1.875rem;
    box-sizing: border-box;
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

