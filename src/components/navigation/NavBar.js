import { useState } from "react";
import Button from "../button/Button";

import {
  NavigaitonContainer,
  LogoContainer,
  NavMenuWrapper,
  SearchCartContainer,
  ButtonContainer,
  SearchIcon,
  CartIcomWrapper,
  CartIcon,
  CartCountWrapper,
  CartDropDownContainer,
  MobileMenuIcon,
  MobileSideMenu,
  CloseMenu,
} from "./Navbar.styles";

import Logo from "../../asstes/logo.png";

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  return (
    <NavigaitonContainer>
      <LogoContainer>
        <img src={Logo} alt="ntj honey" />
        <h1>NTJ's Honey</h1>
      </LogoContainer>
      <NavMenuWrapper>
        <SearchCartContainer>
          <SearchIcon />
          <CartIcomWrapper>
            <CartIcon onClick={toggleCartOpen} />
            <CartCountWrapper>0</CartCountWrapper>
          </CartIcomWrapper>
        </SearchCartContainer>
        <ButtonContainer>
          <Button>Contact</Button>
          <Button inverted={true}>Products</Button>
        </ButtonContainer>
        <MobileMenuIcon onClick={toggleSideMenu} />
      </NavMenuWrapper>
      {/* <CartDropDownContainer isCartOpen={isCartOpen}></CartDropDownContainer> */}
      <MobileSideMenu isSideMenuOpen={isSideMenuOpen}>
        <CloseMenu onClick={toggleSideMenu} />
      </MobileSideMenu>
    </NavigaitonContainer>
  );
};

export default NavBar;
