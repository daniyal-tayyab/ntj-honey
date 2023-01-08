import styled from "styled-components";

export const CategoryContainer = styled.section`
  width: 80%;
  height: 80%;

  margin: auto;

  display: flex;

  transition: all 5s ease;
  cursor: pointer;

  &:hover {
    img {
      transform: translateY(-4px);
    }

    span {
      color: ${(props) => props.theme.orange};
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
    height: 15rem;
    clip-path: circle();
    background-color: lightblue;
    margin-right: 2rem;
    transition: all 0.15s ease;

    @media (max-width: 550px) {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 550px) {
    align-items: center;
  }
`;

export const Title = styled.span`
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;

  @media (max-width: 550px) {
    font-size: 2.7rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
  word-spacing: 0.5rem;
  color: ${(props) => props.theme.secondaryBlack};

  @media (max-width: 550px) {
    text-align: center;
  }
`;

export const LearnMore = styled.p`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;

  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: all 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.8;
  }

  @media (max-width: 550px) {
    /* font-size: 1.1rem; */
  }
`;
