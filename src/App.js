import { Container, ThemeProvider, createTheme } from "@mui/material";
import myStyle from "./Style.module.css";
import Navbar from "./component/Navbar";
import FeaturePost from "./component/FeaturePost";
import CoverPost from "./component/CoverPost";
import BodyOne from "./component/BodyOne";
import Service from "./component/Service";
import { Contact } from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";

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
          <FeaturePost />
          <CoverPost />
          <Service />
          <Contact />
          <BodyOne />
          <About />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
