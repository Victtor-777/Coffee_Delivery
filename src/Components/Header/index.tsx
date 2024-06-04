import {
  CartButton,
  CartContainer,
  HeaderContainer,
  LocalButton,
  LogoContainer,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <LogoContainer>
          <img src={Logo} alt="Coffee Delivery Logo" />
        </LogoContainer>

        <CartContainer>
          <LocalButton>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocalButton>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </CartContainer>
      </div>
    </HeaderContainer>
  );
}
