import {
  Continaer,
  Circle,
  LogoContainer,
  ContentContainer,
  ColumnOne,
  Heading,
  Info,
  News,
  SocialContainer,
  Facebook,
  Instagram,
  Twitter,
  LowerFooter,
} from "./Footer.styles";
import Logo from "../../asstes/logo.png";

import { AiFillHome } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <Continaer>
      <ContentContainer>
        <ColumnOne>
          <Heading>Contact Info</Heading>
          <Info>
            <AiFillHome style={{ marginRight: "10px", fontSize: "4rem" }} />
            <span>Blue Spring Road 405 Sugar Land, TX 77478</span>
          </Info>
          <Info>
            <AiFillPhone style={{ marginRight: "10px", fontSize: "3rem" }} />
            <span>Phone: 0330-4390704</span>
          </Info>
          <Info>
            <MdMail style={{ marginRight: "10px", fontSize: "3rem" }} />
            <span>daniyaltayyab96@gmail.com</span>
          </Info>
        </ColumnOne>
        <ColumnOne>
          <Heading>Products</Heading>
          <Info>
            <span>Queen Bee Honey</span>
          </Info>
          <Info>
            <span>Pure Raw Honey</span>
          </Info>
          <Info>
            <span>Heather Honey</span>
          </Info>
          <Info>
            <span>Wildflower Honey</span>
          </Info>
          <Info>
            <span>Honey Face Cream</span>
          </Info>
          <Info>
            <span>Raw Honeycomb</span>
          </Info>
          <Info>
            <span>Manuka Honey</span>
          </Info>
        </ColumnOne>
        <ColumnOne>
          <Heading>news</Heading>
          <News title="BEEKEEPER – BEES AND BEEKEEPING" />
          <News title="HONEY FROM YOUR OWN BEEHIVE" />
          <News title="KEEPING SWARM FROM LEAVING?" />
        </ColumnOne>
        <ColumnOne>
          <Heading>Our Hive</Heading>
          <Info>Our Story</Info>
          <Info>Our Retail Locations</Info>
          <Info>The Bee Cause</Info>
          <Info>Blog</Info>
          <Info>Bee Garden Tours</Info>
        </ColumnOne>
      </ContentContainer>
      <LowerFooter>
        <SocialContainer>
          <span>
            <Facebook />
          </span>
          <span>
            <Instagram />
          </span>
          <span>
            <Twitter />
          </span>
        </SocialContainer>
        <img src={Logo} alt="ntj honey" />
        <p>&#169; NTJ's Honey All rights reserved</p>
      </LowerFooter>
      <Circle />
      <LogoContainer>
        <img src={Logo} alt="ntj honoey" />
        <h4>NTJ's </h4>
        <p>Honey Makers</p>
      </LogoContainer>
    </Continaer>
  );
};

export default Footer;
