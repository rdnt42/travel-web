import {Button} from "primereact/button";
import React, {useContext} from "react";
import {SearchContext} from "../context/ContextService";
import {AutoCompleteSearch} from "./AutoCompleteSearch";
import {InputCurrencySearch} from "./InputCurrencySearch";
import {InputDaysSearch} from "./InputDaysSearch";
import {DropDownComfort} from "./DropDownComfort";

export const RequestForm = () => {
    const searchRequest = useContext(SearchContext);

    const sendRequest = () => {
        console.log(searchRequest);
    }

    return (
        <div>
            <AutoCompleteSearch/>
            <InputCurrencySearch max={500000} step={5000}/>
            <InputDaysSearch max={30} step={1}/>
            <DropDownComfort/>
            <Button label="Поиск" className="p-button-raised" onClick={sendRequest} />
        </div>
    )
}