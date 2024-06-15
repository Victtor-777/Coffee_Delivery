import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { TitleText } from "../../../../Components/Typography";
import { SectionTitle } from "../SectionTitle";
import { FormSectionContainer, OrderFormContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function OrderForm() {
  const theme = useTheme();

  return (
    <OrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={
            <MapPinLine color={theme.colors["brand-yellow-dark"]} size={22} />
          }
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={
            <CurrencyDollar color={theme.colors["brand-purple"]} size={22} />
          }
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </OrderFormContainer>
  );
}
