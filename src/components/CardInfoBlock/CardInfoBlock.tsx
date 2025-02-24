import { theme } from "@/theme";
import { Card, Title, Text } from "./styles";

interface CardInfoBlockProps {
  title?: string;
  value?: number;
  color?: keyof typeof theme.colors;
}

function CardInfoBlock({
  title,
  value,
  color = "dark_blue_70",
}: CardInfoBlockProps) {
  return (
    <Card color={theme.colors[color]}>
      <Title>{title}</Title>
      <Text>{value}</Text>
    </Card>
  );
}

export { CardInfoBlock };
