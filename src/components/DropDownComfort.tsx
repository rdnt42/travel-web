import React, {useState, useEffect} from 'react';
import {Dropdown} from 'primereact/dropdown';


export const DropDownComfort = () => {
    const [comfortTYpe, setComfortTYpe] = useState(null);

    const comfortTypes = [
        {name: 'Бюджетный', code: 1},
        {name: 'Комфорт', code: 3},
        {name: 'Люкс', code: 3}
    ];

    return (
        <div>
            <div className="card">
                <div className="p-fluid grid">
                    <div className="field col-12 md:col-4">
                        <span className="p-float-label">
                            <h4>Тип комфорта</h4>
                            <Dropdown inputId="dropdown" value={comfortTYpe} options={comfortTypes}
                                      onChange={(e) => setComfortTYpe(e.value)} optionLabel="name"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}