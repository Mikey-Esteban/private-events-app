import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 15px 5px 0 0;
`
const BlueButton = styled.div`
  margin-left: 10px;

  a {
    background: #023047; /* dark blue */
    border: 1px solid #023047; /* dark blue */
  }

  a:hover {
    background: #fff;
    color: #023047; /* dark blue */
  }
`

const Navbar = ({user}) => {

  return (
    <Wrapper>
      <Button path={'/create-event'} state={user} text={'New Event'} />
      <BlueButton>
        <Button path={`/users/${user.id}`} state={user} text={`${user.attributes.name}`} />
      </BlueButton>
    </Wrapper>
  )
}

export default Navbar
