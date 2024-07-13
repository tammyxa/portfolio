import styled from "styled-components";
import { Colors, Spaces } from "../../theme";
import { useState } from "react";
import { ProfileWindow } from "../ProfileWindow";
import { ResumeWindow } from "../ResumeWindow";
import { AchievementsWindows } from "../AchievementsWindow";

interface DesktopIconProps {
  icon: string;
  name: string;
}

const DesktopIconContainer = styled.button`
  width: 100px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${Colors.transparent};
  border: none;
  margin: ${Spaces.md};
  &:hover {
    cursor: pointer;
    filter: drop-shadow(3px 3px 3px ${Colors.primaryDarker});
  }
`;

export const DesktopIcon = ({ icon, name }: DesktopIconProps) => {
  const [open, setOpen] = useState(false);
  const [application, setApplication] = useState("");

  const handleIconClick = () => {
    setOpen(true);
    setApplication(name);
    console.log("Dsa");
  };

  return (
    <>
      <DesktopIconContainer onClick={handleIconClick}>
        <img src={icon}></img>
        <span>{name}</span>
      </DesktopIconContainer>
      {open && application === "Profile" ? (
        <ProfileWindow />
      ) : open && application === "Resume" ? (
        <ResumeWindow />
      ) : open && application === "Achievements" ? (
        <AchievementsWindows />
      ) : null}
    </>
  );
};
