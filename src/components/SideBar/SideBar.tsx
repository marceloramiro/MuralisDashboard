import { ProfileImage, IconLink } from "@/components";
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

function SideBar() {
  const location = useLocation();

  return (
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
          isActive={location.pathname === "/home" || location.pathname === "/"}
        />
        <IconLink
          icon={<IconFolder />}
          text="ingressantes"
          path={"/ingressantes"}
          isActive={location.pathname === "/ingressantes"}
        />
      </LinksContainer>
    </MainContainer>
  );
}

export { SideBar };
