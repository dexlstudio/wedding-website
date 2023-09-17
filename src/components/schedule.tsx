import * as React from 'react'

import {
  ScheduleDate,
  ScheduleTitle,
  ScheduleDetails,
  ScheduleDivider,
  ScheduleItemContainer
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
    <div>
      <ScheduleItem
        title="ARRIVAL"
        date="THURSDAY, MAY 30th, 2024"
        details="Details coming soon"
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
        details="Details coming soon"
      />
    </div>
  )
}

export default Schedule