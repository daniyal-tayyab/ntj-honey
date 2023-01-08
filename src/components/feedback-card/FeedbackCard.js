import {
  Container,
  FeedbackContainer,
  InfoContainer,
} from "./FeedbackCard.styles";

import Image from "../../asstes/cutomer.png";

const FeedbackCard = () => {
  return (
    <Container>
      <img src={Image} alt="cutomer" />
      <FeedbackContainer>
        <p>
          "The first step to becoming a beekeeper is to learn as much as you can
          about the bees themselves/ Beehives require managment and good
          stewardship, which take time."
        </p>
        <InfoContainer>
          <h4>Anna Moribaldi</h4>
          <span>Honey Lover</span>
        </InfoContainer>
      </FeedbackContainer>
    </Container>
  );
};

export default FeedbackCard;
