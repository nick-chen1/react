

import ReactDOM, { render } from "react-dom";
import IndexView from "./views";

import { Provider } from "react-redux"

import store from "./store"

const rootEle = document.getElementById("app");

// const hotRender = () =>{
//     render(
//         <IndexView/>,rootEle
//     )
// }

function hotRender() {
    render(
        <Provider store={store} >
        <IndexView/>
    </Provider> ,rootEle
         )
     }
     
     hotRender();
     
     // import "./redux";
// import "./react-redux"