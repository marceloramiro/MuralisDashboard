import { ProfileImage, IconLink, SIDEBAR_WIDTH } from "@/components";
import {
  MainContainer,
  UserEmail,
  UserInfoContainer,
  UserName,
  LinksContainer,
  IconHome,
  IconFolder,
} from "./styles";
import { useLocation } from "react-router";
import { Drawer } from "@mui/material";
import { theme } from "@/theme";

interface SideBarProps {
  isOpen?: boolean;
}

function SideBar({ isOpen = true }: SideBarProps) {
  const location = useLocation();

  return (
    <Drawer
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        backgroundColor: theme.colors.light_50,
        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant={"persistent"}
      anchor="left"
      open={isOpen}
    >
      <MainContainer>
        <ProfileImage />
        <UserInfoContainer>
          <UserName>Silva Junior</UserName>
          <UserEmail> silvajunior@email.com </UserEmail>
        </UserInfoContainer>
        <LinksContainer>
          <IconLink
            icon={<IconHome />}
            text="home"
            path={"/home"}
            isActive={
              location.pathname === "/home" || location.pathname === "/"
            }
          />
          <IconLink
            icon={<IconFolder />}
            text="ingressantes"
            path={"/ingressantes"}
            isActive={location.pathname === "/ingressantes"}
          />
        </LinksContainer>
      </MainContainer>
    </Drawer>
  );
}

export { SideBar };
