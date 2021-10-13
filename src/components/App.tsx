import { Component } from "react";
import { hot } from "react-hot-loader";
import { css } from "@emotion/react";
import "./webcomp";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";

const thing = css`
  color: white;
  font-weight: bold;
  background-color: hotpink;
`;
class App extends Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1 css={thing}>Hello World!</h1>
        <p>Foo to the barz</p>
        <search-result name-attribute="test"></search-result>
        <img src={reactLogo.default} height="480" />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
