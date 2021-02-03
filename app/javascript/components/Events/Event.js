import React, { Fragment} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 20px;
`

const LinkWrapper = styled.div`
  a {
    color: #e07a5f; /* red */
    text-decoration: none;
  }
`

const Event = (props) => {
  console.log('Events/event props:', props);
  return (
    <Wrapper>
      <div className="title">{props.attributes.title}</div>
      <div className="creator">created by {props.attributes.creator_name}</div>
      <div className="date">{props.attributes.date}</div>
      <LinkWrapper>
        <Link to={{
          pathname: `/events/${props.attributes.slug}`,
          state: { event: props.attributes }
        }}>
          See Event
        </Link>
      </LinkWrapper>
    </Wrapper>
  )
}

export default Event
