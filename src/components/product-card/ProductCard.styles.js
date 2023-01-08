import styled from "styled-components";
import { RiShoppingCart2Line } from "react-icons/ri";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 30rem;
    transition: all 0.15s ease;
  }

  &:hover {
    h3 {
      color: ${(props) => props.theme.orange};
    }

    img {
      transform: translateY(-8px);
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;

  margin-top: -1.5rem;

  h3 {
    text-transform: uppercase;
    font-size: 2.2rem;
    transition: all 0.15s ease;
  }

  p {
    font-size: 2rem;
    letter-spacing: 1px;
    color: ${(props) => props.theme.orange};
  }
`;

export const CartIcon = styled(RiShoppingCart2Line)`
  margin-right: 8px;
  font-size: 1.8rem;
`;

export const AddToCartSection = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    word-spacing: 1px;
    letter-spacing: 1px;
    transition: all 0.15s ease;
  }

  &:hover {
    p {
      margin-left: -2px;
    }
  }
`;

export const NewItem = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.orange};
  top: 3rem;
  right: 4rem;
  font-size: 1.2rem;
  padding: 2px 5px;
  letter-spacing: 4px;
  padding-left: 9px;

  color: #fff;
  display: ${(props) => (props.newItem === true ? "block" : "none")};

  @media (max-width: 550px) {
    top: 2.5rem;
    right: 16rem;
  }

  @media (max-width: 420px) {
    top: 2.5rem;
    right: 9.5rem;
  }

  @media (max-width: 375px) {
    top: 2.5rem;
    right: 7rem;
  }

  @media (max-width: 375px) {
    top: 2.5rem;
    right: 4rem;
  }
`;
