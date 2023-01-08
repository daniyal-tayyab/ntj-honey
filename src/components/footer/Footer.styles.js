import styled from "styled-components";

import { CgFacebook } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

export const Continaer = styled.footer`
  position: relative;
  width: 100%;
  height: 68rem;

  background-color: ${(props) => props.theme.primary};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem;
  font-family: "Open Sans", sans-serif;
  margin-top: 15rem;

  @media (max-width: 1050px) {
    width: 75%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 775px) {
    width: 95%;
  }

  @media (max-width: 735px) {
    grid-template-columns: 1fr 1fr;
    width: 80%;
  }

  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
  }
`;

export const Heading = styled.h4`
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #000;
  font-size: 2rem;
`;

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.59);

  cursor: pointer;

  transition: all 0.15s ease;

  span:hover {
    color: ${(props) => props.theme.orange};
  }

  @media (max-width: 735px) {
    &:nth-child(2) {
      display: none;
    }

    &:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 550px) {
    &:nth-child(3) {
      display: block;
    }

    &:nth-child(1) {
      display: block;
    }

    &:first-child {
      display: none;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.orange};
  }

  span {
    font-size: 1.7rem;
    word-break: break-all;
  }
`;

export const News = ({ data, title }) => {
  return (
    <NewsContainer>
      <p>{new Date().toDateString()}</p>
      <span>{title}</span>
    </NewsContainer>
  );
};

export const LowerFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 4rem;
    width: 5rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 5rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.orange};
    border-radius: 50%;
    margin-right: 2rem;
    padding: 0.5rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const Facebook = styled(CgFacebook)`
  font-size: 3rem;
`;

export const Instagram = styled(AiOutlineInstagram)`
  font-size: 3rem;
`;

export const Twitter = styled(AiOutlineTwitter)`
  font-size: 3rem;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 18rem;
  height: 16rem;
  background-color: red;
  margin-top: -31rem;
  background-color: ${(props) => props.theme.primary};
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-top: -30rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10rem;
  }

  h4 {
    font-size: 2.7rem;
    letter-spacing: 2px;
    margin-top: 1rem;
  }

  p {
    font-size: 1.3rem;
    letter-spacing: 1.3px;
    text-transform: uppercase;
  }
`;
