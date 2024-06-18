import { RegularText } from "../../../../Components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE);
  const formatedItemsTotal = formatMoney(cartItemsTotal);
  const formatedCartTotal = formatMoney(cartTotal);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formatedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formatedCartTotal}
        </RegularText>
      </div>
    </ConfirmationSectionContainer>
  );
}
