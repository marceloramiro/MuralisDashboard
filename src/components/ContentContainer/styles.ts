import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.light_50};
`;
