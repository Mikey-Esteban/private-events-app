import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  max-width: 400px;
  margin: 0 auto;

  label, input {
    width: 100%;
  }
`

const Signup = () => {

  const [ user, setUser ] = useState({})
  const [ redirect, setRedirect ] = useState(false)
  const [ errorMessages, setErrorMessages ] = useState([])

  const handleChange = e => {
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user);
  }

  const handleSubmit = e => {
    e.preventDefault()

    if ( checkPasswordConfirmation() !== true ) {
      const status = 'Your password and password confirmation dont match'
      setErrorMessages([...errorMessages, status])
      console.log(errorMessages);
    } else {
      // post request
      axios.post('/signup', {user})
        .then(resp => {
          setUser(resp.data.data)
          setRedirect(true)
        })
        .catch( resp => console.log(resp) )
    }
    console.log(checkPasswordConfirmation())
  }

  const checkPasswordConfirmation = () => {
    return user.password && user.password === user.password_confirmation
  }

  if (redirect) {
    return (
      <Redirect to={{
       pathname: `/users/${user.id}`,
       state: { user: user}
     }} />
    )
  }

  return (
    <Wrapper>
      <div>[Signup component]</div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="enter name here"
          onChange={handleChange}
          value={user.name || ''} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="enter email here"
          onChange={handleChange}
          value={user.email || ''} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="enter password here"
          onChange={handleChange}
          value={user.password || ''} />

          <label htmlFor="password_confirmation">password_confirmation</label>
          <input type="password" name="password_confirmation" placeholder="reenter password here"
            onChange={handleChange}
            value={user.password_confirmation || ''} />

        <input type="submit" value="Register"/>
      </form>
    </Wrapper>
  )
}

export default Signup
