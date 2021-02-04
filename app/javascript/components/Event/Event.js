import React, { Fragment } from 'react'
import Navbar from '../UI/Navbar'
import Wrapper from '../UI/styles/Wrapper'

const Event = (props) => {
  console.log(props);
  const user = props.location.state.user
  const event = props.location.state.event

  return (
    <Fragment>
      <Navbar user={user}></Navbar>
      <Wrapper>
        <div>[This is my events#show component]</div>
        <div>{event.title}</div>
        <div>{event.description}</div>
        <div>{event.date}</div>
        <div>{event.creator_name}</div>
      </Wrapper>
    </Fragment>
  )
}

export default Event
