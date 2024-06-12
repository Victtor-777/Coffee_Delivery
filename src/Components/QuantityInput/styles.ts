import styled from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  gap: 0.25rem;
  border-radius: 6px;
  flex: 1;
  background: ${({ theme }) => theme.colors["base-button"]};

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({ type: "button" })`
  line-height: 0;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: 0.2s;

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }

  &:disabled {
    opacity: 0.4;
  }
`;
