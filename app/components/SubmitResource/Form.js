import styled from 'styled-components';
export default styled.form`
  margin-top: 36ppx;
  border: 2px solid;
  text-align: ${props=>props.theme.lang === 'ar' ? 'left' : 'right'};
  input {
    border-bottom: 2px solid;
    text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
    width: 100%;
    padding: 5px;
  }

  textarea {
    width: 100%;
    padding: 5px;
    resize: none;
    height: 50px;
    outline: none;
  }

  button {
    outline: none;
    cursor: pointer;
    width: 70px;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    color: #828486;
    margin: 5px;
  }
`;
