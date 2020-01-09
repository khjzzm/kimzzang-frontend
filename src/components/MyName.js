import React, { Component } from "react";

class MyName extends Component {

  static defaultProps = {
    name : 'EcmaScipt 6',
    sub : '컴포넌트에서 라이프사이클 API 를 사용해야 하거나, state 를 사용하는 경우에는 꼭 이렇게 정의를 해야하죠. (16.8 Hook 등장으로 무의미 해짐)'
  };

  render() {
    return (
      <div>
          안녕하세요 제 이름은 <b>{this.props.name}</b> 입니다.
          저는 <b>{this.props.sub}</b>
      </div>
    );
  }
}

// MyName.defaultProps={
// //   name: '기본이름'
// // };

export default MyName;