import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  padding: 0 1rem;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

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
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 999px;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors["base-white"]};
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
