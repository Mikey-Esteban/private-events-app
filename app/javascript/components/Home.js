import React, { useState, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import Login from './Forms/Login'

const LinkWrapper = styled.div`
  margin-top: 50px;

  a {
    border: 1px solid #fca311 ; /* orange*/
    border-radius: 4px;
    padding: 10px 20px;

    color: #fca311;
    text-decoration: none;

    transition: all ease-in-out 150ms;
  }

  a:hover {
    color: #fff;
    background: #fca311;
  }
`

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
      <LinkWrapper>
        <Link to={`/signup`}>Sign up!</Link>
      </LinkWrapper>
    </Fragment>
  )
}

export default Home
