import styled from "styled-components";
import { Spaces } from "../../theme";

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
  height: 100px;
  width: 100px;
  margin: ${Spaces.sm};
  background-color: black;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Title = styled.span``;

export const Achievement = ({ img, title }: AchievementProps) => {
  return (
    <AchievementContainer>
      <ImageContainer>
        {/* <img src={img} alt={title} style={{ height: "50%", width: "auto" }} /> */}
        {/* <img
          src="picture_frame1.png"
          alt="Picture Frame"
          style={{ position: "absolute" }}
        /> */}
      </ImageContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
      </DescriptionContainer>
    </AchievementContainer>
  );
};
