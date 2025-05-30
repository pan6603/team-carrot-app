import styled from 'styled-components';


export const CarouselContainer = styled.section`
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

export const CarouselLeftbutton = styled.button`
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

export const SlideIndicator = styled.div`
    max-width: 1152px;
    width: 100%;
    height: 12px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
`	

export const SlideIndicatorButton = styled.button`
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
    border-bottom-right-radius: 1.875rem;
    border-bottom-left-radius: 1.875rem;
    max-width: 544px;
    width: 100%;
    height: 206px;
    background-color: green; 
    margin: 0 auto;
` 

