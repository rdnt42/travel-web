import React, {useState, useEffect, useContext} from 'react';
import {Dropdown} from 'primereact/dropdown';
import {SearchContext} from "../context/ContextService";

interface IComfortType {
    name: string,
    code: number
}

const comfortTypes: IComfortType[] = [
    {name: 'Бюджетный', code: 1},
    {name: 'Комфорт', code: 3},
    {name: 'Люкс', code: 3}
];

export const DropDownComfort = () => {
    const [comfortType, setComfortType] = useState<IComfortType>(comfortTypes[1]);

    const searchRequest = useContext(SearchContext);

    useEffect(() => {
        searchRequest.comfortType = comfortType.code;
    })

    return (
        <div>
            <div className="card">
                <div className="p-fluid grid">
                    <div className="field col-12 md:col-4">
                        <span className="p-float-label">
                            <h4>Тип комфорта</h4>
                            <Dropdown inputId="dropdown" value={comfortType} options={comfortTypes}
                                      onChange={(e) => setComfortType(e.value)} optionLabel="name"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}