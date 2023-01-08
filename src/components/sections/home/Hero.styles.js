import styled from "styled-components";
import hero from "../../../asstes/hero.jpg";

export const Conatiner = styled.section`
  width: 100%;
  height: 60rem;

  display: flex;
`;

export const LeftSection = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.primary};
  color: #ffffff;

  @media (max-width: 1700px) {
    flex: 1.2;
  }

  @media (max-width: 1606px) {
    flex: 1.3;
  }

  @media (max-width: 1530px) {
    flex: 1.4;
  }

  @media (max-width: 1464px) {
    flex: 1.5;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 12rem 11rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1227px) {
    padding: 12rem 8rem;
  }

  @media (max-width: 1087px) {
    padding: 12rem 6rem;
  }

  @media (max-width: 994px) {
    padding: 12rem 4rem;
  }

  @media (max-width: 900px) {
    padding: 14rem 2rem;
  }

  @media (max-width: 736px) {
    padding: 12rem 15rem;
  }

  @media (max-width: 708px) {
    padding: 12rem 10rem;
  }

  @media (max-width: 609px) {
    padding: 14rem 8rem;
  }

  @media (max-width: 570px) {
    padding: 14rem 6rem;
  }

  @media (max-width: 504px) {
    padding: 14rem 4rem;
  }

  @media (max-width: 463px) {
    padding: 14rem 2rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  word-spacing: 1rem;
  letter-spacing: 0.5rem;

  @media (max-width: 807px) {
    font-size: 1.5rem;
  }

  @media (max-width: 736px) {
    font-size: 2rem;
  }

  @media (max-width: 463px) {
    font-size: 1.6rem;
  }
`;

export const Heading = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 900;

  @media (max-width: 1406px) {
    font-size: 4.5rem;
  }

  @media (max-width: 1316px) {
    font-size: 4rem;
  }

  @media (max-width: 807px) {
    font-size: 3.5rem;
  }

  @media (max-width: 736px) {
    font-size: 5rem;
  }

  @media (max-width: 463px) {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  word-spacing: 0.5rem;
  letter-spacing: 0.1rem;
  line-height: 1.7;
  margin: 1rem 0;

  @media (max-width: 1406px) {
    font-size: 1.4rem;
    /* margin-bottom: 2rem; */
  }

  @media (max-width: 807px) {
    font-size: 1.5rem;
  }

  @media (max-width: 736px) {
    font-size: 1.6rem;
  }

  @media (max-width: 463px) {
    font-size: 1.4rem;
  }
`;

export const ButtonContainer = styled.div``;

export const RightSection = styled.div`
  flex: 2;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;

  @media (max-width: 736px) {
    display: none;
  }
`;
