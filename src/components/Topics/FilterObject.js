import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: [
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" }
      ],
      unFilteredArrayString:
        '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
      userInput: "",
      filteredArray: []
    };
  }

  handleInput(e) {
    this.setState({ userInput: e.target.value });
  }

  handleClick(e) {
    let arr = this.state.unFilteredArray.filter(element => {
      return element.hasOwnProperty(this.state.userInput);
    });
    this.setState({ filteredArray: arr });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original:{JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input className="inputLine" onChange={e => this.handleInput(e)} />
        <button
          className="confirmationButton"
          onClick={e => this.handleClick(e)}
        >
          Submit
        </button>
        <span className="resultsBox filterObjectRB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
