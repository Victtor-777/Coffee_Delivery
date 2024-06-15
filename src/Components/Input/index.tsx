import { InputHTMLAttributes } from "react";
import { InputStyledContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return <InputStyledContainer {...props}></InputStyledContainer>;
}
