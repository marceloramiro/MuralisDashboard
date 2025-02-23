import { MainContainer } from "./styles";

interface ContentContainerProps {
  children?: React.ReactNode;
  isSidebarOpen?: boolean;
}

function ContentContainer({
  isSidebarOpen = true,
  children,
}: ContentContainerProps) {
  return (
    <MainContainer isSidebarOpen={isSidebarOpen}>{children}</MainContainer>
  );
}

export { ContentContainer };
