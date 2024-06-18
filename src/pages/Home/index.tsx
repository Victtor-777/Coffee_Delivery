import { useCart } from "../../hooks/useCart";
import { Coffees } from "./Components/Coffees";
import { Hero } from "./Components/Hero";

export function HomePage() {
  const { cartItems } = useCart();

  return (
    <div>
      <Hero />
      <Coffees />
    </div>
  );
}
