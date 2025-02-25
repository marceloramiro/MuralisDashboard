import styled from "styled-components";

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 32px;
  max-width: 944px;
  width: 100%;
  margin: 0 auto;
  margin-top: 32px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
`;

export const ChartContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row;
  flex-grow: 1;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ChartCard = styled.div`
  padding: 16px;
  height: 100%;
  width: calc(100% - 16px);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
  background-color: ${({ theme }) => theme.colors.light_100};
`;

export const ChartPieCard = styled.div`
  padding: 16px;
  width: 180px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.light_100};

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ChartCardContainer = styled.div`
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: column;
`;
export const ChartCardPieContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 960px) {
    justify-content: flex-start;
    padding-bottom: 24px;
  }
`;

export const ChartAreaContainer = styled.div`
  max-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.light_100};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
  padding: 8px;
`;
