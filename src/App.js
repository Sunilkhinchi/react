import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Archive from "./Components/Archive";


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/">
        <Header/>
        <Home/>
        </Route>
    </Switch>
    <Archive></Archive>
    <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
