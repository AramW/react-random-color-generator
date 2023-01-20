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
  <div></div>;
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}
export default Button;

// Rewrite the emotion style entirely //
// check cheat sheet on the learning platform for this //
// line 15, return a normal html button //
