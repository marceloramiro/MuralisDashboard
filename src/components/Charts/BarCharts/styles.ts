import styled from "styled-components";

export const MainContainer = styled.div`
  max-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.light_100};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.dark_100};
  margin-left: 28px;
  font-weight: 500;
`;

export const LegendText = styled.span`
  color: ${({ theme }) => theme.colors.dark_100};
  font-weight: bold;
`;
