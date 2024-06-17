import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { InfoWithIcon } from "../../Components/InfoWithIcon";
import { RegularText, TitleText } from "../../Components/Typography";
import { OrderConfirmedContainer, OrderDetailsConatiner } from "./styles";
import deliveryImg from "/public/images/delivery.svg";
import { useTheme } from "styled-components";

export function ConfirmedPage() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhuu! Pedido confirmado!</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsConatiner>
          <InfoWithIcon
            iconBg={colors["brand-purple"]}
            icon={<MapPin weight="fill" />}
            text={
              <RegularText>
                Entrega em Entrega em{" "}
                <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            iconBg={colors["brand-yellow"]}
            icon={<Clock weight="fill" />}
            text={
              <RegularText>
                Privisão de entrega
                <br />
                <strong>20min - 30min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            iconBg={colors["brand-yellow"]}
            icon={<CurrencyDollar weight="fill" />}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsConatiner>
        <img src={deliveryImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
