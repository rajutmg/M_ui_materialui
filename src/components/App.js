import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import CustomSoftware from "./CustomSoftware";
import LandingPage from "./LandingPage";
import Services from "./Services";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import theme from "./ui/Theme";
function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/services" component={Services} />
          <Route
            exact
            path="/customesoftware"
            render={(props) => (
              <CustomSoftware {...props} setSelectedIndex={setSelectedIndex} />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>mobileapps</div>}
          />
          <Route exact path="/websites" component={() => <div>websites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <Contact {...props} setSelectedIndex={setSelectedIndex} />
            )}
          />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
