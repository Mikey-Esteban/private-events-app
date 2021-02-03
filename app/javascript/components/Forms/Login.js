import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  max-width: 400px;
  margin: 0 auto;

  label, input {
    width: 100%;
  }

  input[type="submit"] {
    background: #023047; /* dark blue */
    border: 1px solid #023047; /* dark blue */
    border-radius: 4px;
    padding: 10px 20px;
    width: auto;

    color: #fff;
    cursor: pointer;
    transition: all ease-in-out 150ms;
  }

  input[type="submit"]:hover {
    background: #fff;
    color: #023047; /* dark blue */
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
