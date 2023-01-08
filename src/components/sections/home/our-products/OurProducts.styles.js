import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* margin-bottom: 50rem; */
`;

export const Wrapper = styled.div`
  padding: 10rem 0;
`;

export const HeadingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 4rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 900;
  }

  p {
    font-size: 1.8rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    margin-top: 1rem;
    color: ${(props) => props.theme.secondaryBlack};
    @media (max-width: 395px) {
      padding: 0 1rem;
    }
  }
`;

export const ProductsSection = styled.div`
  margin-top: 7rem;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
