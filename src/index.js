// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import { createStore  } from 'redux';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const initialState = {
    result:15000,
    value:[]
}

const redu = (state = initialState,action)=>{
    switch(action.type){
        case "ADD" :
            state={
                // ...state
                result:action.payloadd,
                value:[state,action.payloadd]
            }
            break;
        case "SUB" :
             state = action.payloadd;
            break;
        default:
            state = 56416156
    }
    return state;
}

const store = createStore(redu);
store.subscribe(()=>{
    console.log("Update Store : ", store.getState());
})
store.dispatch({
    type:"ADD",
    payloadd:20000
});

store.dispatch({
    type:"ADD",
    payloadd:30000
});