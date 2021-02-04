import React, { useState, Fragment } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import Navbar from '../UI/Navbar'
import Wrapper from '../UI/styles/Wrapper'
import Field from '../UI/styles/Field'
import Button from '../UI/Button'

const Event = (props) => {

  const creator = props.location.state.user
  const [ event, setEvent ] = useState({creator_id: creator.id, creator_name: creator.attributes.name})
  const [ redirect, setRedirect ] = useState(false)
  const [ errorMessages, setErrorMessages ] = useState([])

  const handleChange = e => {
    setEvent({...event, [e.target.name]:e.target.value})
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
    <Fragment>
      <Navbar user={creator}></Navbar>
      <Wrapper>
        <div>[Event Form component]</div>
        <form onSubmit={handleSubmit} >
          <Field>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="enter title here"
              onChange={handleChange}
              value={event.title || ''} />
          </Field>

          <Field>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" placeholder="enter description here"
              onChange={handleChange}
              value={event.description || ''} />
          </Field>

          <Field>
            <label htmlFor="date">Date</label>
            <input type="date" name="date"
              onChange={handleChange}
              value={event.date || ''} />
          </Field>

          <Field>
            <input type="submit" value="Create Event!"/>
          </Field>
        </form>
      </Wrapper>
    </Fragment>
  )
}

export default Event
