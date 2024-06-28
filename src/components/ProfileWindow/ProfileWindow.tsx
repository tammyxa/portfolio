import { PopUpWindow } from "../../modules";
import styled from "styled-components";
import { Spaces } from "../../theme";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: 700;
  color: black;
  font-size: 36px;
`;

const Position = styled.div`
  font-weight: 700;
  color: black;
  font-size: 24px;
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
`;

const LogoContainer = styled.div`
  width: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${Spaces.lg};
  margin: 0 ${Spaces.md} 0 ${Spaces.md};
`;

const ProfilePicture = styled.div`
  width: 2/3;
  object-fit: contain;
`;

const DescriptionContainer = styled.div`
  text-align: center;
  color: black;
  margin: 0 ${Spaces.lg} 0 ${Spaces.lg};
`;

export const ProfileWindow = () => {
  return (
    <PopUpWindow>
      <Header>
        <Name>Tammy Xaypraseuth</Name>
        <Position>Recent Computer Science Graduate</Position>
      </Header>
      <ProfileContainer>
        <LogoContainer>
          <a href="mailto:txaypraseuth@gmail.com">
            <img src="/email.png" height="50px" />
          </a>
          <img src="/location.png" height="50px" />
          <a href="https://www.instagram.com/txayprizzle/">
            <img src="/instagram.png" height="50px" />
          </a>
        </LogoContainer>
        <ProfilePicture>
          <img src="ProfilePicture.jpg" height="100%" width="100%" />
        </ProfilePicture>
        <LogoContainer>
          <a href="https://www.linkedin.com/in/tammyx/">
            <img src="/linkedin.png" height="50px" />
          </a>
          <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage">
            <img src="/indeed.png" height="50px" />
          </a>
          <a href="https://github.com/tammyxa">
            <img src="/github.png" height="50px" />
          </a>
        </LogoContainer>
      </ProfileContainer>
      <DescriptionContainer>
        Hi! I’m a recent computer science graduate looking for experience in
        Designing and Development. I mainly use Java but I have experience using
        TypeScript, and ReactJS for web development. I’m passionate about the
        gaming industry and hope to be a game designer or programmer in the long
        run. I”m creative and resourceful and can learn things quickly. I”m
        eager to learn whatever need be to get me to my goal. :]
      </DescriptionContainer>
    </PopUpWindow>
  );
};
