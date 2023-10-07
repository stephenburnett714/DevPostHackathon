import React from "react";
import Phone from "../assets/Images/HandsPhone.png";
import { NearEventsData } from "../assets/data/events";
import "../CSS/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faCheck, faCoffee, faPencil, faTicket } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const firstEightNearEvents = NearEventsData.events.slice(0, 8);
  const firstFourOnlineEvents = NearEventsData.events.slice(0, 4);

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${dayName}, ${monthName} ${day} ${year}`;
  }


  return (
    <>
      {/* Intro */}
      <div className="flex flex-col sm:flex-row pt-8 lg:pt-12 justify-between">
        <div className="w-2/4">
          <div className="text-gray-500 inter-font text-sm text-left">Join a sisterhood</div>
          <div className="text-4xl text-left font-bold ">
            <span>A platform for women looking to</span><span className="ww-purple"> connect and make friends IRL</span>
          </div>
          <div className="text-base text-gray-500 inter-font text-left">
            A subheading that addresses the what, the why we should care and
            hopefully some social proof.
          </div>
          <div className="flex py-4">
            <div className="hidden sm:inline-block text-base ww-background-purple rounded text-white  px-4 cursor-pointer mr-8">Join a group</div>
            <div className="hidden sm:inline-block text-base ww-border-purple rounded ww-purple px-4 cursor-pointer">Learn more</div>
          </div>
        </div>
        <div className="m-8 w-1/4">
          <img src={Phone} alt="family" />
        </div>
      </div>

      {/* Events Near */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row ">
          <div className="text-lg text-left font-bold mr-6">Events Near</div>
          <div className="text-sm rounded px-4 cursor-pointer text-white bg-blue-700">Pheonix, AZ  <FontAwesomeIcon icon={faPencil} /></div>
        </div>
        <div className="text-blue-700 text-sm cursor-pointer">See all events</div>
      </div>
      <div className="flex flex-wrap justify-center">
        {firstEightNearEvents.map((event) => (
          <div key={event.name} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4 ">
            <div>
              <img src={event.image} alt={event.name} />
              <div className="text-base text-left font-semibold">{event.title}</div>
              <div className="text-sm text-left">{formatDate(event.date)}</div>
              <div className="text-xs text-left"><FontAwesomeIcon icon={faCalendarAlt} /> Time: {event.time}</div>
              <div className="flex text-left">
                <div className="pr-4 text-xs font-semibold"><FontAwesomeIcon icon={faCheck} /> {event.attendees} going</div>
                <div className="text-xs font-semibold"><FontAwesomeIcon icon={faTicket} /> {event.ticketPrice}</div>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming online events */}

      <div>
        <div>Upcoming online events</div>
        <div>See all events</div>
      </div>
      <div className="flex flex-wrap justify-center">
        {firstFourOnlineEvents.map((event) => (
          <div key={event.name} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4 ">
            <div>
              <img src={event.image} alt={event.name} />
              <div className="text-base text-left font-semibold">{event.title}</div>
              <div className="text-sm text-left">{formatDate(event.date)}</div>
              <div className="text-xs text-left"><FontAwesomeIcon size="1x" icon={faCalendarAlt} /> Time: {event.time}</div>
              <div className="flex text-left">
                <div className="pr-4 text-xs font-semibold"><FontAwesomeIcon icon={faCheck} /> {event.attendees} going</div>
                <div className="text-xs font-semibold"><FontAwesomeIcon icon={faTicket} /> {event.ticketPrice}</div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
