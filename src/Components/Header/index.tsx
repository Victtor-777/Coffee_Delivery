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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
