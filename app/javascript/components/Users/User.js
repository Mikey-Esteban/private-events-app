import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../UI/Navbar'
import Button from '../UI/Button'
import ButtonWrapper from '../UI/styles/ButtonWrapper'
import Wrapper from '../UI/styles/Wrapper'


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

  const user = props.location.state.user
  const [ createdEvents, setCreatedEvents ] = useState([])
  const [ loaded, setLoaded ] = useState(false)

  useEffect( () => {
    const user_id = props.match.params.id
    console.log("user id", user_id);
    axios.get(`/api/v1/users/${user_id}`)
      .then( resp => {
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
      <Navbar user={user}></Navbar>
      { loaded &&
        <Fragment>
          <Wrapper>
            <div className="title">Hello {user.attributes.name}</div>
            <div className="token">your token is {user.attributes.authentication_token}</div>
            <BlueOutlineButton>
              <ButtonWrapper>
                <Button path={'/events'} state={user} text={'All Events'} />
              </ButtonWrapper>
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
