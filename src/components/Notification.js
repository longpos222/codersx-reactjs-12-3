import React, { Component } from 'react';
import './Notification.css';

export default class Notification extends Component {
  render() {
    const { hasUnread } = this.props;
    
    return (
      <div className='notification'>
        <img src="https://cdn.glitch.com/aeac4c7f-3fc2-40fb-b295-dc4564c3a491%2Fnotification.svg?1602607878661" width="50px" />
        {hasUnread ? <span className='dot'></span> : ""}
      </div>
    );
  }
}