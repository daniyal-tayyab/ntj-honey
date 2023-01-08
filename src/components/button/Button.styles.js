import styled from "styled-components";

export const ButtonConatiner = styled.button`
  padding: ${(props) => (props.dark ? "1.6rem 2.5rem" : "1.5rem 1.8rem")};
  border: ${(props) => (props.inverted ? "1px solid #d3a863" : "none")};
  background-color: ${(props) =>
    props.inverted
      ? "#fff"
      : props.dark
      ? props.theme.orange
      : props.theme.primary};
  font-size: 1.6rem;
  color: ${(props) => (props.inverted ? props.theme.primary : "#fff")};
  font-weight: 900;
  margin: 0 0.5rem;
  cursor: pointer;
  border-radius: ${(props) => (props.dark ? "0" : "1rem")};

  transition: all 0.15s ease-in;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
