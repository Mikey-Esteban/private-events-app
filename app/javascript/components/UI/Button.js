import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const Button = (props) => {
  return (
    <LinkWrapper>
      <Link to={{
        pathname: props.path,
        state: { user: props.state }
      }}>{props.text}</Link>
    </LinkWrapper>
  )
}

export default Button
