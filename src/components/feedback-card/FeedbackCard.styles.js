import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;

  img {
    width: 30rem;
    margin-right: 10rem;

    @media (max-width: 780px) {
      margin-right: 0;
    }
  }

  @media (max-width: 1155px) {
    width: 80%;
  }

  @media (max-width: 880px) {
    width: 90%;
  }

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    font-style: italic;
    color: ${(props) => props.theme.secondaryBlack};
    font-size: 3.3rem;
    font-weight: 300;
    word-break: keep-all;
    word-spacing: 2px;

    @media (max-width: 1010px) {
      font-size: 2.8rem;
    }

    @media (max-width: 780px) {
      text-align: center;
      margin-top: 4rem;
    }

    @media (max-width: 550px) {
      font-size: 2.6rem;
    }
  }
`;

export const InfoContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  h4 {
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
    font-size: 1.7rem;
    font-weight: 900;
  }

  span {
    font-style: normal;
    font-family: "Open Sans", sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    text-transform: uppercase;
    word-spacing: 3px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.orange};
  }

  @media (max-width: 780px) {
    text-align: center;
    margin-top: 2rem;
  }
`;
