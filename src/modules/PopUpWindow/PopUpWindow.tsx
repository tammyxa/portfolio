import styled from "styled-components";
import { Colors, Spaces } from "../../theme";
import { useState } from "react";

interface PopUpWindowProps {
  children?: React.ReactNode;
}

const Window = styled.div<{ isOpen: boolean }>`
  min-width: 30%;
  min-height: 30%;
  background-color: ${Colors.primaryLight};
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(1px 1px 3px ${Colors.primaryDark});
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const Toolbar = styled.div`
  background-color: ${Colors.primaryDark};
  height: 30px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Spaces.sm};
`;

export const PopUpWindow = ({ children }: PopUpWindowProps) => {
  const [isOpen, setOpen] = useState(true);
  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Window isOpen={isOpen}>
        <Toolbar>
          <img
            src="/close.png"
            style={{ height: "100%", marginLeft: "auto", cursor: "pointer" }}
            onClick={handleCloseClick}
          />
        </Toolbar>
        {children}
      </Window>
    </>
  );
};
