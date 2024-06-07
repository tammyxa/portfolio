import styled from "styled-components";
import { Colors, Spaces } from "../../theme";

interface PopUpWindowProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Window = styled.div`
  min-width: 30%;
  min-height: 30%;
  background-color: ${Colors.primaryLight};
  position: absolute;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(1px 1px 3px ${Colors.primaryDark});
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

export const PopUpWindow = ({ isOpen, setIsOpen }: PopUpWindowProps) => {
  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <Window>
          <Toolbar>
            <img
              src="/close.png"
              style={{ height: "100%", marginLeft: "auto", cursor: "pointer" }}
              onClick={handleCloseClick}
            />
            {/* {tools?.map(tool, i)=>(<img src={tools.src}/>)} */}
          </Toolbar>
        </Window>
      ) : null}
    </>
  );
};
