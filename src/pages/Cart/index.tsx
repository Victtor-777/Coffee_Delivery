import { OrderForm } from "./Components/OrderForm";
import { SelectedCoffees } from "./Components/SelectedCoffees";
import { CartContainer } from "./styles";

export function CartPage() {
  return (
    <CartContainer className="container">
      <OrderForm />
      <SelectedCoffees />
    </CartContainer>
  );
}
