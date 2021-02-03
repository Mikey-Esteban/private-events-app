import styled from 'styled-components'

const Button = styled.div`
  margin: 30px 0;

  a {
    border: 1px solid #fca311; /* orange*/
    border-radius: 4px;
    padding: 10px 20px;

    background: #fca311;
    color: #fff;
    font-size: 13px;
    text-decoration: none;

    transition: all ease-in-out 150ms;
  }

  a:hover {
    background: #fff;
    color: #fca311;
  }
`

export default Button
