import React, { useState, Fragment } from 'react'

const User = (props) => {

  const [ user, setUser ] = useState(props.location.state.userData.data)
  const [ createdEvents, setCreatedEvents ] = useState(props.location.state.userData.included)

  const list = createdEvents.map( item => {
    return (
      <ul key={item.attributes.slug}>
        <li>{item.attributes.title}</li>
        <li>{item.attributes.description}</li>
        <li>{item.attributes.date}</li>
      </ul>
    )
  })

  console.log(props);
  return (
    <Fragment>
      <div>[This is my users#show page.]</div>

      <div className="title">Hello {user.attributes.name}</div>
      <div className="token">your token is {user.attributes.authentication_token}</div>
      <div className="createdEvents">You made {createdEvents.length} events!</div>
      {list}
    </Fragment>
  )
}

export default User
