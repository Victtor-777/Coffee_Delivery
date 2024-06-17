import styled from "styled-components";
import { SectionBase } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBase)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  border-radius: 6px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors["base-white"]};
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};

  background: ${({ theme }) => theme.colors["brand-yellow"]};

  transition: 0.2s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
