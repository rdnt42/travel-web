import {Button} from "primereact/button";
import React, {useContext} from "react";
import {SearchContext} from "../context/ContextService";
import {AutoCompleteSearch} from "./AutoCompleteSearch";
import {InputCurrencySearch} from "./InputCurrencySearch";
import {InputDaysSearch} from "./InputDaysSearch";
import {DropDownComfort} from "./DropDownComfort";
import axios from "axios";

export const RequestForm = () => {
    const searchRequest = useContext(SearchContext);

    const sendRequest = () => {
        axios.get("/server/travel/api/v1/travel_map",
            {
                params: {
                    departureCity: searchRequest.city,
                    days: searchRequest.days,
                    maxCost: searchRequest.budget,
                    comfortType: searchRequest.comfortType
                }
            })
            .then(response => {
                console.log(response);
            })
    }

    return (
        <div>
            <AutoCompleteSearch/>
            <InputCurrencySearch max={500000} step={5000}/>
            <InputDaysSearch max={30} step={1}/>
            <DropDownComfort/>
            <Button label="Поиск" className="p-button-raised" onClick={sendRequest}/>
        </div>
    )
}