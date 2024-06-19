import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { InfoWithIcon } from "../../Components/InfoWithIcon";
import { RegularText, TitleText } from "../../Components/Typography";
import { OrderConfirmedContainer, OrderDetailsConatiner } from "./styles";
import deliveryImg from "/public/images/delivery.svg";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Cart";
import { paymentMethods } from "../Cart/Components/OrderForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function ConfirmedPage() {
  const { colors } = useTheme();
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [navigate, state]);

  if (!state) return <></>;

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
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsConatiner>
        <img src={deliveryImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
