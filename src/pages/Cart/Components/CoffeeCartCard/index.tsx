import { Trash } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../Components/QuantityInput";
import { RegularText } from "../../../../Components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import imgCoffee from "/public/images/coffees/americano.png";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={imgCoffee} alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9.90</p>
    </CoffeeCartCardContainer>
  );
}
