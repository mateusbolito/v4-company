import { BannerPillar } from "../../components/BannerPillar";
import { Header } from "../../components/Header";
import { CardTabs } from "../../components/CardTabs";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import mid from "../../assets/mid.png";
import { ContainerHome, SectionHome } from "./styles";
import { BoxFlex } from "../../components/Box";
import { ProgressRate } from "../../components/ProgressRate";
import { mockNews, mockProgress, mockSkills } from "../../hooks/mocks";
import { ArticleNews } from "../../components/ArticleNews";

export const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <BoxFlex>
        <Sidebar />
        <SectionHome>
          <BannerPillar pillar="Profissional" urlBackground={mid} />
          <CardTabs />
          <h1
            style={{ color: "#fff", marginBottom: "18px", marginTop: "28px" }}
          >
            Avisos importantes
          </h1>
          {mockNews.map((item) => {
            return (
              <ArticleNews
                description={item?.description}
                title={item?.title}
                url={item?.url}
              />
            );
          })}
        </SectionHome>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ProgressRate step="V3" title="Meu progresso" item={mockProgress} />
          <ProgressRate title="Radar de habilidades" item={mockSkills} />
        </div>
      </BoxFlex>
    </ContainerHome>
  );
};
