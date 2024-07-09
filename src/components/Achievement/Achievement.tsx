import styled from "styled-components";

interface AchievementProps {
  img: string;
  alt: string;
}

const AchievementContainer = styled.div``;

export const Achievement = ({ img, alt }: AchievementProps) => {
  return (
    <AchievementContainer>
      <img src={img} alt={alt} />
      <img src="picture_frame1.png" alt="Picture Frame" />
    </AchievementContainer>
  );
};
