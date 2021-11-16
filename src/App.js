import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Swapping from "./components/pages/Swapping";
import Products from "./components/pages/Products";
import Careers from "./components/pages/Careers";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import Investors from "./components/pages/Investors";
import Footer from "./components/Footer";
import OurTeam from "./components/pages/OurTeam";
import BttButton from "./components/BttButton";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Swapping" component={Swapping} />
            <Route path="/products" component={Products} />
            <Route path="/investors" component={Investors} />
            <Route path="/careers" component={Careers} />
            <Route path="/ourteam" component={OurTeam} />

            {/* <Route path='/swapping' component={Swapping} />
          <Route path='/ev-charging' component={Ev} /> */}
          </Switch>

          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
