import React, {useContext, useEffect, useState} from 'react';
import {InputNumber} from 'primereact/inputnumber';
import {IInputNumberSearch} from "../interface/IInputNumberSearch";
import {SearchContext} from "../context/ContextService";

const initValue: number = 1;

export const InputDaysSearch = (props: IInputNumberSearch) => {
    const [daysValue, setDaysValue] = useState(initValue);

    const searchRequest = useContext(SearchContext);

    useEffect(() => {
        searchRequest.days = daysValue;
    }, [daysValue]);

    return (
        <div>
            <div className="card">
                <div className="grid p-fluid">
                    <div className="field col-12 md:col-3">
                        <h4>Дней в путешествии</h4>
                        <InputNumber inputId="minmax-buttons" value={daysValue} onValueChange={(e: any) => setDaysValue(e.value)}
                                     showButtons mode="decimal"
                                     step={props.step} min={initValue} max={props.max}/>
                    </div>
                </div>
            </div>
        </div>
    );
}