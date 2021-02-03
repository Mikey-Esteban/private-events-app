import React, { useState, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import Login from './Forms/Login'
import Button from './UI/Button'

const Home = () => {

  const [ user, setUser ] = useState({})
  const [ redirect, setRedirect ] = useState(false)

  const handleChange = e => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    // make api request to sessions controller
    axios.post('/login', {email: user.email, password: user.password})
      .then( resp => {
        setUser(resp.data.data)
        setRedirect(true)
      })
      .catch ( resp => console.log(resp))

  }

  if (redirect) {
    return <Redirect to={`/users/${user.id}`} />
  }

  return (
    <Fragment>
      <div>[This is my Home Component.]</div>
      <Login handleChange={handleChange} handleSubmit={handleSubmit} user={user} />
      <Button path={'/signup'} text={'Sign up!'} />
    </Fragment>
  )
}

export default Home
