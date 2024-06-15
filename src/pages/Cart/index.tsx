import { OrderForm } from "./Components/OrderForm";
import { CartContainer } from "./styles";

export function CartPage() {
  return (
    <CartContainer className="container">
      <OrderForm />
    </CartContainer>
  );
}
