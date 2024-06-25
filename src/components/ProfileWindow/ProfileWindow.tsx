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

export const ProfileWindow = () => {
  return (
    <PopUpWindow>
      <Header>
        <Name>Tammy Xaypraseuth</Name>
        <Position>Recent Computer Science Graduate</Position>
      </Header>
      <ProfileContainer>
        <LogoContainer></LogoContainer>
      </ProfileContainer>
    </PopUpWindow>
  );
};
