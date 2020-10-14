import React, { Component } from 'react';
import './SearchBox.css';
import searchIcon from '../search-icon.svg';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { isFocused: false };
  }
  render() { 
    return ( 
      <div className="search-box">
        <input className='input' type="text" placeholder='Type something to search ...'></input>
        <div className='search-icon'>
        <img src={searchIcon}></img>
        </div>
      </div>
     );
  }
}
  
export default SearchBox;

