import React, {useContext, useEffect, useState} from 'react';
import {InputNumber} from 'primereact/inputnumber';
import {IInputNumberSearch} from "../interface/IInputNumberSearch";
import {SearchContext} from "../context/ContextService";

const initValue: number = 1000;

export const InputCurrencySearch = (props: IInputNumberSearch) => {
    const [budgetValue, setBudgetValue] = useState(initValue);

    const searchRequest = useContext(SearchContext);

    useEffect(() => {
        searchRequest.budget = budgetValue;
    }, [budgetValue])

    return (
        <div>
            <div className="card">
                <div className="grid p-fluid">
                    <div className="field col-12 md:col-3">
                        <h4>Сумма на путешествие</h4>
                        <InputNumber inputId="stacked" value={budgetValue} onValueChange={(e: any) => setBudgetValue(e.value)}
                                     showButtons mode="currency" currency="RUB"
                                     step={props.step} min={initValue} max={props.max}/>
                    </div>
                </div>
            </div>
        </div>
    );
}