import styled from "styled-components";

export const CoffeesContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 2rem auto;
  padding-bottom: 4rem;

  h1 {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    font-weight: 800;
    line-height: 130%;
    line-height: 130%;

    margin-bottom: 3.3rem;
  }
`;

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`;
