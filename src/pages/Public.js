import React from "react";
import { connect } from "react-redux";

import {
  addition,
  substraction,
  multiplication,
  division,
} from "../Redux/ActionCreators/math";
import { getCharacterWithPagination } from "../Redux/ActionCreators/rickMorty";
import loading from "../assets/loading.png";

function Public(props) {
  const {
    mathReducer,
    rickMortyReducer,
    add,
    sub,
    mul,
    divs,
    getRickMorty,
  } = props;
  return (
    <div className="container">
      <div className="wrapper">
        <div className="content">
          <div className="show-number">
            <p>{mathReducer.number}</p>
          </div>
          <div className="collection">
            <button onClick={add}>ADD</button>
            <button onClick={sub}>SUB</button>
            <button onClick={mul}>MUL</button>
            <button onClick={divs}>DIV</button>
          </div>
          <div className="get-rickmorty">
            <button onClick={getRickMorty}>
              Show Rick and Morty Characters
            </button>
          </div>
          <div className="show">
            {rickMortyReducer.isPending ? (
              <img className="loading" src={loading} alt="loading" />
            ) : (
              <ol>
                {rickMortyReducer.isFulfilled
                  ? rickMortyReducer.results.map((char) => (
                      <li key={char.id}>{char.name}</li>
                    ))
                  : null}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { mathReducer, rickMortyReducer } = state;
  return {
    mathReducer,
    rickMortyReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addition(1)),
    sub: () => dispatch(substraction(1)),
    mul: () => dispatch(multiplication(2)),
    divs: () => dispatch(division(2)),
    getRickMorty: () =>
      dispatch(
        getCharacterWithPagination("https://rickandmortyapi.com/api/character")
      ),
  };
};

const ConnectedPublic = connect(mapStateToProps, mapDispatchToProps)(Public);

export default ConnectedPublic;
