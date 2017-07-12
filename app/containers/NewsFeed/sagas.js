import { eventChannel } from 'redux-saga';
import { take, call, put, select } from 'redux-saga/effects';
import { WEBSOCKET_URL,ADD_TO_NEWSFEED } from './constants';
import { List, Map } from 'immutable';
// Initializing Websocket
function initWebsocket() {
  return eventChannel(emitter => {
    let ws = new WebSocket(WEBSOCKET_URL);


    ws.onopen = () => {

      ws.send('hello server')
    }
    ws.onerror = (error) => {

      console.dir(error)
    }
    ws.onmessage = (e) => {
      let msg = null
      try {
        msg = JSON.parse(e.data)
      } catch(e) {
        console.error(`Error parsing : ${e.data}`)
      }
      if (msg) {

        return emitter({ type: ADD_TO_NEWSFEED, data: List(msg) });
        // const { payload: book } = msg
        // const channel = msg.channel
        //
        // switch (channel) {
        //   case 'ADD_BOOK':
        //     return emitter({ type: ADD_BOOK, book })
        //   case 'REMOVE_BOOK':
        //     return emitter({ type: REMOVE_BOOK, book })
        //   default:
        //     // nothing to do
        // }
      }
    }
    // unsubscribe function
    return () => {

    }
  })
}


// Individual exports for testing
export function* listenToWebsocket() {
  // See example in containers/HomePage/sagas.js
  const channel = yield call(initWebsocket);
  while (true) {
    const action = yield take(channel)
    yield put(action)
  }
}

// All sagas to be loaded
export default [
  listenToWebsocket
];
