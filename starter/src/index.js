import React from 'react'; // zaimportowanie modułu react
import { render } from 'react-dom'; // zaimportowanie metody z modułu react.dom

// import StorePicker from './components/StorePicker' //musimy zaimportować komponent StorePicker
// import App from './components/App' //musimy zaimportować komponent StorePicker
import Router from './components/Router' //musimy zaimportować komponent StorePicker
import "./css/style.css"

render(<Router/>, document.querySelector('#main')); //moduł w którym określamy element zwracany oraz element gdzie jest on zwracany. <StorePicker/> = <StorePicker></StorePicker>