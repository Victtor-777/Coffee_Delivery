import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { CardFooter, CartWrapper, CoffeeCardContainer, Tags } from "./style";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { QuantityInput } from "../../../../Components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

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
  const [quantity, setQuantity] = useState(1);

  const formattedPrice = formatMoney(coffee.price);
  const theme = useTheme();
  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
    setIsItemAdded(true);
  }

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

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
          R$ <span>{formattedPrice}</span>
        </div>

        <CartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart} disabled={isItemAdded}>
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
