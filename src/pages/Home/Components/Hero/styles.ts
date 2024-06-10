import styled from "styled-components";
import background from "../../../../assets/Background.png";
import { rgba } from "polished";

export const HeroSectionBg = styled.section`
  background: ${({ theme }) => `url(${background}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.1)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};

  background-size: cover;
  width: 100%;
  height: 34rem;
`;

export const HeroContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 0;
`;

export const HeroInfo = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors["base-title"]};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes["title-title-xl"]};
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-size: ${({ theme }) => theme.textSizes["text-bold-l"]};
    line-height: 130%;

    margin-bottom: 4rem;
  }
`;

export const InfoItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 8px;
      border-radius: 50%;
    }

    span {
      color: ${({ theme }) => theme.colors["base-text"]};
      line-height: 130%;
    }
  }
`;

export const HeroImg = styled.div`
  img {
    width: 29.75rem;
  }
`;
