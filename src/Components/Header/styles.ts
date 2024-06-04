import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 6.5rem;
  padding: 0 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.a`
  cursor: pointer;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 0;
`;

export const LocalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 0.375rem;

  background: ${({ theme }) => theme.colors["brand-purple-light"]};

  color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  font-weight: 400;
  line-height: 130%;
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 0.375rem;

  background: ${({ theme }) => theme.colors["brand-yellow-light"]};
  color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
`;
