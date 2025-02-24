import { useState } from "react";
import { theme } from "@/theme";
import {
  PageContainer,
  SideBar,
  ContentContainer,
  Header,
  BarCharts,
  CardInfoBlock,
} from "@/components";
import {
  DashBoardContainer,
  CardsContainer,
  ChartContainer,
  ChartCard,
  ChartCardContainer,
  ChartCardPieContainer,
  ChartPieCard,
} from "./styles";

const data = [
  {
    date: "2024-01-01",
    course_a: 4000,
    course_b: 2400,
  },
  {
    date: "2024-02-01",
    course_a: 3000,
    course_b: 1398,
  },
  {
    date: "2024-03-01",
    course_a: 2000,
    course_b: 9800,
  },
  {
    date: "2024-04-01",
    course_a: 2780,
    course_b: 3908,
  },
  {
    date: "2024-05-01",
    course_a: 1890,
    course_b: 4800,
  },
  {
    date: "2024-06-01",
    course_a: 2390,
    course_b: 3800,
  },
  {
    date: "2024-07-01",
    course_a: 3490,
    course_b: 4300,
  },
  {
    date: "2024-08-01",
    course_a: 3490,
    course_b: 4300,
  },
  {
    date: "2024-09-01",
    course_a: 3490,
    course_b: 4300,
  },
];

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
            <CardInfoBlock />
            <CardInfoBlock />
            <CardInfoBlock />
            <CardInfoBlock
              color={"light_100"}
              title="Total de Inscritos"
              value={1255}
            />
          </CardsContainer>
          <ChartContainer>
            <ChartCardContainer>
              <BarCharts data={data} />
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
