import { BodyContainer, PlanosContainer } from "./styles";
import mid from "../../assets/mid.png";

export function Body() {
  return (
    <BodyContainer>
      <div>
        <img src={mid} alt="mid" />

        <h2>Bem-vindo ao pilar</h2>
        <h1>Profissional</h1>

        <PlanosContainer>
          <div>
            <h1>O que está procurando?</h1>
          </div>
        </PlanosContainer>
      </div>
    </BodyContainer>
  );
}
