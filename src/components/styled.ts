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

export const HotelRoomSnippet = styled.p`
    font-size: 16px;
    letter-spacing: 2.8px;
    line-height: 30px;
    max-width: 300px;
    margin-top: 52px;

    @media ${device.tabletandbigger} {
        font-size: 18px;
        letter-spacing: 2.8px;        
        line-height: 32px;
        max-width: 466px;
    }
    @media ${device.laptopandbigger} {
        font-size: 20px;
        letter-spacing: 3px;
        line-height: 36px;
        max-width: 512px;
        margin-top: 68px;
    }
    
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    
    margin-bottom: 200px;
    
    font-weight: 400;
    
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