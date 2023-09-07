import { ConteudoU, MidleText, SectionsContent, TitleArticle } from "./styles";
import Frame from "../../assets/Frame.png";
import lupa from "../../assets/lupa.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";

export const CardTabs = () => {
  return (
    <>
      <TitleArticle>O que está procurando?</TitleArticle>
      <ConteudoU>
        <SectionsContent>
          <div>
            <img src={Frame} alt="frame" />
          </div>

          <div>
            <MidleText>
              <span>Plano de carreira</span>
              <p>Veja como você pode avançar</p>
            </MidleText>
          </div>
        </SectionsContent>
        <SectionsContent>
          <div>
            <img src={lupa} alt="frame" />
          </div>

          <div>
            <MidleText>
              <span>Vagas</span>
              <p>Temos 8 vagas disponíveis</p>
            </MidleText>
          </div>
        </SectionsContent>
        <SectionsContent>
          <div>
            <img src={frame2} alt="frame" />
          </div>

          <div>
            <MidleText>
              <span>Processos</span>
              <p>Veja por aqui todos os nossos POP</p>
            </MidleText>
          </div>
        </SectionsContent>
        <SectionsContent>
          <div>
            <img src={frame3} alt="frame" />
          </div>

          <div>
            <MidleText>
              <span>PowerBI</span>
              <p>Veja o PowerBI da Colli&Co</p>
            </MidleText>
          </div>
        </SectionsContent>
      </ConteudoU>
    </>
  );
};
