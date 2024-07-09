import styled from "styled-components";

interface AchievementProps {
  img: string;
  alt: string;
  title: string;
}

const AchievementContainer = styled.div``;

const ImageContainer = styled.div`
  position: relative;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Title = styled.span``;

export const Achievement = ({ img, alt, title }: AchievementProps) => {
  return (
    <AchievementContainer>
      <ImageContainer>
        <img src={img} alt={alt} />
        <img src="picture_frame1.png" alt="Picture Frame" />
      </ImageContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
      </DescriptionContainer>
    </AchievementContainer>
  );
};
