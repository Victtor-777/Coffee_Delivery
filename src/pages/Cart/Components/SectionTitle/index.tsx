import { ReactNode } from "react";
import { SectionTitleContainer } from "./styled";
import { RegularText } from "../../../../Components/Typography";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  );
}
