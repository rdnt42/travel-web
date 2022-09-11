import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';

import {AutoComplete} from 'primereact/autocomplete';
import {useContext, useEffect, useState} from "react";
import {CityService} from "../service/CityService";
import {SearchContext} from "../context/ContextService";

export const AutoCompleteSearch = () => {
    const [selectedCity, setSelectedCity] = useState<any>(null);
    const [filteredCities, setFilteredCities] = useState<any>(null);
    const [cities, setCities] = useState<any>([]);

    const cityService = new CityService();

    const searchRequest = useContext(SearchContext);
    useEffect(() => {
        searchRequest.city = selectedCity == null ? null : selectedCity.name;
    }, [selectedCity])

    useEffect(() => {
        cityService.getCities().then(data => {
            setCities(data)
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCity = (event: { query: string }) => {
        setTimeout(() => {
            let _filteredCities;
            if (!event.query.trim().length) {
                _filteredCities = [...cities];
            } else {
                _filteredCities = cities.filter((city: any) => {
                    return city.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCities(_filteredCities);
        }, 250);
    }

    const itemTemplate = (item: any) => {
        return (
            <div className="country-item">
                <div>{item.name}</div>
            </div>
        );
    }

    return (
        <div className="card">
            <h4>Город отправления</h4>
            <AutoComplete value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="name"
                          dropdown forceSelection itemTemplate={itemTemplate}
                          onChange={(e) => setSelectedCity(e.value)} aria-label="Cities"/>

        </div>
    )
}