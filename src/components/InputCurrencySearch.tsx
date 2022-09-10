import React, {useState} from 'react';
import {InputNumber} from 'primereact/inputnumber';
import {IInputNumberSearch} from "../interface/IInputNumberSearch";

export const InputCurrencySearch = (props: IInputNumberSearch) => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <div className="card">
                <div className="grid p-fluid">
                    <div className="field col-12 md:col-3">
                        <h4>Сумма на путешествие</h4>
                        <InputNumber inputId="stacked" value={value} onValueChange={(e: any) => setValue(e.value)}
                                     showButtons mode="currency" currency="RUB"
                                     step={props.step} min={0} max={props.max}/>
                    </div>
                </div>
            </div>
        </div>
    );
}