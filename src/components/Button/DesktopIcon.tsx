import styled from "styled-components";
import { Colors, Spaces } from "../../theme";

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
    border: 1px solid black;
  }
`;

export const DesktopIcon = ({ icon, name }: DesktopIconProps) => {
  return (
    <DesktopIconContainer>
      <img src={icon}></img>
      <span>{name}</span>
    </DesktopIconContainer>
  );
};
