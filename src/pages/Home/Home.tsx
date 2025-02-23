import { useState } from "react";
import { PageContainer, SideBar, ContentContainer, Header } from "@/components";
import {
  Card,
  DashBoardContainer,
  CardsContainer,
  ChartContainer,
  ChartCard,
  ChartCardContainer,
  ChartCardPieContainer,
  ChartPieCard,
} from "./styles";
import { theme } from "@/theme";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((open) => !open);
  };

  return (
    <PageContainer>
      <SideBar isOpen={isSidebarOpen} />
      <ContentContainer isSidebarOpen={isSidebarOpen}>
        <Header onMenuClick={handleToggleSidebar} title="CONTROLE GERAL" />
        <DashBoardContainer>
          <CardsContainer>
            <Card />
            <Card />
            <Card />
            <Card color={theme.colors.light_100} />
          </CardsContainer>
          <ChartContainer>
            <ChartCardContainer>
              <ChartCard />
              <ChartCard />
            </ChartCardContainer>
            <ChartCardPieContainer>
              <ChartPieCard />
            </ChartCardPieContainer>
          </ChartContainer>
        </DashBoardContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export { Home };
