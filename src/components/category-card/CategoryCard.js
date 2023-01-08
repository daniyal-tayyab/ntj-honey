import {
  CategoryContainer,
  ContentContainer,
  InfoContainer,
  Title,
  Description,
  LearnMore,
} from "./CategoryCard.styles";
import Image from "../../asstes/logo.png";
import { MdOutlineArrowRight } from "react-icons/md";

const CategoryCard = () => {
  return (
    <CategoryContainer>
      <ContentContainer>
        <img src={Image} alt="not found" />
        <InfoContainer>
          <Title>raw honey</Title>
          <Description>
            Id flerent ullamcorper concludaturque mei. Sed summno admodum
            honestatis ad is flerent.
          </Description>
          <LearnMore>
            Learn More <MdOutlineArrowRight style={{ fontSize: "2rem" }} />
          </LearnMore>
        </InfoContainer>
      </ContentContainer>
    </CategoryContainer>
  );
};

export default CategoryCard;
