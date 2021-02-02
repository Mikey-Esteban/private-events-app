import React, { useState, Fragment } from 'react'

const User = (props) => {

  const [ user, setUser ] = useState(props.location.state.user)
  console.log(props);
  return (
    <Fragment>
      <div>[This is my users#show page.]</div>

      <div className="title">Hello {user.attributes.name}</div>
      <div className="token">your token is {user.attributes.authentication_token}</div>
    </Fragment>
  )
}

export default User
