import styled from "styled-components";
import { Colors } from "../../theme";

const TaskbarContainer = styled.div`
  width: 100%;
  height: 5%;
  background-color: ${Colors.primaryDarker};
  position: fixed;
  bottom: 0;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  background-color: ${Colors.white};
  width: 35%;
  height: 60%;
  border-radius: 10px;
  border: 0px;
  color: ${Colors.black};
  text-align: center;
`;

export const Taskbar = () => {
  return (
    <TaskbarContainer>
      <SearchBar placeholder="Work In Progress" />
    </TaskbarContainer>
  );
};
