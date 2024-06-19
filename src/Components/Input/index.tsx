import { InputHTMLAttributes, forwardRef } from "react";
import {
  InputStyled,
  InputStyledContainer,
  InputWrapper,
  RightText,
} from "./styles";
import { RegularText } from "../Typography";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyledContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyledContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    );
  }
);
