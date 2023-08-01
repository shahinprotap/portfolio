import { Container, ThemeProvider, createTheme } from "@mui/material";
import myStyle from "./Style.module.css";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import { Contact } from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";
import News from "./component/News";
import Author from "./component/Author";
import Home from "./component/Home";
import BodyOne from "./component/BodyOne";
import NotFound from "./component/NotFound";

import { Route, Routes } from "react-router-dom";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container className={myStyle.bgColor}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Author />} />
            <Route path="/signin" element={<Author />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <FeaturePost />
          <CoverPost />
          <Service />
          <Contact />
          <BodyOne />
          <About />*/}

          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
