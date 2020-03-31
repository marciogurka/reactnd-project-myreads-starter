import React from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import {Container} from "./styles";

class BooksApp extends React.Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/search" component={Search}></Route>
        </Switch>
      </Container>
    );
  }
}

export default BooksApp;
