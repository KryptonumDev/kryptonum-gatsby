import React from "react"
import styled from "styled-components"



export default function Navigation({ step, setStep }) {
  return (
    <Wrapper width={100 * ((step + 1) / 7)}>
      <div className="line" />
      <Step display={step == '0' ? 'flex' : null} next={step == '0' ? 'flex' : null} >
        <First />
        <div>
          <span>Witaj na stacji!</span>
          <span className="step">Krok 1 z 7</span>
        </div>
      </Step>
      <Step  display={step == '0' ? 'flex' : null} next={step == '1' ? 'flex' : null} >
        <Second />
        <div>
          <span>Poznajmy się!</span>
          <span className="step">Krok 2 z 7</span>
        </div>
      </Step>
      <Step  display={step == '1' ? 'flex' : null} next={step == '2' ? 'flex' : null} >
        <Third />
        <div>
          <span>Twoja marka</span>
          <span className="step">Krok 3 z 7</span>
        </div>
      </Step>
      <Step display={step == '2' ? 'flex' : null} next={step == '3' ? 'flex' : null} >
        <Fourth />
        <div>
          <span>Potrzeba</span>
          <span className="step">Krok 4 z 7</span>
        </div>
      </Step>
      <Step display={step == '3' ? 'flex' : null} next={step == '4' ? 'flex' : null} >
        <Fifth />
        <div>
          <span>Czas i budżet</span>
          <span className="step">Krok 5 z 7</span>
        </div>
      </Step>
      <Step display={step == '4' ? 'flex' : null} next={step == '5' ? 'flex' : null} >
        <Sixth />
        <div>
          <span>Informacje</span>
          <span className="step">Krok 6 z 7</span>
        </div>
      </Step>
      <Step display={step == '5' ? 'flex' : null} next={step == '6' ? 'flex' : null} >
        <Seventh />
        <div>
          <span>Umów wizytę</span>
          <span className="step">Krok 7 z 7</span>
        </div>
      </Step>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
  }

  @media (max-width: 680px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .line{
    position: absolute;
    z-index: -1;
    left: 60px;
    right: 60px;
    top: 30px;
    background: var(--neutral-800);
    height: 4px;

    @media (max-width: 920px){
      width: 4px;
      left: 30px; 
      top: 0; 
      bottom: 0;
      height: 100%;
    }

    @media (max-width: 680px) {
      display: none;
    }

    &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      transition: all .3s var(--easing);
      background: var(--gradient);
      width: ${props => props.width}%;

      @media (max-width: 920px){
        height: ${props => props.width}%;
        width: 100%;
      }
    }
  }
`

const Step = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 1;

  @media (max-width: 920px){
    flex-direction: row;
  }

  @media (max-width: 680px) {
    display: ${props => props.display || props.next ? 'flex' : 'none'}; 

    ${props => props.display === 'flex' ? `
      flex-direction: row-reverse;
      text-align: right;
      color: var(--neutral-700);
      svg{
        display: none;
      }
    `: null}
  }

  span{
    font-size: clamp(1rem, calc(16vw/10.24), 1.25rem);
  }

  .step{
    display: none;

    @media (max-width: 680px) {
      display: block;
    }
  }
`

const First = () => (
  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.724609" width="64" height="64" rx="32" fill="#0F0F10" />
    <path d="M23.0084 25.4396C24.5579 26.9891 27.07 26.9891 28.6195 25.4396C30.1689 23.8902 30.1689 21.378 28.6195 19.8286M46.0592 31.9998C46.0592 39.3636 40.0897 45.3332 32.7259 45.3332C25.3621 45.3332 19.3926 39.3636 19.3926 31.9998C19.3926 24.636 25.3621 18.6665 32.7259 18.6665C40.0897 18.6665 46.0592 24.636 46.0592 31.9998ZM35.2167 35.9998C35.2167 38.209 33.4259 39.9998 31.2167 39.9998C29.0076 39.9998 27.2167 38.209 27.2167 35.9998C27.2167 33.7907 29.0076 31.9998 31.2167 31.9998C33.4259 31.9998 35.2167 33.7907 35.2167 35.9998ZM41.8834 28.2453C41.8834 29.718 40.6895 30.9119 39.2167 30.9119C37.744 30.9119 36.55 29.718 36.55 28.2453C36.55 26.7725 37.744 25.5786 39.2167 25.5786C40.6895 25.5786 41.8834 26.7725 41.8834 28.2453Z" stroke="url(#paint0_linear_4460_71864)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_4460_71864" x1="45.5592" y1="18.6665" x2="17.8067" y2="20.4342" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2DD282" />
        <stop offset="1" stop-color="#90F4E8" />
      </linearGradient>
    </defs>
  </svg>
)

const Second = () => (
  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.724609" width="64" height="64" rx="32" fill="#0F0F10" />
    <g clip-path="url(#clip0_4501_54316)">
      <path d="M40.724 26.6668H42.0573C43.4718 26.6668 44.8283 27.2287 45.8285 28.2289C46.8287 29.2291 47.3906 30.5857 47.3906 32.0002C47.3906 33.4146 46.8287 34.7712 45.8285 35.7714C44.8283 36.7716 43.4718 37.3335 42.0573 37.3335H40.724M40.724 26.6668H19.3906V38.6668C19.3906 40.0813 19.9525 41.4379 20.9527 42.4381C21.9529 43.4383 23.3095 44.0002 24.724 44.0002H35.3906C36.8051 44.0002 38.1617 43.4383 39.1619 42.4381C40.1621 41.4379 40.724 40.0813 40.724 38.6668V26.6668ZM35.3906 17.3335V21.3335M30.0573 17.3335V21.3335M24.724 17.3335V21.3335" stroke="url(#paint0_linear_4501_54316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_4501_54316" x1="46.8656" y1="17.3335" x2="17.7375" y2="19.2816" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2DD282" />
        <stop offset="1" stop-color="#90F4E8" />
      </linearGradient>
      <clipPath id="clip0_4501_54316">
        <rect width="32" height="32" fill="white" transform="translate(16.7246 16)" />
      </clipPath>
    </defs>
  </svg>
)

const Third = () => (
  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.724609" width="64" height="64" rx="32" fill="#0F0F10" />
    <path d="M32.724 45.3332C40.0878 45.3332 46.0573 39.3636 46.0573 31.9998C46.0573 24.636 40.0878 18.6665 32.724 18.6665C25.3602 18.6665 19.3906 24.636 19.3906 31.9998C19.3906 39.3636 25.3602 45.3332 32.724 45.3332Z" stroke="url(#paint0_linear_4501_54324)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M38.3773 26.3465L35.5506 34.8265L27.0706 37.6532L29.8973 29.1732L38.3773 26.3465Z" stroke="url(#paint1_linear_4501_54324)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_4501_54324" x1="45.5573" y1="18.6665" x2="17.8047" y2="20.4342" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2DD282" />
        <stop offset="1" stop-color="#90F4E8" />
      </linearGradient>
      <linearGradient id="paint1_linear_4501_54324" x1="45.5573" y1="18.6665" x2="17.8047" y2="20.4342" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2DD282" />
        <stop offset="1" stop-color="#90F4E8" />
      </linearGradient>
    </defs>
  </svg>
)

const Fourth = () => (
  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.724609" width="64" height="64" rx="32" fill="#0F0F10" />
    <path d="M44.725 18.6665L42.0583 21.3332M42.0583 21.3332L46.0583 25.3332L41.3916 29.9998L37.3916 25.9998M42.0583 21.3332L37.3916 25.9998M31.9116 31.4798C32.6001 32.1591 33.1474 32.9679 33.522 33.8596C33.8966 34.7512 34.0911 35.7082 34.0943 36.6753C34.0976 37.6425 33.9095 38.6007 33.5409 39.4949C33.1722 40.3891 32.6304 41.2015 31.9465 41.8854C31.2626 42.5693 30.4502 43.1111 29.556 43.4797C28.6619 43.8483 27.7036 44.0364 26.7365 44.0332C25.7693 44.03 24.8124 43.8354 23.9207 43.4608C23.029 43.0862 22.2203 42.539 21.541 41.8505C20.2051 40.4674 19.466 38.615 19.4827 36.6922C19.4994 34.7695 20.2706 32.9302 21.6303 31.5705C22.99 30.2108 24.8293 29.4396 26.752 29.4229C28.6748 29.4062 30.5272 30.1453 31.9103 31.4812L31.9116 31.4798ZM31.9116 31.4798L37.3916 25.9998" stroke="url(#paint0_linear_4501_54332)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_4501_54332" x1="45.56" y1="18.6665" x2="17.9128" y2="20.5114" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2DD282" />
        <stop offset="1" stop-color="#90F4E8" />
      </linearGradient>
    </defs>
  </svg>
)

const Fifth = () => (
  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.724609" width="64" height="64" rx="32" fill="#0F0F10" />
    <path d="M32.724 23.9998V31.9998L38.0573 34.6665M46.0573 31.9998C46.0573 39.3636 40.0878 45.3332 32.724 45.3332C25.3602 45.3332 19.3906 39.3636 19.3906 31.9998C19.3906 24.636 25.3602 18.6665 32.724 18.6665C40.0878 18.6665 46.0573 24.636 46.0573 31.9998Z" stroke="url(#paint0_linear_4501_54340)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_4501_54340" x1="45.5573" y1="18.6665" x2="17.8047" y2="20.4342" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2DD282" />
        <stop offset="1" stop-color="#90F4E8" />
      </linearGradient>
    </defs>
  </svg>
)

const Sixth = () => (
  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.724609" width="64" height="64" rx="32" fill="#0F0F10" />
    <path d="M44.7246 31.3334C44.7292 33.0932 44.318 34.8292 43.5246 36.4C42.5839 38.2824 41.1376 39.8656 39.3479 40.9724C37.5581 42.0792 35.4956 42.6659 33.3913 42.6667C31.6315 42.6713 29.8954 42.2601 28.3246 41.4667L20.7246 44L23.2579 36.4C22.4645 34.8292 22.0534 33.0932 22.0579 31.3334C22.0588 29.229 22.6454 27.1665 23.7522 25.3768C24.859 23.587 26.4423 22.1408 28.3246 21.2C29.8954 20.4066 31.6315 19.9954 33.3913 20H34.0579C36.8371 20.1534 39.462 21.3264 41.4301 23.2945C43.3983 25.2626 44.5713 27.8876 44.7246 30.6667V31.3334Z" stroke="url(#paint0_linear_4501_54348)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_4501_54348" x1="44.2746" y1="20" x2="19.2973" y2="21.5909" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2DD282" />
        <stop offset="1" stop-color="#90F4E8" />
      </linearGradient>
    </defs>
  </svg>
)

const Seventh = () => (
  <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.724609" width="64" height="64" rx="32" fill="#0F0F10" />
    <path d="M20.7246 29.3332H44.7246M38.0579 18.6665V23.9998M27.3913 18.6665V23.9998M23.3913 21.3332H42.0579C43.5307 21.3332 44.7246 22.5271 44.7246 23.9998V42.6665C44.7246 44.1393 43.5307 45.3332 42.0579 45.3332H23.3913C21.9185 45.3332 20.7246 44.1393 20.7246 42.6665V23.9998C20.7246 22.5271 21.9185 21.3332 23.3913 21.3332Z" stroke="url(#paint0_linear_4501_54356)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <defs>
      <linearGradient id="paint0_linear_4501_54356" x1="44.2746" y1="18.6665" x2="19.2781" y2="20.0994" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2DD282" />
        <stop offset="1" stop-color="#90F4E8" />
      </linearGradient>
    </defs>
  </svg>
)