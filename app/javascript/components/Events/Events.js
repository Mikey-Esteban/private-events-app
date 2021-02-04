import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Event from './Event'
import Navbar from '../UI/Navbar'
import Wrapper from '../UI/styles/Wrapper'

const Events = (props) => {

  const user = props.location.state.user
  const [ events, setEvents ] = useState([])
  const [ loaded, setLoaded ] = useState(false)

  useEffect( () => {
    axios.get('/api/v1/events')
      .then( resp => {
        setEvents(resp.data.data)
        setLoaded(true)
      })
  }, [events.length])

  const list = events.map( item => {
    return (
      <Event key={item.id} attributes={item.attributes} user={user} />
    )
  })

  return (
    <Fragment>
      <Navbar user={user}></Navbar>
      { loaded &&
        <Wrapper>
          <div>[This is the events#index component]</div>
          <div>{list}</div>
        </Wrapper>
      }
    </Fragment>
  )
}

export default Events
