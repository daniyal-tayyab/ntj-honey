import { ButtonConatiner } from "./Button.styles";

const Button = ({ inverted, children, dark }) => {
  return (
    <ButtonConatiner inverted={inverted} dark={dark}>
      {children}
    </ButtonConatiner>
  );
};

export default Button;
