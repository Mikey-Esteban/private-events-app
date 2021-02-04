import React, { Fragment } from 'react'
import axios from 'axios'
import Navbar from '../UI/Navbar'
import Wrapper from '../UI/styles/Wrapper'

const Event = (props) => {
  console.log(props);
  const user = props.location.state.user
  const event = props.location.state.event
  const event_attending = {
    slug: event.attributes.slug,
    attendee_id: user.id
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(event);
    axios.post(`/api/v1/event_attendings`, {event_attending})
      .then( resp => {})
      .catch( resp => console.log(resp) )
  }


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
    </Fragment>
  )
}

export default Event
