import styled from "styled-components";

export const BACKGROUND_COLOR = `rgba(255, 250, 244, 1)`;
export const COLOR_BLACK = `#37474E`
export const COLOR_ORANGE = `#FF6B4A`
export const COLOR_GREEN = `rgba(92, 111, 106, 1)`

const background = require("./background.svg").default;
const backgroundNoLocation = require("./smallbackground.svg").default;

const size = {
    mobile: '360px',
    tablet: '612px',
    background: '880px',
    laptop: '1480px',
    desktop: '2560px',
    
  }

const device = {
    mobileandbigger: `(min-width: ${size.mobile})`,
    tabletandbigger: `(min-width: ${size.tablet})`,
    backgroundandbigger: `(min-width: ${size.background})`,
    laptopandbigger: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  };
  
// Header
export const Top = styled.p`
    font-size: 30px;
    @media ${device.mobileandbigger} {
        font-size: 36px;
    }
    @media ${device.tabletandbigger} {
        font-size: 40px;
    }
    margin-top: 36px;
    text-align: center;
    letter-spacing: 6px;
    font-weight: 300;
    opacity: 85%;
    color: ${COLOR_GREEN};
`;

// Footer 
export const Bottom = styled.div`
    text-align: center;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    color: ${COLOR_GREEN};
    font-family: Lato;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    opacity: 85%;
    letter-spacing: 6px;
`;

// Schedule
export const Schedule = styled.div`
`;

export const BackgroundImage = styled.div<{ $imageOpacity: number; }>`
    content: "";
    background-image: url(${backgroundNoLocation});
    background-repeat: no-repeat;
    background-size: auto;
    background-attachment: fixed;
    background-position: top right;        
    opacity: ${props => props.$imageOpacity};
    position: relative;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${BACKGROUND_COLOR};

    @media ${device.backgroundandbigger} {
        background-image: url(${background});   
    }
`;

export const Main = styled.div`
    position: relative;
    font-family: Lato;
    color: ${COLOR_BLACK};
    flex-direction: column;
    overflow: auto;
    width: 100%;
    margin: 0;
    z-index: 1;
    background-color: ${BACKGROUND_COLOR};
    `;

export const NavigationItem = styled.ul`
`;

const Paragraph = 
`font-size: 16px;
font-family: Lato;
letter-spacing: 2.8px;
line-height: 30px;

@media ${device.tabletandbigger} {
    font-size: 18px;
    line-height: 32px;
    
}
@media ${device.laptopandbigger} {
    font-size: 20px;
    line-height: 36px;
    
}`

export const HotelSnippet = styled.p`
    ${Paragraph}
    margin-top: 52px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
    font-weight: 400;
    max-width: 300px;
    
    @media ${device.tabletandbigger} {
        max-width: 466px;
    }
    @media ${device.laptopandbigger} {
        margin-top: 68px;
        max-width: 512px;  
    }
`;

export const SaveTheDate = styled.p `
    font-size: 16px;
    @media ${device.mobileandbigger} {
        font-size: 20px;
    }
    @media ${device.tabletandbigger} {
        font-size: 24px;
    }
    
    color: ${COLOR_GREEN};
    letter-spacing: 3.6px;
    font-weight: 400;
    margin-top: 215px;
`;

export const Date = styled.h1`
    font-size: 74px;
    margin: 48px auto;
    letter-spacing: 11.1px;
    padding: 0px 40px;
    @media ${device.tabletandbigger} {
        font-size: 110px;
        letter-spacing: 16.5px;
        margin: 45px auto;
        padding: 0px 80px;
    }
    @media ${device.laptopandbigger} {
        font-size: 150px;
        letter-spacing: 21px;
        margin: 0.6empx auto;
        padding: 0px 80px;
    }
    
    color: ${COLOR_BLACK};
    font-family: 'Poiret One';
    font-style: normal;
    font-weight: 400;
    -webkit-text-stroke: 1px ${COLOR_BLACK};
    
`;
export const AddressLabel = styled.a`
    font-family: Lato;
    color: ${COLOR_BLACK};
    display: block;
    font-weight: 700;
    // line-height: normal;
    text-decoration:none;
    cursor: pointer;

    font-size: 16px;
    letter-spacing: 3px;
    margin-bottom: 12px;
    
    @media ${device.tabletandbigger} {
        font-size: 20px;
        margin-bottom: 16px;
    }
    
`;
export const Address = styled.a`
    font-family: Lato;
    display: block;
    color: ${COLOR_ORANGE};
    font-weight: 400;
    text-decoration:none;
    cursor: pointer;

    font-size: 16px;
    letter-spacing: 3px;
    margin-bottom: 12px;
    
    @media ${device.tabletandbigger} {
        font-size: 20px;
        margin-bottom: 16px;
    }
`;

export const UpperContent = styled.div`
    text-align: center;
    letter-spacing: 3px;
`;

export const NotFoundContainer = styled.div`
    margin: 88px 12px 66px 66px;
`;



// Schedule Details 

export const COLOR_GREEN_DIVIDER = `rgba(92, 111, 106, 0.8)`

export const ScheduleContainer = styled.div`
    margin-bottom: 200px;
`
export const ScheduleTitle = styled.p`
    font-family: Poiret One;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 7.2px;
    margin-bottom: 20px;
`;

export const ScheduleDate = styled.p`
    color: ${COLOR_BLACK};
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.6px;
    margin-bottom: 16px;
`;

export const ScheduleDetails = styled.p`
    ${Paragraph}
    color: ${COLOR_BLACK};
    // font-family: Lato;
    // font-size: 20px;
    // font-style: normal;
    // font-weight: 400;
    // line-height: 36px; /* 180% */
    // letter-spacing: 3px;
`;

export const ScheduleDivider = styled.hr`
    width: 100%;
    color: ${COLOR_GREEN_DIVIDER};
    opacity: 35%;
    border: none;
    height: 1px;
    background-color: ${COLOR_GREEN_DIVIDER};
`;

export const ScheduleItemContainer = styled.div`
    margin: 88px 3%
`;