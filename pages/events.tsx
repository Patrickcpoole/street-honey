import React from 'react'
import {client} from '../lib/client';
import { SideBannerDataTyping, EventTyping } from "../typings";
import  SideBanner  from '../components/SideBanner'
import  EventCard  from '../components/EventCard'


type Props = {
  sideBannerData: SideBannerDataTyping[]
  eventsData: EventTyping[]
};

const events = ({ sideBannerData, eventsData}: Props) => (
    <>
    <div className='flex flex-row'>
    <SideBanner sideBanner={sideBannerData[1]}/>
    <div className='events-container'>
      <h3 className='text-4xl my-5'  style={{color:'#333', textDecoration: 'underline'}} >Upcoming Events</h3>
    {eventsData.map(event => (
      <EventCard eventData={event} key={event._id} />
    ))}
    </div>
    </div>
    </>
)

export const getServerSideProps = async () => {
  const query = '*[_type == "sideBanner"]';
  const sideBannerData = await client.fetch(query);
  console.log('this is side banner data', sideBannerData)

  const eventQuery = '*[_type == "event"]';
  const eventsData = await client.fetch(eventQuery);
  console.log('event data', events)

  return {
    props: {sideBannerData, eventsData}
  }
}

export default events