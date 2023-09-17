import styled from "styled-components";

export const BACKGROUND_COLOR = `rgba(255, 250, 244, 1)`;
export const COLOR_BLACK = `#37474E`
export const COLOR_ORANGE = `#FF6B4A`
export const COLOR_GREEN = `rgba(92, 111, 106, 1)`

const background = require("./background.svg").default;

// Header
export const Top = styled.p`
    margin-top: 36px;
    text-align: center;
    letter-spacing: 6px;
    font-size: 40px;
    font-weight: 300;
    opacity: 85%;
    color: ${COLOR_GREEN};
`;

// Footer 
export const Bottom = styled.p`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: ${COLOR_BLACK};
    font-family: Lato;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 6px;
`;

// Schedule
export const Schedule = styled.div`
// display: flex;
// flex-direction: column;
// overflow: auto;
// width: 100%;
`;

// Homepage
export const Main = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: auto;
    background-attachment: fixed;
    background-position: top right;
    
    background-color: ${BACKGROUND_COLOR};
    font-family: Lato;
    color: ${COLOR_BLACK};
    flex-direction: column;
    overflow: auto;
    width: 100%;
    margin: 0;
    opacity: 85%;
`;

export const NavigationItem = styled.ul`
`;

export const HotelRoomSnippet = styled.p`
    max-width: 512px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 72px;
    margin-bottom: 200px;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
`;

export const SaveTheDate = styled.p `
    color: ${COLOR_GREEN};
    font-size: 24px;
    letter-spacing: 3.6px;
    font-weight: 400;
    margin-top: 215px;
`;

export const Date = styled.h1`
    font-family: 'Poiret One';
    font-style: normal;
    font-weight: 400;
    font-size: 140px;
    letter-spacing: 21px;
    -webkit-text-stroke: 1px ${COLOR_BLACK};
    margin: 0.6em auto;
`;
export const AddressLabel = styled.a`
    color: ${COLOR_BLACK};
    display: block;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    text-decoration:none;
`;
export const Address = styled.a`
    display: block;
    color: ${COLOR_ORANGE};
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    text-decoration:none;
`;

export const UpperContent = styled.div`
    text-align: center;
    letter-spacing: 3px;
`;