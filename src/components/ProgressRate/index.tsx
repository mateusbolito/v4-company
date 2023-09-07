import {
  ContainerProgress,
  ContainerProgressBar,
  ContainerSteps,
  ContainerTitle,
  ProgressBar,
} from "./styles";

interface IProgress {
  type: string;
  porc: string;
  fraction?: string;
}

interface IProgressRate {
  title: string;
  step?: string;
  item: IProgress[];
}

export const ProgressRate = ({ title, step, item }: IProgressRate) => {
  return (
    <ContainerProgress>
      <ContainerTitle>
        <h3>{title}</h3>
        {step && <span>{step}</span>}
      </ContainerTitle>
      {item.map((itens) => {
        return (
          <ContainerSteps>
            <div>
              <h3>{itens?.type}</h3>
              {itens?.fraction ? (
                <p>{itens?.fraction}</p>
              ) : (
                <p>{itens?.porc} concluída</p>
              )}
            </div>
            <ContainerProgressBar>
              <ProgressBar porc={itens?.porc} />
            </ContainerProgressBar>
          </ContainerSteps>
        );
      })}
    </ContainerProgress>
  );
};
