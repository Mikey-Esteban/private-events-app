import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Attendees from './Attendees'
import Navbar from '../UI/Navbar'
import Wrapper from '../UI/styles/Wrapper'

const Event = (props) => {

  const user = props.location.state.user
  const event = props.location.state.event
  const event_attending = {
    slug: event.attributes.slug,
    attendee_id: user.id
  }

  const [ attendees, setAttendees ] = useState([])

  useEffect( () => {
    axios.get(`/api/v1/events/${event.id}`)
      .then( resp => {
        setAttendees(resp.data.included)
      })
      .catch( resp => console.log(resp) )
  }, [attendees.length])

  const handleSubmit = () => {
    axios.post(`/api/v1/event_attendings`, {event_attending})
      .then( resp => {})
      .catch( resp => console.log(resp) )
  }

  const attendeesList = attendees.map( item => {
    return (<Attendees key={item.id} attributes={item.attributes} />)
  })

  return (
    <Fragment>
      <Navbar user={user}></Navbar>
      <Wrapper>
        <div>[This is my events#show component]</div>
        <div>{event.attributes.title}</div>
        <div>{event.attributes.description}</div>
        <div>{event.attributes.date}</div>
        <div>{event.attributes.creator_name}</div>
        <button onClick={handleSubmit}>Attend Event</button>
      </Wrapper>
      <Wrapper>
        <h3>Attendees!</h3>
        <ul>{attendeesList}</ul>
      </Wrapper>
    </Fragment>
  )
}

export default Event
