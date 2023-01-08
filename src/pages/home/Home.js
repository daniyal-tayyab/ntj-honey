import ContactUs from "../../components/contact/ContactUs";
import Categories from "../../components/sections/home/category/Categories";
import Feedback from "../../components/sections/home/feedback/Feedback";
import Hero from "../../components/sections/home/Hero";
import OurProducts from "../../components/sections/home/our-products/OurProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <OurProducts />
      <Feedback />
      <ContactUs />
    </div>
  );
};

export default Home;
