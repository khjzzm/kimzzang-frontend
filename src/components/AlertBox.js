import React, { Component } from 'react';

class AlertBox extends Component {
    render() {
        return <div className='alert-box'>
            {this.props.children}
          </div>
    }
}

export default AlertBox;