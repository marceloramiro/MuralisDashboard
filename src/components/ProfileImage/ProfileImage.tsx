import { MainContainer, Image, DefaultUserIcon, IconContainer } from "./styles";

interface ProfileImageProps {
  src?: string;
}

function ProfileImage({ src }: ProfileImageProps) {
  return (
    <MainContainer>
      {src && <Image src={src} alt="Profile" />}
      {!src && (
        <IconContainer>
          <DefaultUserIcon />
        </IconContainer>
      )}
    </MainContainer>
  );
}

export { ProfileImage };
