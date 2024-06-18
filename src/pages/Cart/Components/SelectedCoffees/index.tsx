import { TitleText } from "../../../../Components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import {
  ButtonContainer,
  DetailsContainer,
  SelectedCoffeesContainer,
} from "./styles";

export function SelectedCoffees() {
  const { cartItems, cartQuantity } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => {
          return <CoffeeCartCard key={item.id} coffee={item} />;
        })}

        <ConfirmationSection />
        <ButtonContainer disabled={cartQuantity <= 0}>
          Confirmar Pedido
        </ButtonContainer>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
