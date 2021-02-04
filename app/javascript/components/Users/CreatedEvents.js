import React from 'react'

const CreatedEvents = (props) => {
  return (
    <ul>
      <li>{props.attributes.title}</li>
      <li>{props.attributes.description}</li>
      <li>{props.attributes.date}</li>
    </ul>
  )
}

export default CreatedEvents
