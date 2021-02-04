import React, { useState, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import Login from './Forms/Login'
import Button from './UI/Button'
import Wrapper from  './UI/styles/Wrapper'

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
    return <Redirect to={{
      pathname: `/users/${user.id}`,
      state: { user: user }
    }} />
  }

  return (
    <Wrapper>
      <div>[This is my Home Component.]</div>
      <Login handleChange={handleChange} handleSubmit={handleSubmit} user={user} />
    </Wrapper>
  )
}

export default Home
