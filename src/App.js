import React from 'react';

import SagasExample from './components/sagas-example/sagas-example.component';

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

//rendering custome useFetch hook example
// const App = props => {
//   return (
//     <div className='App'>
//       <User userId={5} />
//       <Post postId={15} />
//     </div>
//   );
// };


export default App;
