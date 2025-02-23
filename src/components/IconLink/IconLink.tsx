import { JSX } from "react";
import { IconContainer, MainContainer, Text } from "./styles";
import { useNavigate } from "react-router";

interface IconLinkProps {
  text: string;
  icon: JSX.Element;
  isActive?: boolean;
  path: string;
}

function IconLink({ text, icon, isActive, path }: IconLinkProps) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(path);
  };
  return (
    <MainContainer isActive={isActive} onClick={handleNavigation}>
      <IconContainer>{icon}</IconContainer>
      <Text>{text}</Text>
    </MainContainer>
  );
}

export { IconLink };
