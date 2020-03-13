import React, { Fragment, PureComponent } from "react";
import { name } from "faker";
import ExampleWrapper from "../components/ExampleWrapper";

class Infinite extends PureComponent {
  state = {
    hasNextPage: true,
    isNextPageLoading: false,
    items: []
  };

  _loadNextPage = (...args) => {
    console.log("loadNextPage", ...args);
    this.setState({ isNextPageLoading: true }, () => {
      setTimeout(() => {
        this.setState(state => ({
          hasNextPage: state.items.length < 1000,
          isNextPageLoading: false,
          items: [...state.items].concat(
            new Array(30).fill(true).map(() => ({ name: name.findName() }))
          )
        }));
      }, 100);
    });
  };

  render() {
    const { hasNextPage, isNextPageLoading, items } = this.state;

    return (
      <Fragment>
        <ExampleWrapper
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={items}
          loadNextPage={this._loadNextPage}
        />
      </Fragment>
    );
  }
}

export default Infinite;
