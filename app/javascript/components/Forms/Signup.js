import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import Wrapper from '../UI/styles/Wrapper'
import Button from '../UI/Button'
import ButtonWrapper from '../UI/styles/ButtonWrapper'
import Field from '../UI/styles/Field'

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
        <Field>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="enter name here"
            onChange={handleChange}
            value={user.name || ''} />

        </Field>

        <Field>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="enter email here"
            onChange={handleChange}
            value={user.email || ''} />
        </Field>

        <Field>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="enter password here"
            onChange={handleChange}
            value={user.password || ''} />
        </Field>

        <Field>
          <label htmlFor="password_confirmation">password_confirmation</label>
          <input type="password" name="password_confirmation" placeholder="reenter password here"
            onChange={handleChange}
            value={user.password_confirmation || ''} />
        </Field>

        <Field>
          <input type="submit" value="Register!"/>
        </Field>
      </form>
      <ButtonWrapper>
        <Button path={'/'} text={'Login'} />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Signup
