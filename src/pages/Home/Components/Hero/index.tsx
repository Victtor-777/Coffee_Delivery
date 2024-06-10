import {
  HeroContainer,
  HeroImg,
  HeroInfo,
  HeroSectionBg,
  InfoItems,
} from "./styles";
import HomeImg from "../../../../assets/Home_image.png";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

export function Hero() {
  const theme = useTheme();

  return (
    <HeroSectionBg>
      <div className="container">
        <HeroContainer>
          <HeroInfo>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <InfoItems>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors["base-background"]}
                  style={{ backgroundColor: theme.colors["brand-yellow-dark"] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors["base-background"]}
                  style={{ backgroundColor: theme.colors["base-text"] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors["base-background"]}
                  style={{ backgroundColor: theme.colors["brand-yellow"] }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors["base-background"]}
                  style={{ backgroundColor: theme.colors["brand-purple"] }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </InfoItems>
          </HeroInfo>

          <HeroImg>
            <img src={HomeImg} />
          </HeroImg>
        </HeroContainer>
      </div>
    </HeroSectionBg>
  );
}
