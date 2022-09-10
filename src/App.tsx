import React from 'react';
import {AutoCompleteSearch} from "./components/AutoCompleteSearch";
import {InputCurrencySearch} from "./components/InputCurrencySearch";
import {InputDaysSearch} from "./components/InputDaysSearch";

function App() {
  return (
    <div>
        <AutoCompleteSearch/>
        <InputCurrencySearch max={500000} step={5000}/>
        <InputDaysSearch max={30} step={1}/>
    </div>
  );
}

export default App;
