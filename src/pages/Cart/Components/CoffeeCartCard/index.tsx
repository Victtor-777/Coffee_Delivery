import { Trash } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../Components/QuantityInput";
import { RegularText } from "../../../../Components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(Number(coffee.id), "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(Number(coffee.id), "decrease");
  }

  function handleRemove() {
    removeCartItem(Number(coffee.id));
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.image} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.title}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              size="small"
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
}
