import React from 'react';

import SagasExample from './components/sagas-example/sagas-example.component';
import UseStateExample from './components/use-state-example/use-state-example.component';
import UseEffectExample from './components/use-effect-example/use-effect-example.component';
import UseReducerExample from './components/use-reducer-example/use-reducer-example.component';


import './App.css';

//rendering saga example
const App = props => {
  return (
    <div className='App'>
      <SagasExample />
    </div>
  );
};

//rendering useState hook example
// const App = props => {
//   return <UseStateExample />;
// };

//rendering useEffect hook example
// const App = props => {
//   return <UseEffectExample />;
// };

//rendering custom useFetch hook example
// const App = props => {
//   return (
//     <div className='App'>
//       <User userId={5} />
//       <Post postId={15} />
//     </div>
//   );
// };

//rendering useReducer hook example
// const App = props => {
//   return (
//     <div className='App'>
//       <UseReducerExample />
//     </div>
//   );
// };


export default App;
