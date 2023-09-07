import {
  ContainerSidebar,
  DescriptionPerfil,
  PerfilImage,
  PerfilSection,
} from "./styles";
import mateus from "../../assets/mateus.jpg";
import {
  CellSignalFull,
  ChartLineUp,
  GearSix,
  HouseLine,
  MagnifyingGlass,
} from "phosphor-react";

export function Sidebar() {
  return (
    <ContainerSidebar>
      <PerfilImage>
        <img src={mateus} alt="foto" />
      </PerfilImage>

      <PerfilSection>
        <span>Mateus Bolito</span>
        <p>Desenvolvedor Web</p>
        <h4>V4</h4>
      </PerfilSection>

      <DescriptionPerfil>
        <span>
          <HouseLine size={20} />
          inicio
        </span>
      </DescriptionPerfil>
      <DescriptionPerfil>
        <span>
          <ChartLineUp size={32} />
          Plano de Carreira
        </span>
      </DescriptionPerfil>
      <DescriptionPerfil>
        <span>
          <MagnifyingGlass size={14} />
          Vagas
        </span>
      </DescriptionPerfil>
      <DescriptionPerfil>
        <span>
          <GearSix size={32} />
          Processos
        </span>
      </DescriptionPerfil>
      <DescriptionPerfil>
        <span>
          <CellSignalFull size={32} />
          PowerBI
        </span>
      </DescriptionPerfil>
    </ContainerSidebar>
  );
}
