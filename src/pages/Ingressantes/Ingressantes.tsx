import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Modal } from "@mui/material";
import { ContentContainer, Header, PageContainer, SideBar } from "@/components";
import { FormCreateEntrants } from "./components";
import { CreateEntrantButtonContainer, IconButton, Title } from "./styles";

function Ingressantes() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((open) => !open);
  };

  const handleToggleModal = () => {
    setIsModalOpen((open) => !open);
  };

  return (
    <PageContainer>
      <SideBar isOpen={isSidebarOpen} />
      <ContentContainer isSidebarOpen={isSidebarOpen}>
        <Header onMenuClick={handleToggleSidebar} title="INGRESSANTES" />
        <CreateEntrantButtonContainer>
          <IconButton size="large" onClick={handleToggleModal}>
            <BiPlus />
          </IconButton>
          <Title>Cadastrar novo ingressante</Title>
        </CreateEntrantButtonContainer>
      </ContentContainer>
      <Modal
        open={isModalOpen}
        onClose={handleToggleModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormCreateEntrants onClose={handleToggleModal} />
      </Modal>
    </PageContainer>
  );
}

export { Ingressantes };
