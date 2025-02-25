import styled from "styled-components";

export const LegendText = styled.span`
  color: ${({ theme }) => theme.colors.dark_100};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -15px;
  overflow: hidden;
`;
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light_50};
  margin-left: 100px;
`;
