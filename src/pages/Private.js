import React, { Component } from "react";

class Private extends Component {
  // componentDidMount() {
  //   if (!this.props.isLogin) return this.props.history.push("/");
  // }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="content">
            <p>Private</p>
            <button onClick={() => this.props.history.push("/")}>
              Go to Auth
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Private;
