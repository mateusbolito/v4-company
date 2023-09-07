import { BodyContainer, ContentPillar } from "./styles";

interface IPillar {
  urlBackground: string;
  pillar: string;
}

export function BannerPillar({ urlBackground, pillar }: IPillar) {
  return (
    <BodyContainer>
      <div>
        <img src={urlBackground} alt="mid" />
        <ContentPillar>
          <h2>Bem vindo ao pilar</h2>
          <h1>{pillar}</h1>
        </ContentPillar>
      </div>
    </BodyContainer>
  );
}
