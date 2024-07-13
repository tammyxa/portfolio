import { PopUpWindow } from "../../modules";
import achievements from "../../data/achievements.json";
import { Achievement } from "../Achievement/Achievement";
export const AchievementsWindows = () => {
  return (
    <PopUpWindow>
      {achievements.map((e, i) => (
        <Achievement key={i} type={e.type} title={e.title} img={e.src} />
      ))}
    </PopUpWindow>
  );
};
