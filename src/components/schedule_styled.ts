import styled from "styled-components";

import {
    COLOR_BLACK,
    COLOR_GREEN,
    COLOR_ORANGE
} from './styled'

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
    color: ${COLOR_BLACK};
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px; /* 180% */
    letter-spacing: 3px;
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