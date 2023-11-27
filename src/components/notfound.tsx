import * as React from 'react'
import {
  ScheduleTitle,
  ScheduleDetails
} from './styled'

import {
    Address,
    NotFoundContainer
} from './styled'

const NotFound = () => {
  return (
    <NotFoundContainer>
        <ScheduleTitle>
            PAGE NOT FOUND
        </ScheduleTitle>
        
        <ScheduleDetails>
        Uh oh, it looks like you took a wrong turn <br/>
        This page doesn't exist 😔
        </ScheduleDetails>
        
        <Address href="/">Go to home page</Address>
    </NotFoundContainer>
  )
}

export default NotFound