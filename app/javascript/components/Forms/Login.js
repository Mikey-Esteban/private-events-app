import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import ButtonWrapper from '../UI/styles/ButtonWrapper'
import Wrapper from  '../UI/styles/Wrapper'
import Field from '../UI/styles/Field'

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
      <ButtonWrapper>
        <Button path={'/signup'} text={'Sign up!'} />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Login
