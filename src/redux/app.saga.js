import { takeLatest, takeEvery, take, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('I am incremented');
  yield delay(3000);
  yield put({ type: 'INCREMENT_FROM_SAGA' });
}

// export function* incrementSaga() {
//   yield takeLatest('INCREMENT', onIncrement);
// }
//takeLatest cancels the previous actions so if we hit increment multiple times simultaneously, 
//it will cancel the previous clicks/calls and return the value incremented by just 1 after some delay

// export function* incrementSaga() {
//   yield takeEvery('INCREMENT', onIncrement);
// }
//while takeEvery gets fire everytime and return all values

export function* incrementSaga() {
  console.log("Inside saga");
  const decrementPayload = yield take('DECREMENT'); 
  console.log("hIii" ,decrementPayload);
}
//'take' wait for action to happen. When it does, we are able to get the payload from the action if we want to. 
//It gives us back value as a promise if we had one. That's the main benefit of take.

//Another big think with 'take' is.. it works on basic principle of generator function that is once it has given yield and 
//there is no next, it won't execute and done will be true
//so next time when we click on decrement, there is no console log that would be printed