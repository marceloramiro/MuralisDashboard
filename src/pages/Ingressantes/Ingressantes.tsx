import { useState } from "react";
import { ContentContainer, Header, PageContainer, SideBar } from "@/components";

function Ingressantes() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((open) => !open);
  };
  return (
    <PageContainer>
      <SideBar isOpen={isSidebarOpen} />
      <ContentContainer isSidebarOpen={isSidebarOpen}>
        <Header onMenuClick={handleToggleSidebar} title="INGRESSANTES" />
      </ContentContainer>
    </PageContainer>
  );
}

export { Ingressantes };
