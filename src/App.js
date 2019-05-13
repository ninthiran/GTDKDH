import React, { Component } from "react";
import "./styles/foundation.min.css";
import "./styles/custom.css";
import "./App.css";

import Routes from "./route.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Welcome from "./components/Welcome";
// import MobileHeader from "./components/MobileHeader/MobileHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: "GDK"
    };
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            {/* <MobileHeader name={this.state.appName} /> */}
            <Header name={this.state.appName} />
            <Routes />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
