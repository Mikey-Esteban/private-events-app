import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonStyle from './styles/Button'

const BlueButton = styled(ButtonStyle)`
  a {
    background: #fff;
    border: 1px solid #023047; /* dark blue */
    color: #023047; /* dark blue */
  }

  a:hover {
    background: #023047; /* dark blue */
    color: #fff;
  }
`

const Button = (props) => {

  if (props.state) {
    return (
      <ButtonStyle>
        <Link to={{
          pathname: props.path,
          state: { user: props.state }
        }}>{props.text}</Link>
      </ButtonStyle>
    )
  } else {
    return (
      <BlueButton>
        <Link to={props.path}>{props.text}</Link>
      </BlueButton>
    )
  }
}

export default Button
