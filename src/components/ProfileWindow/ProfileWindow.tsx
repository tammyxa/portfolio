import { PopUpWindow } from "../../modules";
import styled from "styled-components";

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
`;

const ProfilePicture = styled.div`
  width: 2/3;
`;

const DescriptionContainer = styled.div`
  text-align: center;
  color: black;
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
          <img src="/email.png" />
          <img src="/location.png" />
          <img src="/instagram.png" />
        </LogoContainer>
        <ProfilePicture>
          <img src="Little_Laboon.png" />
        </ProfilePicture>
        <LogoContainer>
          <img src="/linkedin.png" />
          <img src="/indeed.png" />
          <img src="/github.png" />
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
