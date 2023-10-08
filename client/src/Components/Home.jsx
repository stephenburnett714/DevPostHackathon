import React from "react";
import Phone from "../assets/Images/HandsPhone.png";
import { NearEventsData } from "../assets/data/events";
import "../CSS/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCircleCheck,
  faPencil,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const firstEightNearEvents = NearEventsData.events.slice(0, 8);
  const firstFourOnlineEvents = NearEventsData.events.slice(0, 4);
  const navigate = useNavigate()

  function eventsPageLink() {
    navigate('/events');
  }

  function eventsPageLink() {
    navigate('/events');
  }

  function groupPageLink() {
    navigate('/groups');
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayName}, ${monthName} ${day} ${year}`;
  }

  return (
    <div className="mx-8">
      {/* Intro */}
      <div className="flex flex-col sm:flex-row pt-8 lg:pt-12 justify-between">
        <div className="sm:w-2/4">
          <div className="text-gray-500 inter-font text-sm text-left">
            Join a sisterhood
          </div>
          <div className="md:text-4xl text-left font-bold ">
            <span>A platform for women looking to</span>
            <span className="ww-purple"> connect and make friends IRL</span>
          </div>
          <div className="text-base text-gray-500 inter-font text-left">
            A subheading that addresses the what, the why we should care and
            hopefully some social proof.
          </div>
          <div className="flex py-4">
            <div onClick={groupPageLink} className="hidden sm:inline-block text-base ww-background-purple rounded text-white  px-4 cursor-pointer mr-8 inter-font">
              Join a group
            </div>
            <div className="hidden sm:inline-block text-base ww-border-purple rounded ww-purple px-4 cursor-pointer inter-font">
              Learn more
            </div>
          </div>
        </div>
        <div className="m-8 w-1/4 self-center picture-min">
          <img src={Phone} alt="family" />
        </div>
      </div>

      {/* Events Near */}
      <div className="flex flex-row justify-between py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="text-lg text-left font-bold sm:mr-6 inter-font">
            Events Near
          </div>
          <div className="text-[8px] rounded px-4 py-1 cursor-pointer text-white ww-background-purple inter-font self-center">
            Pheonix, AZ <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
        <div className="ww-purple text-xs cursor-pointer self-end inter-font hidden sm:block " onClick={eventsPageLink}>
          See all events
        </div>
      </div>
      <div className="flex flex-wrap">
        {firstEightNearEvents.map((event) => (
          <div
            key={event.name}
            className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4"
          >
              <div>
              <img src={event.image} alt={event.name} />
              <div className="text-[15px] text-left font-semibold inter-font">
                {event.title}
              </div>
              <div className="flex flex-col justify-end">
                <div className="text-[10px] text-left inter-font">
                  {formatDate(event.date)}
                </div>
                <div className="text-[11px] text-left inter-font">
                  <FontAwesomeIcon icon={faCalendarAlt} /> Time: {event.time}
                </div>
                <div className="flex text-left">
                  <div className="pr-4 text-[12px] font-semibold inter-font">
                    <FontAwesomeIcon icon={faCircleCheck} color="#64025F" />{" "}
                    {event.attendees} going
                  </div>
                  <div className="text-[12px] font-semibold inter-font">
                    <FontAwesomeIcon icon={faTicket} /> {event.ticketPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming online events */}

      <div className="flex flex-row justify-between">
        <div className="text-lg text-left font-bold mr-6 inter-font">
          Upcoming online events
        </div>
        <div className="ww-purple text-xs cursor-pointer self-end inter-font" onClick={eventsPageLink}>
          See all events
        </div>
      </div>
      <div className="flex flex-wrap items-stretch">
        {firstFourOnlineEvents.map((event) => (
                 <div
                 key={event.name}
                 className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4"
               >
                   <div>
                   <img src={event.image} alt={event.name} />
                   <div className="text-[15px] text-left font-semibold inter-font">
                     {event.title}
                   </div>
                   <div className="flex flex-col justify-end">
                     <div className="text-[10px] text-left inter-font">
                       {formatDate(event.date)}
                     </div>
                     <div className="text-[11px] text-left inter-font">
                       <FontAwesomeIcon icon={faCalendarAlt} /> Time: {event.time}
                     </div>
                     <div className="flex text-left">
                       <div className="pr-4 text-[12px] font-semibold inter-font">
                         <FontAwesomeIcon icon={faCircleCheck} color="#64025F" />{" "}
                         {event.attendees} going
                       </div>
                       <div className="text-[12px] font-semibold inter-font">
                         <FontAwesomeIcon icon={faTicket} /> {event.ticketPrice}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
        ))}
      </div>
    </div>
  );
}
