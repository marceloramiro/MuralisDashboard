import { useEffect, useState } from "react";
import {
  PageContainer,
  SideBar,
  ContentContainer,
  Header,
  BarCharts,
  CardInfoBlock,
  DonutChart,
  AreaCharts,
  Calendar,
} from "@/components";
import {
  DashBoardContainer,
  CardsContainer,
  ChartContainer,
  ChartCardContainer,
  ChartCardPieContainer,
  ChartPieCard,
  ChartAreaContainer,
} from "./styles";

import {
  getPercentageEntrantsPerCourse,
  getTotalEntrantsPerMonthAndCourse,
  getTotalUsers,
} from "@/services/dashboard";

type PercentageEntrantsPerCourse = {
  course: string;
  value: number;
};

type TotalEntrantsPerMonthAndCourse = {
  date: string;
  [key: string]: number | string;
};

function Home() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [percentageEntrantsPerCourse, setPercentageEntrantsPerCourse] =
    useState<PercentageEntrantsPerCourse[]>([]);
  const [totalEntrantsPerMonthAndCourse, setTotalEntrantsPerMonthAndCourse] =
    useState<TotalEntrantsPerMonthAndCourse[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((open) => !open);
  };

  const handleGetTotalUsers = async () => {
    try {
      const totalUsersResponse = await getTotalUsers();
      setTotalUsers(totalUsersResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetPercentageEntrantsPerCourse = async () => {
    try {
      const percentageEntrantsPerCourseResponse =
        await getPercentageEntrantsPerCourse();
      setPercentageEntrantsPerCourse(() => [
        ...percentageEntrantsPerCourseResponse.data,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetTotalEntrantsPerMonthAndCourse = async () => {
    try {
      const totalEntrantsPerMonthAndCourseResponse =
        await getTotalEntrantsPerMonthAndCourse();
      setTotalEntrantsPerMonthAndCourse(() => [
        ...totalEntrantsPerMonthAndCourseResponse.data,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetTotalUsers();
    handleGetPercentageEntrantsPerCourse();
    handleGetTotalEntrantsPerMonthAndCourse();
  }, []);

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
              value={totalUsers}
            />
          </CardsContainer>
          <ChartContainer>
            <ChartCardContainer>
              <BarCharts data={totalEntrantsPerMonthAndCourse} />
              <ChartAreaContainer>
                <AreaCharts data={totalEntrantsPerMonthAndCourse} />
                <Calendar />
              </ChartAreaContainer>
            </ChartCardContainer>
            <ChartCardPieContainer>
              <ChartPieCard>
                <DonutChart data={percentageEntrantsPerCourse} />
              </ChartPieCard>
            </ChartCardPieContainer>
          </ChartContainer>
        </DashBoardContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export { Home };
