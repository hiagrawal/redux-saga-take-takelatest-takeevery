import React, { useEffect, useReducer } from 'react';

import Card from '../card/card.component';

//useReducer is used for local state like useState
//only thing is if we have complex states then instead to useState, it is preferred to use useReducer
//useReducer works on the same principle as of redux and gives us action, reducer functions, state and dispatch

const INITIAL_STATE = {
  currentUser: null,
  searchQuery: 'Bret'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.payload
      };
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

const setUser = user => ({
  type: 'SET_USER',
  payload: user
});

const setSearchQuery = queryString => ({
  type: 'SET_SEARCH_QUERY',
  payload: queryString
});

//userEducer takes first paramter the reducer function like we had reducer in redux and 
//second paramter as initial state same as use used to set in reducer
//and returns us the state and dispatch property to use state and action functions
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { user, searchQuery } = state;

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      const resJson = await response.json();
      dispatch(setUser(resJson[0]));
    };

    fetchFunc();
  }, [searchQuery]);

  return (
    <Card>
      <input
        type='search'
        value={searchQuery}
        onChange={event => dispatch(setSearchQuery(event.target.value))}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseReducerExample;