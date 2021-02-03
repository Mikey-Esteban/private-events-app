import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../UI/Navbar'
import Wrapper from '../UI/styles/Wrapper'
import Button from '../UI/Button'

const BlueOutlineButton = styled.div`
  a {
    background: #fff;
    border: 1px solid #023047; /* dark blue */
    color: #023047; /* dark blue */
  }

  a:hover {
    background: #023047; /* dark blue */
    color: #fff;
  }
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
        <Fragment>
          <Navbar user={user}></Navbar>
          <Wrapper>
            <div className="title">Hello {user.attributes.name}</div>
            <div className="token">your token is {user.attributes.authentication_token}</div>
            <BlueOutlineButton>
              <Button path={'/events'} state={user} text={'All Events'} isBlue={true} />
            </BlueOutlineButton>
            <div className="createdEvents">You made {createdEvents.length} events!</div>
            {list}
          </Wrapper>
        </Fragment>
      }
    </Fragment>
  )
}

export default User
