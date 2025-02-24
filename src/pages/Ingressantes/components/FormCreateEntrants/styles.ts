import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.light_100};
  border: 2px solid ${({ theme }) => theme.colors.dark_blue_70};
  border-radius: 4px;
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light_blue_50};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light_100};
  font-size: 24px;
  font-weight: 500;
  margin: 4px;
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.light_100};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.light_100};
`;
