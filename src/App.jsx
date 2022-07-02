import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      title: "Hello World",
    };
  }

  componentDidMount() {
    console.log("App - Mount");
    this.setState({ isLoaded: true });
  }

  componentDidUpdate() {
    console.log("App - Update");
    //update component state isLoaded to true
  }

  handleInput = (e) => {
    this.setState({ title: e.target.value });
  };

  handleClick = () => {
    console.log("App - HandleClick");
    this.setState({ isLoaded: this.isLoaded ? false : true });
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <main>
          <h1>React Lifecycle Methods Exercise</h1>
          <h2>{this.state.title}</h2>
          <input
            id="title"
            name="title"
            placeholder=""
            aria-label="Update Title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <div>
            <button type="button" onClick={this.handleClick}>
              Change Title
            </button>
          </div>
        </main>
      );
    } else {
      return <h2>Loading ...</h2>;
    }
  }
}

export default App;
