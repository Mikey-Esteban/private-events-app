import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonStyle from './styles/Button'

const Button = (props) => {

  return (
    <ButtonStyle>
      <Link to={{
        pathname: props.path,
        state: { user: props.state }
      }}>{props.text}</Link>
    </ButtonStyle>
  )
}

export default Button
