import React, { useState, useReducer, useEffect } from "react";

const initialState = { count: 1, index: 1 };

function reducer(state, action) {
  // 2.adım
  if (action.type === "inc") {
    return {
      count: state.count + 2,
      index: state.index + 1,
    };
  }

  if (action.type === "dec") {
    return {
      count: state.count - 2,
      index: state.index - 1,
    };
  }

  if (action.type === "reset") {
    return initialState;
  }
  throw Error("Unknown action.");
}

const useCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // 1.adım
  const {count} = state;

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  console.log("useCounter içerisi");

  return [state, dispatch];
};

export default useCounter;
