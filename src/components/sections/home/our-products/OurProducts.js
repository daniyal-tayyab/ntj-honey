import ProductCard from "../../../product-card/ProductCard";
import {
  Container,
  Wrapper,
  HeadingSection,
  ProductsSection,
} from "./OurProducts.styles";

const OurProducts = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingSection>
          <h1>OUR PRODUCTS</h1>
          <p>
            Treat yourself to one of our products and taste true honey heaven
          </p>
        </HeadingSection>
        <ProductsSection>
          <ProductCard />
          <ProductCard />
          <ProductCard newItem={true} />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsSection>
      </Wrapper>
    </Container>
  );
};

export default OurProducts;
