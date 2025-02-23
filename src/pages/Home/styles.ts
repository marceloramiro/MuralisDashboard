import styled from "styled-components";

interface CardProps {
  color?: string;
}

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 32px;
  padding-bottom: 32px;
  max-width: 1240px;
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

export const Card = styled.div<CardProps>`
  padding: 16px;
  height: 130px;
  min-width: 180px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.dark_blue_70};
`;

export const ChartContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row;
  flex-grow: 1;
`;

export const ChartCard = styled.div`
  height: 50%;
  width: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
  background-color: ${({ theme }) => theme.colors.light_100};
`;

export const ChartPieCard = styled.div`
  padding: 16px;
  width: 180px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.light_100};
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
`;
