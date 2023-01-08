import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: auto;

  margin-bottom: 10rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const ImageConatiner = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "Open Sans", sans-serif;

  h4 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 900;

    @media (max-width: 1024px) {
      font-size: 3.5rem;
    }

    @media (max-width: 1024px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.7rem;
    margin: 1rem 0;
    width: 70%;
    font-weight: 300;

    @media (max-width: 1200px) {
      font-size: 1.4rem;
      width: 90%;
    }

    @media (max-width: 1024px) {
      width: 100%;
      font-size: 1.6rem;
    }

    @media (max-width: 900px) {
      width: 100%;
      font-size: 1.6rem;
    }

    @media (max-width: 750px) {
      font-size: 1.8rem;
      width: auto;
      text-align: center;
      padding: 0 0.5rem;
    }
  }

  div {
    width: 80%;
    display: flex;
    margin-top: 3rem;

    input {
      min-width: 60%;
      height: 100%;
      border: 1px solid ${(props) => props.theme.primary};
      padding: 0 1rem;
      font-size: 1.8rem;
      text-align: center;

      @media (max-width: 750px) {
        width: auto;
      }
    }

    button {
      border-radius: 0;
    }

    @media (max-width: 750px) {
      width: auto;
      text-align: center;
    }
  }

  @media (max-width: 750px) {
    align-items: center;
  }
`;
