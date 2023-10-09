import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons' 
import EventCard from './EventCard'

export default function Events() {
  const [events, setEvents] = useState([])
  

    
  

  console.log(events)

  return (
    <div>
      <div>
        <h2>Fitness Events near Phoenix, AZ</h2>
      </div>
      <div>
        <Link>Events</Link>
        <Link>Groups</Link>
      </div>
      <div>
        <button className='border p-2 rounded-md'>Any day <FontAwesomeIcon icon={faChevronDown} /></button>
        <button className='border p-2 rounded-md'>Any type <FontAwesomeIcon icon={faChevronDown} /></button>
        <button className='border p-2 rounded-md'>Any distance <FontAwesomeIcon icon={faChevronDown} /></button>
        <button className='border p-2 rounded-md'>Any Category <FontAwesomeIcon icon={faChevronDown} /></button>
        <button className='border p-2 rounded-md'>Sort by: Relevance <FontAwesomeIcon icon={faChevronDown} /></button>
      </div>
      <div>
        <EventCard />
        <EventCard />
        {/* <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard /> */}
      </div>
    </div>
  )
}
