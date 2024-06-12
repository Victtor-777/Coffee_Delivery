import { Minus, Plus } from "@phosphor-icons/react";
import { IconWrapper, QuantityContainer } from "./styles";

export function QuantityInput() {
  return (
    <QuantityContainer>
      <IconWrapper>
        <Minus size={16} />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={16} />
      </IconWrapper>
    </QuantityContainer>
  );
}
