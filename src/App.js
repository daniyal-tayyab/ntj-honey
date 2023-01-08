import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Theme";

import Home from "./pages/home/Home";
import NavBar from "./components/navigation/NavBar";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
