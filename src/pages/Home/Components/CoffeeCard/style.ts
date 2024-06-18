import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 0.375rem 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem;
    align-self: center;
    margin-top: -1.25rem;
  }

  > h3 {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes["text-bold-l"]};
    font-weight: 700;
    line-height: 130%;
  }

  > p {
    color: ${({ theme }) => theme.colors["base-label"]};
    text-align: center;
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
    font-weight: 400;
    line-height: 130%;

    margin: 0.5rem 0 2rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    color: ${({ theme }) => theme.colors["base-text"]};
    text-align: right;
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
    line-height: 130%;
  }

  > div span {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
    font-weight: 800;
    line-height: 130%;
  }
`;

export const CartWrapper = styled.div`
  width: 7.5rem;
  display: flex;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors["brand-purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};

    margin-left: 0.3rem;
    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors["brand-yellow"]};
    }
  }
`;
