import "./App.css";
import { Taskbar, DesktopIcon } from "./components";
import styled from "styled-components";

const DesktopContainer = styled.div`
  display: grid;
`;

export default function Home() {
  return (
    <>
      <DesktopContainer>
        <DesktopIcon icon="/client-management.png" />
      </DesktopContainer>
      <Taskbar />
    </>
  );
}
