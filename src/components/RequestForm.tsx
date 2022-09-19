import {Button} from "primereact/button";
import React from "react";
import {AutoCompleteSearch} from "./AutoCompleteSearch";
import {InputCurrencySearch} from "./InputCurrencySearch";
import {InputDaysSearch} from "./InputDaysSearch";
import {DropDownComfort} from "./DropDownComfort";

export const RequestForm = (props: { clickCallback: () => void }) => {
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
                <Button label="Поиск" className="p-button-raised" onClick={props.clickCallback}/>
            </div>
        </div>
    )
}