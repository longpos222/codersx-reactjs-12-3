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
        <input 
        onFocus={() => {this.setState({isFocused : true})}} 
        onBlur={() => {this.setState({isFocused : false})}} 
        className='input' 
        type="text" 
        placeholder='Type something to search ...'
        />
        {
          !this.state.isFocused && (
            <div className='search-icon'>
              <i class="fas fa-search"></i>
            </div>
          )
        }
      </div>
     );
  }
}
  
export default SearchBox;

