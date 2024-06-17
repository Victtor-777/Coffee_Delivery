import { Minus, Plus } from "@phosphor-icons/react";
import { IconWrapper, QuantityContainer } from "./styles";

interface QuantityInputProps {
  size?: "medium" | "small";
}

export function QuantityInput({ size = "medium" }: QuantityInputProps) {
  return (
    <QuantityContainer size={size}>
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
