import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = (
      { isFocused: this.props.isFocused , 
       className: "search-box" , 
       content: "" ,}
    );
    this.handleLength = this.handleLength.bind(this);
  }

  handleLength(event) {
    const target = event.target;
    this.setState(
      { className: target.value.length > 10 ? "search-box search-box-border" : "search-box",
      content: target.value },
    );
    console.log("1" + this.state.className);
  }

  render() {
    console.log("2" + this.state.className);
    return (
      <div className={this.state.className}>
        <input
          type="text"
          className="input"
          onFocus={() => {
            this.setState({ isFocused: true });
          }}
          onBlur={() => {
            this.setState({ isFocused: false });
          }}
          onChange={this.handleLength}
          placeholder="Type something to search ..."
        />
        {!this.state.isFocused && (
          <div className="search-icon">
            <i className="fas fa-search" />
          </div>
        )}
      </div>
    );
  }
}

export default SearchBox;
