import styled from '@emotion/styled';

const StyledButton = styled.button`
  font-size: 15px;
  letter-spacing: 1px;
  padding: 20px 25px 20px 25px;
  outline: 0;
  border: 2px solid black;
  position: relative;
  margin-top: 20px;
`;

function Button(props) {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}
export default Button;

// Rewrite the emotion style entirely //
// You can check some cheatsheet on the learning platform for this //
// and then on line 15, return a normal html button //
// and then use your emotion to style the button //
// what you are currently doing is trying to use emotion to create a react component but it wont work like this //
