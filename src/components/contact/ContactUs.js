import {
  Container,
  ImageConatiner,
  ContentContainer,
} from "./ContactUs.styles";

import image from "../../asstes/contant-img.png";
import Button from "../button/Button";

const ContactUs = () => {
  return (
    <Container>
      <ImageConatiner>
        <img src={image} alt="contact us" />
      </ImageConatiner>
      <ContentContainer>
        <h4>Contact us</h4>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem
          dolores.
        </p>
        <div>
          <input type="text" placeholder="0330-4390704" disabled />
          <Button size="large">Contact</Button>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default ContactUs;
