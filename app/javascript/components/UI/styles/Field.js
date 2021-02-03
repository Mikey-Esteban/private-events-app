import styled from 'styled-components'

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

export default Field
