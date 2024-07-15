import { PopUpWindow } from "../../modules";
import achievements from "../../data/achievements.json";
import { Achievement } from "../Achievement/Achievement";
import styled from "styled-components";

const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80vw;
  max-height: 75vh;
  justify-content: center;
`;
export const AchievementsWindows = () => {
  return (
    <PopUpWindow>
      <AchievementsContainer>
        {achievements.map((e, i) => (
          <Achievement key={i} type={e.type} title={e.title} img={e.src} />
        ))}
      </AchievementsContainer>
    </PopUpWindow>
  );
};
