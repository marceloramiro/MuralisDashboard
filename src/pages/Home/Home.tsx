import { SideBar } from "@/components";
import { ContentContainer, MainContainer } from "./styles";

function Home() {
  return (
    <MainContainer>
      <SideBar />
      <ContentContainer />
    </MainContainer>
  );
}

export { Home };
