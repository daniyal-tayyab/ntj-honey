import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 30rem; */
  padding: 4rem 0;

  background-color: #fff;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1309px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 4rem;
  }

  @media (max-width: 879px) {
    grid-template-columns: 1fr;
    row-gap: 6rem;
  }

  @media (max-width: 550px) {
    row-gap: 2rem;
  }
`;
