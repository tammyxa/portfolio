import "./App.css";
import { Ditto, DesktopIcon } from "./components";
import styled from "styled-components";

const DesktopContainer = styled.div`
  display: grid;
`;

export default function Home() {
  return (
    <>
      <DesktopContainer>
        <DesktopIcon icon="/client-management.png" name="Profile" />
        <DesktopIcon icon="/resume.png" name="Resume" />
        <DesktopIcon icon="/certificate.png" name="Achievements" />
        <DesktopIcon icon="/about.png" name="About" />
      </DesktopContainer>
      <Ditto />
    </>
  );
}
