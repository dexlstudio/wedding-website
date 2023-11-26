import * as React from 'react'

import {
  ScheduleDate,
  ScheduleTitle,
  ScheduleDetails,
  ScheduleDivider,
  ScheduleItemContainer,
  ScheduleContainer
} from './schedule_styled'

interface ScheduleItemProps {
  title: String;
  date: String;
  details: String;
}

const ScheduleItem = (props: ScheduleItemProps) => {
  const { title, date, details } = props;
  return (
    <div>
      <ScheduleItemContainer>
        <ScheduleTitle>{title}</ScheduleTitle>
        <ScheduleDate>{date}</ScheduleDate>
        <ScheduleDivider />
        <ScheduleDetails>{details}</ScheduleDetails>
      </ScheduleItemContainer>
    </div>
  )
}

const Schedule = () => {
  return (
    <ScheduleContainer>
      <ScheduleItem
        title="ARRIVAL"
        date="THURSDAY, MAY 30th, 2024"
        details="Checking in. Details coming soon"
      />
      <ScheduleItem
        title="EXPLORE THE COAST"
        date="FRIDAY, MAY 31st, 2024"
        details="Details coming soon"
      />      
      <ScheduleItem
        title="CEREMONY + DINNER"
        date="SATURDAY, JUNE 1st, 2024"
        details="Details coming soon"
      />      
      <ScheduleItem
        title="DEPARTURE"
        date="SUNDAY, JUNE 2nd, 2024"
        details="Checking out. Details coming soon"
      />
    </ScheduleContainer>
  )
}

export default Schedule