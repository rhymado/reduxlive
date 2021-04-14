import React from "react";

function Auth(props) {
  const { history, isLogin, onClickAuth } = props;
  return (
    <div className="container">
      <div className="wrapper">
        <button onClick={onClickAuth}>
          <p>{isLogin ? "Logout" : "Login"}</p>
        </button>
        <div className="content">
          <button className="button" onClick={() => history.push("/public")}>
            <p>Go to public page</p>
          </button>
          <button className="button" onClick={() => history.push("/private")}>
            <p>Go to private page</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
