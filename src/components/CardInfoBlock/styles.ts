import styled from "styled-components";

interface CardProps {
  color?: string;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 130px;
  width: 180px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
  background-color: ${({ color }) => color};
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export const Text = styled.p`
  display: flex;
  flex-grow: 1;
  font-size: 34px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
