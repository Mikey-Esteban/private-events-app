import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Events = (props) => {

  const [ events, setEvents ] = useState([])
  const [ loaded, setLoaded ] = useState(false)

  useEffect( () => {
    axios.get('/api/v1/events')
      .then( resp => {
        console.log(resp);
        setEvents(resp.data.data)
        setLoaded(true)
      })
  }, [events.length])

  const list = events.map( item => {
    return (
      <li key={item.id}>
        <div>{item.attributes.title} created by: {item.attributes.creator_name}</div>
      </li>
    )
  })

  return (
    <Fragment>
      { loaded &&
        <Fragment>
          <div>[This is the events#index component]</div>
          <ul>{list}</ul>
        </Fragment>
      }
    </Fragment>
  )
}

export default Events
