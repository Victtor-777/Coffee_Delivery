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
