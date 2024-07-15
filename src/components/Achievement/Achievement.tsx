import styled from "styled-components";
import { Colors, Spaces } from "../../theme";

interface AchievementProps {
  type: string;
  title: string;
  img: string;
}

const AchievementContainer = styled.div`
  max-width: 80vw;
  max-height: 50vh;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 250px;
  margin: ${Spaces.md};
  display: flex;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  text-align: center;
`;

const Title = styled.span`
  color: ${Colors.black};
`;

export const Achievement = ({ img, title }: AchievementProps) => {
  return (
    <AchievementContainer>
      <ImageContainer>
        <img
          src="picture_frame1.png"
          alt="Picture Frame"
          style={{ position: "absolute", width: "100%", height: "105%" }}
        />
        <img src={img} alt={title} style={{ height: "auto", width: "100%" }} />
      </ImageContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
      </DescriptionContainer>
    </AchievementContainer>
  );
};
