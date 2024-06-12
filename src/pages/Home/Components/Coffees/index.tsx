import { CoffeeList, CoffeesContainer } from "./styles";

import { coffees } from "../../../../data/data.json";
import { CoffeeCard } from "../CoffeeCard";

export function Coffees() {
  return (
    <CoffeesContainer>
      <h1>Nossos cafés</h1>
      <CoffeeList>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </CoffeeList>
    </CoffeesContainer>
  );
}
