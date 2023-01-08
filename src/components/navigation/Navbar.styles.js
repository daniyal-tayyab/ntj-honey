import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const NavigaitonContainer = styled.nav`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  position: relative;

  @media (max-width: 1700px) {
    height: 9rem;
  }
`;

export const LogoContainer = styled.div`
  width: 26rem;
  font-size: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  transition: all 0.15s ease;

  img {
    width: 10rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    h1 {
      display: none;
    }
    img {
      width: 8rem;
    }
  }
`;

export const NavMenuWrapper = styled.div`
  width: 36rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 18rem;
  }

  @media (max-width: 600px) {
    width: 8rem;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const SearchCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8rem;
`;

export const SearchIcon = styled(BiSearchAlt)`
  font-size: 3rem;
  color: ${(props) => props.theme.secondaryBlack};
  cursor: pointer;

  transition: all 0.15s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CartIcomWrapper = styled.div`
  position: relative;
`;

export const CartIcon = styled(RiShoppingCart2Line)`
  font-size: 3rem;
  color: ${(props) => props.theme.secondaryBlack};
  cursor: pointer;

  transition: all 0.15s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CartCountWrapper = styled.span`
  padding: 4px 10px;
  position: absolute;
  top: -1.4rem;
  right: -15px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
  font-size: 1.3rem;
`;

export const MobileMenuIcon = styled(GiHamburgerMenu)`
  font-size: 3rem;
  color: ${(props) => props.theme.secondaryBlack};
  cursor: pointer;

  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const CartDropDownContainer = styled.div`
  width: 25rem;
  height: 30rem;
  padding: 1rem;
  border: 1px solid #d3a863;
  position: absolute;
  right: 20rem;
  top: 10rem;

  overflow: auto;
  display: ${(props) => (props.isCartOpen ? "black" : "none")};

  @media (max-width: 800px) {
    right: 8rem;
    top: 10rem;
  }
`;

export const MobileSideMenu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.9;

  position: absolute;
  right: 0;
  top: 0;

  display: ${(props) => (props.isSideMenuOpen ? "block" : "none")};

  z-index: 10;
`;

export const CloseMenu = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${(props) => props.theme.secondaryBlack};
  cursor: pointer;
  color: #ffffff;

  font-size: 3rem;

  transition: all 0.15s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
