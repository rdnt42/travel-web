import {Button} from "primereact/button";
import React, {useContext} from "react";
import {ResponseContext, SearchContext} from "../context/ContextService";
import {AutoCompleteSearch} from "./AutoCompleteSearch";
import {InputCurrencySearch} from "./InputCurrencySearch";
import {InputDaysSearch} from "./InputDaysSearch";
import {DropDownComfort} from "./DropDownComfort";
import axios from "axios";

export const RequestForm = () => {
    const searchRequest = useContext(SearchContext);
    const searchResponse = useContext(ResponseContext);

    const sendRequest = () => {
        axios.get("/server/travel/api/v1/travel_map",
            {
                params: {
                    departureCity: searchRequest.city,
                    days: searchRequest.days,
                    maxCost: searchRequest.budget,
                    comfortTypeId: searchRequest.comfortType
                }
            })
            .then(response => {
                searchResponse.response = response.data;
                console.log(searchResponse.response?.routeResponses);
            })
    }

    return (
        <div className="p-fluid grid formgrid">
            <div className="field md:col-3">
                <AutoCompleteSearch/>
            </div>
            <div className="field md:col-3">
                <InputCurrencySearch max={500000} step={5000}/>
            </div>
            <div className="field md:col-3">
                <InputDaysSearch max={30} step={1}/>
            </div>
            <div className="field md:col-3">
                <DropDownComfort/>
            </div>
            <div className="field md:col-3">
                <Button label="Поиск" className="p-button-raised" onClick={sendRequest}/>
            </div>
        </div>
    )
}