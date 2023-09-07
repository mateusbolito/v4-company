import { ContainerHeader, GrennColor } from "./styles";
import v4logo from "../../assets/v4logo.svg";
import { ImSearch } from "react-icons/im";
import { FaBell } from "react-icons/fa";

export function Header() {
  return (
    <ContainerHeader>
      <img src={v4logo} alt="logo v4" />

      <div>
        <span>
          <ImSearch size={14} />
        </span>
        <span>
          <FaBell size={14} />
        </span>
        <GrennColor></GrennColor>
      </div>
    </ContainerHeader>
  );
}
