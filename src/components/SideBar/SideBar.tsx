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
import { useUser } from "@/hooks";

interface SideBarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function SideBar({ isOpen = true, onClose }: SideBarProps) {
  const location = useLocation();
  const { user } = useUser();

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
      onClose={onClose}
    >
      <MainContainer>
        <ProfileImage />
        <UserInfoContainer>
          <UserName>{user.name}</UserName>
          <UserEmail> {user.email} </UserEmail>
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
