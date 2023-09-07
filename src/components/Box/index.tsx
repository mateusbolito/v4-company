import { ReactNode } from "react";
import { Box } from "./styles";

interface IBox {
  children: ReactNode;
}
export const BoxFlex = ({ children }: IBox) => {
  return <Box>{children}</Box>;
};
