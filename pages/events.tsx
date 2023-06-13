import React, { useState } from 'react'
import { client } from '../lib/client';
import { SideBannerDataTyping, EventTyping } from "../typings";
import SideBanner from '../components/SideBanner'
import EventCard from '../components/EventCard'

type Props = {
  sideBannerData: SideBannerDataTyping[]
  eventsData: EventTyping[]
};

const Events = ({ sideBannerData, eventsData }: Props) => {
  
  const [showPastEvents, setShowPastEvents] = useState(false);

  // Current date
  const now = new Date();

  // Filter events
  const filteredEvents = eventsData.filter(event => {
    const eventDate = new Date(event.dateTime);
    return showPastEvents ? eventDate < now : eventDate >= now;
  });

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <SideBanner sideBanner={sideBannerData[1]} />
        <div className='flex flex-col justify-start items-center text-center w-full h-screen overflow-y-auto relative md:w-1/2 px-5'>
          <h3 className='text-4xl my-5' style={{ color: '#333' }}>{showPastEvents ? "Previous" : "Upcoming"} Events</h3>
          <div className="btn-group">
            <button 
            
              className={`border-2 border-solid border-secondary-color text-secondary-color p-2 m-1 rounded-md ${
                !showPastEvents ? 'bg-secondary-color text-primary-color' : ''
              }`} 
              onClick={() => setShowPastEvents(false)}
            >
              Upcoming
            </button>
            <button 
              className={`border-2 border-solid border-secondary-color text-secondary-color p-2 m-1 rounded-md ${
                showPastEvents ? 'bg-secondary-color text-primary-color' : ''
              }`} 
              onClick={() => setShowPastEvents(true)}
            >
              Previous
            </button>
          </div>
          {filteredEvents.map(event => (
            <EventCard pastEvent={showPastEvents} eventData={event} key={event._id} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "sideBanner"]';
  const sideBannerData = await client.fetch(query);

  const eventQuery = '*[_type == "event"]';
  const eventsData = await client.fetch(eventQuery);

  return {
    props: { sideBannerData, eventsData }
  }
}

export default Events
