import { ProfileImage } from "@/components";
import {
  MainContainer,
  UserEmail,
  UserInfoContainer,
  UserName,
  LinksContainer,
} from "./styles";

function SideBar() {
  return (
    <MainContainer>
      <ProfileImage />
      <UserInfoContainer>
        <UserName>Silva Junior</UserName>
        <UserEmail> silvajunior@email.com </UserEmail>
      </UserInfoContainer>
      <LinksContainer></LinksContainer>
    </MainContainer>
  );
}

export { SideBar };
