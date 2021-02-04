import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CreatedEvents from './CreatedEvents'
import AttendingEvents from './AttendingEvents'
import Navbar from '../UI/Navbar'
import Button from '../UI/Button'
import ButtonWrapper from '../UI/styles/ButtonWrapper'
import BlueOutlineButton from '../UI/styles/BlueOutlineButton'
import Wrapper from '../UI/styles/Wrapper'


const User = (props) => {

  const user = props.location.state.user
  const attendingEventsData = user.relationships.attending_events.data

  const [ createdEvents, setCreatedEvents ] = useState([])
  const [ attendingEvents, setAttendingEvents ] = useState([])
  const [ loaded, setLoaded ] = useState(false)

  useEffect( () => {
    const user_id = props.match.params.id

    axios.get(`/api/v1/users/${user_id}`)
      .then( resp => {
        setCreatedEvents(resp.data.included)
        setLoaded(true)
      })
      .catch( resp => console.log(resp) )

    // make a call to each attendingEventsData
    attendingEventsData.forEach( (el) => {
      axios.get(`/api/v1/events/${el.id}`)
        .then( resp => {
          setAttendingEvents([...attendingEvents, resp.data.data])
        })
        .catch( resp => console.log(resp) )
    })
  }, [])

  const createdList = createdEvents.map( item => {
    return ( <CreatedEvents key={item.attributes.slug} attributes={item.attributes} />)
  })

  const attendingList = attendingEvents.map( item => {
    return ( <AttendingEvents key={item.attributes.slug} attributes={item.attributes} />)
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
            <div className="createdEvents">
              <h3>You made {createdEvents.length} events!</h3>
              {createdList}
            </div>
            <div className="attendingEvents">
              <h3>You have {attendingEvents.length} events to attend!</h3>
              {attendingList}
            </div>
          </Wrapper>
        </Fragment>
      }
    </Fragment>
  )
}

export default User
