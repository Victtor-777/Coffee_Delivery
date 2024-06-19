import { FormProvider, useForm } from "react-hook-form";
import { OrderForm } from "./Components/OrderForm";
import { SelectedCoffees } from "./Components/SelectedCoffees";
import { CartContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum paymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(paymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CartPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/confirmed", {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CartContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <OrderForm />
        <SelectedCoffees />
      </CartContainer>
    </FormProvider>
  );
}
