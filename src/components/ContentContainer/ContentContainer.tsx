import { MainContainer } from "./styles";

interface ContentContainerProps {
  children?: React.ReactNode;
}

function ContentContainer({ children }: ContentContainerProps) {
  return <MainContainer>{children}</MainContainer>;
}

export { ContentContainer };
