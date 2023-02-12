import React, {useState} from 'react'
import { EventTyping } from "../typings";
import { urlFor } from "../lib/client";
import moment from 'moment'
import Form from './Form'


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type Props = {
  eventData: EventTyping
};



function EventCard({eventData}: Props) {

  const [toggleForm, setToggleForm] = useState<boolean>(false);

  return (
    <>
    <div className='event-container'>
      <div className='event-image-container' style={{backgroundImage: `url(${urlFor(eventData.image)})`}}>
        
        <h2 className='event-date-title'>{moment(eventData.dateTime).format('ddd MMM D')}</h2>
      </div>
      <div className="event-info-container">
        <h3 className='text-3xl'>{eventData.title}</h3>
        <h3 className='text-2xl'><span className='font-semibold mr-3'>When:</span>{moment(eventData.dateTime).format('ddd MMM D hh:mm A')}</h3>
        <h3 className='text-2xl'><span className='font-semibold mr-3'>Where:</span>{`${eventData.geoPoint.lat}, ${eventData.geoPoint.lat}`}</h3>
        <button type="button" className='event-button' onClick={() => setToggleForm(true)}>Sign Up</button>
      </div>
    </div>
    <div>
      <Dialog
        open={toggleForm}
        onClose={() => setToggleForm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='md'
      >
        <div className='dialog-image-container' style={{backgroundImage: `url(${urlFor(eventData.image)})`}}></div>
      <div className="dialog-info">
        <DialogTitle id="alert-dialog-title">
          {`${eventData.title} Sign Up `}
        </DialogTitle>
        <DialogContent>
          <p className='form-text'>{eventData.longDesc}</p>
         <Form/>
        </DialogContent>
        </div>
        </Dialog>
        
    </div>
    </>
    
  )
}

export default EventCard