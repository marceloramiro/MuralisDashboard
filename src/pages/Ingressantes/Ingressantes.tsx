import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { ContentContainer, Header, PageContainer, SideBar } from "@/components";
import { CreateEntrantButtonContainer, IconButton, Title } from "./styles";

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
        <CreateEntrantButtonContainer>
          <IconButton size="large">
            <BiPlus />
          </IconButton>
          <Title>Cadastrar novo ingressante</Title>
        </CreateEntrantButtonContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export { Ingressantes };
