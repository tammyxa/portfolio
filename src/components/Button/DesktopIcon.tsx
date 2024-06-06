import styled from "styled-components";

interface DesktopIconProps {
  icon: string;
  name: string;
}

const DesktopIconContainer = styled.button`
  width: 100px;
  height: 100px;
`;

export const DesktopIcon = ({ icon }: DesktopIconProps) => {
  return (
    <DesktopIconContainer>
      <img src={icon}></img>
    </DesktopIconContainer>
  );
};
