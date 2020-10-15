import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: this.props.isFocused,
      className: "search-box",
      content: "",
    };
    this.handleLength = this.handleLength.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
  }

  handleLength(event) {
    const target = event.target;
    this.setState({
      className:
        target.value.length > 10
          ? "search-box search-box-border"
          : "search-box",
      content: target.value,
    });
  }

  handlePhone(event) {
    const target = event.target;
    const length = target.value.length === 10;
    const prefix = target.value.slice(0, 4) === "090";

    this.setState({
      className:
        !length && !prefix 
        ? "search-box search-box-border" 
        : "search-box",
      isFocused: false,
    });
  }

  render() {
    return (
      <div className={this.state.className}>
        <input
          type="text"
          className="input"
          onFocus={() => {
            this.setState({ isFocused: true });
          }}
          onBlur={this.handlePhone}
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
