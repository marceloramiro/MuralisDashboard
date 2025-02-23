import { MainContainer } from "./styles";

interface PageContainerProps {
  children: React.ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return <MainContainer>{children}</MainContainer>;
}

export { PageContainer };
