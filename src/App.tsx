import { Body } from "./components/Body/Body";
import { Conteudo } from "./components/Conteudo/Conteudo";
import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progess";

import { Sidebar } from "./components/Sidebar/Sidebar";
import { GlobalStyle } from "./styles/GlobalStyle";

export function App() {
  return (
    <>
      <Header />
      <Progress />
      <Body />

      <Sidebar />

      <Conteudo />

      <GlobalStyle />
    </>
  );
}
