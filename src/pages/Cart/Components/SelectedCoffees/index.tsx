import { TitleText } from "../../../../Components/Typography";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import {
  ButtonContainer,
  DetailsContainer,
  SelectedCoffeesContainer,
} from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
        <ButtonContainer>Confirmar Pedido</ButtonContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
