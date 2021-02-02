import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  max-width: 400px;
  margin: 0 auto;

  label, input {
    width: 100%;
  }
`

const Login = (props) => {
  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit} >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="enter email here"
          onChange={props.handleChange}
          value={props.user.email || ''} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="enter password here"
          onChange={props.handleChange}
          value={props.user.password || ''} />

        <input type="submit" value="Log in"/>
      </form>
    </Wrapper>
  )
}

export default Login
