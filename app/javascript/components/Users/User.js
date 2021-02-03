import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '../UI/Button'

const Wrapper = styled.div`
  display: block;
  max-width: 400px;
  margin: 0 auto;
`

const User = (props) => {

  const [ user, setUser ] = useState({})
  const [ createdEvents, setCreatedEvents ] = useState([])
  const [ loaded, setLoaded ] = useState(false)

  useEffect( () => {
    const user_id = props.match.params.id
    console.log("user id", user_id);
    axios.get(`/api/v1/users/${user_id}`)
      .then( resp => {
        setUser(resp.data.data)
        setCreatedEvents(resp.data.included)
        setLoaded(true)
      })
  }, [])

  const list = createdEvents.map( item => {
    return (
      <ul key={item.attributes.slug}>
        <li>{item.attributes.title}</li>
        <li>{item.attributes.description}</li>
        <li>{item.attributes.date}</li>
      </ul>
    )
  })

  return (
    <Fragment>
      { loaded &&
        <Wrapper>
          <div>[This is my users#show page.]</div>
          <div className="title">Hello {user.attributes.name}</div>
          <div className="token">your token is {user.attributes.authentication_token}</div>
          <div className="createdEvents">You made {createdEvents.length} events!</div>
          {list}
          <Button path={'/create-event'} state={user} text={'Create Event!'}/>
          <Button path={'/events'} text={'All Events'} />
        </Wrapper>
      }
    </Fragment>
  )
}

export default User
