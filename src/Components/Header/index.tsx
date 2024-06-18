import {
  CartButton,
  CartContainer,
  HeaderContainer,
  LocalButton,
  LogoContainer,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { cartQuantity } = useCart();

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <HeaderContainer className={`${isScrolled ? "shadow" : ""}`}>
      <div className="container">
        <NavLink to={"/"}>
          <LogoContainer>
            <img src={Logo} alt="Coffee Delivery Logo" />
          </LogoContainer>
        </NavLink>

        <CartContainer>
          <LocalButton>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocalButton>
          <NavLink to={"/cart"}>
            <CartButton>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </CartContainer>
      </div>
    </HeaderContainer>
  );
}
