import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Wrapper from  '../UI/styles/Wrapper'

const Field = styled.div`
  margin-top: 20px;

  label, input {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
  }

  input {
    border: 1px solid #efefef;
    margin-top: 5px;
    padding: 10px 0 10px 10px;
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
        <Field>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="enter email here"
            onChange={props.handleChange}
            value={props.user.email || ''} />
        </Field>

        <Field>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="enter password here"
            onChange={props.handleChange}
            value={props.user.password || ''} />
        </Field>

        <Field>
          <input type="submit" value="Log in"/>
        </Field>
      </form>
      <Button path={'/signup'} text={'Sign up!'} />
    </Wrapper>
  )
}

export default Login
