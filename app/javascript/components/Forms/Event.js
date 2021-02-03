import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  max-width: 400px;
  margin: 0 auto;

  label, input {
    width: 100%;
  }
`

const Event = (props) => {
  console.log(props);
  const creator = props.location.state.user

  const [ event, setEvent ] = useState({creator_id: creator.id, creator_name: creator.attributes.name})
  const [ redirect, setRedirect ] = useState(false)
  const [ errorMessages, setErrorMessages ] = useState([])

  const handleChange = e => {
    setEvent({...event, [e.target.name]:e.target.value})
    console.log(event);
  }

  const handleSubmit = e => {
    e.preventDefault()

    // post request
    axios.post('/api/v1/events', {event})
      .then(resp => {
        setEvent(resp.data.data)
        setRedirect(true)
      })
      .catch( resp => console.log(resp) )
  }


  if (redirect) {
    return <Redirect to={`/users/${creator.id}`} />
  }

  return (
    <Wrapper>
      <div>[Event Form component]</div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="enter title here"
          onChange={handleChange}
          value={event.title || ''} />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" placeholder="enter description here"
          onChange={handleChange}
          value={event.description || ''} />

        <label htmlFor="date">Date</label>
        <input type="date" name="date"
          onChange={handleChange}
          value={event.date || ''} />


        <input type="submit" value="Create Event!"/>
      </form>
    </Wrapper>
  )
}

export default Event
