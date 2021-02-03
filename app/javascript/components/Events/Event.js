import React, { Fragment} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const Event = (props) => {
  return (
    <Wrapper>
      <div className="title">{props.attributes.title}</div>
      <div className="creator">created by {props.attributes.creator_name}</div>
      <div className="date">{props.attributes.date}</div>
      <Link to={`/events/${props.attributes.slug}`}>
        See Event
      </Link>
    </Wrapper>
  )
}

export default Event
