import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { CardFooter, CartWrapper, CoffeeCardContainer, Tags } from "./style";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { QuantityInput } from "../../../../Components/QuantityInput";

export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [isItemAdded, setIsItemAdded] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>

      <CardFooter>
        <div>
          R$ <span>{coffee.price.toFixed(2)}</span>
        </div>

        <CartWrapper>
          <QuantityInput />
          <button disabled={isItemAdded}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors["base-card"]}
              />
            ) : (
              <ShoppingCart
                weight="fill"
                size={22}
                color={theme.colors["base-card"]}
              />
            )}
          </button>
        </CartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
