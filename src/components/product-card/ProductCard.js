import {
  Container,
  NameContainer,
  AddToCartSection,
  CartIcon,
  NewItem,
} from "./ProductCard.styles";

import Product from "../../asstes/product.png";

const ProductCard = ({ newItem }) => {
  return (
    <Container>
      <img src={Product} alt="product" />
      <NameContainer>
        <h3>pure raw honey</h3>
        <p>$20.00</p>
      </NameContainer>
      <AddToCartSection>
        <CartIcon />
        <p>Add to cart</p>
      </AddToCartSection>
      <NewItem newItem={newItem}>NEW</NewItem>
    </Container>
  );
};

export default ProductCard;
