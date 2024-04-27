import logo from './logo.svg';
import './App.css';
import { fetchModule } from './fetch';

import React, { useEffect } from 'react';



function sent_metrics(key, value=null) {
  console.log('sent');
  const metrics_data = {
    key: key,
    value: value
  }
  fetchModule.doPost({path: "/send/", body: metrics_data})
}


function click_on_button() {
  sent_metrics("clicked_on_button")
}

function document_loaded() {
  sent_metrics("document_loaded");
}

function click_on_form() {
  let element = document.getElementById("input_field");
  console.log("element: value: ", element.value);
  console.log("element: ", element);
  // sent_metrics("clicked_on_button")
}

function handleChange(event) {
  console.log("val: ", event.target.value);
  sent_metrics("input_form_change", event.target.value)
  // this.setState({value: event.target.value});
}


function App() {

  useEffect(() => {
    document_loaded();
  });

  return (
    <div className="App">
      <div className="Header">
        <h1>hi</h1>
      </div>
      <div className="Main">
        <div>
          <h2>Отправка простого события:</h2>
          <button onClick={click_on_button}>Кликни, чтобы отправить метрику</button>
        </div>
        <div>
          <h2>Отправка события с данными:</h2>
          <p>Вводите данные, чтобы отправить метрику</p>
          <form>
            <input type="text" id="input_field" onChange={handleChange}></input>
          </form>
          
        </div>
      </div>
    </div>
  );
}


export default App;
