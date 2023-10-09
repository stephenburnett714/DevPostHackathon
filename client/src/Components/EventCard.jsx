import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTicketSimple, faShareNodes } from '@fortawesome/free-solid-svg-icons'


const EventCard = () => {
    const event = ''
  return (
    <div className='border w-[20rem] rounded-md flex flex-col'>
        <h2>{event.title}</h2>
        <p>Hosted by: {event.host}</p>
        <p>{event.date} * {event.time}</p>
        <div>
            <p><FontAwesomeIcon icon={faCircleCheck} />{event.attendees} going</p>
            <p><FontAwesomeIcon icon={faTicketSimple} /> {event.ticketPrice}</p>
            <p><FontAwesomeIcon icon={faShareNodes} /> Share</p>
        </div>
    </div>
  )
}

export default EventCard