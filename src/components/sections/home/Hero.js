import {
  Conatiner,
  LeftSection,
  RightSection,
  ContentSection,
  Title,
  Heading,
  Description,
  ButtonContainer,
} from "./Hero.styles";

import Button from "../../button/Button";

const Hero = () => {
  return (
    <Conatiner>
      <LeftSection>
        <ContentSection>
          <Title>KEEP ON BUZZING</Title>
          <Heading>organic fresh honey only</Heading>
          <Description>
            Not only is our honey produced by a team of beekeeping experts, it's
            also 100% organic
          </Description>
          <ButtonContainer>
            <Button dark={true} style={{ width: "20rem" }}>
              VIEW MORE
            </Button>
          </ButtonContainer>
        </ContentSection>
      </LeftSection>
      <RightSection></RightSection>
    </Conatiner>
  );
};

export default Hero;
