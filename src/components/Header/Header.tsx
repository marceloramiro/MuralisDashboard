import { IconButton } from "@mui/material";
import { MainContainer, MenuIcon, Title } from "./styles";

interface HeaderProps {
  onMenuClick?: () => void;
  title: string;
}
function Header({ onMenuClick, title }: HeaderProps) {
  return (
    <MainContainer>
      <Title>{title}</Title>
      <IconButton onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
    </MainContainer>
  );
}

export { Header };
