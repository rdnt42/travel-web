import React, {useState} from 'react';
import {InputNumber} from 'primereact/inputnumber';
import {IInputNumberSearch} from "../interface/IInputNumberSearch";

export const InputDaysSearch = (props: IInputNumberSearch) => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <div className="card">
                <div className="grid p-fluid">
                    <div className="field col-12 md:col-3">
                        <h4>Дней в путешествии</h4>
                        <InputNumber inputId="minmax-buttons" value={value} onValueChange={(e: any) => setValue(e.value)}
                                     showButtons mode="decimal"
                                     step={props.step} min={0} max={props.max}/>
                    </div>
                </div>
            </div>
        </div>
    );
}