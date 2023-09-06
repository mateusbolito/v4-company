import { ContainerHeader, GrennColor } from "./styles";
import v4logo from "../../assets/v4logo.png";
import { BellRinging, MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <ContainerHeader>
      <img src={v4logo} alt="logo v4" />

      <div>
        <span>
          <MagnifyingGlass size={14} />
        </span>
        <span>
          <BellRinging size={14} />
        </span>
        <GrennColor></GrennColor>
      </div>
    </ContainerHeader>
  );
}
