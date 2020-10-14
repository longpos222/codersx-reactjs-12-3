import React, { Component } from 'react';
import './InfoTable.css';
class InfoTable extends Component {
  render() {
    return (
      <div className='table'>
        <table>
          <tr>
              <th className='no'>#</th> 
              <th className='first'>First</th>
              <th className='last<'>Last</th>
              <th className='handle'>Handle</th>
          </tr>
          {
            this.props.infoTable.map((row, index)=>{
              let className = ''
              index % 2 === 0 ? className += ' is_even' : className += ''
              
              return (
                <tr className={className}>
                  <td>{index+1}</td>
                  <td>{row.first}</td>
                  <td>{row.last}</td>
                  <td>{row.handle}</td>
                </tr>
              )
            })
          } 
        </table>
      </div>
    );
  }
}

export default InfoTable;

