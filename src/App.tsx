import React, {useContext, useState} from 'react';
import {RequestForm} from "./components/RequestForm";
import {InfoTable} from "./components/InfoTable";
import {SearchContext} from "./context/ContextService";
import axios from "axios";
import {ITravelMapResponse} from "./interface/response/ITravelMapResponse";

function App() {
    const searchRequest = useContext(SearchContext);
    const [responseData, setResponseData] = useState<ITravelMapResponse>({});

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
                setResponseData(response.data);
                console.log("responseData", responseData);
            })
    }
    return (
        <div>
            <RequestForm clickCallback={sendRequest}/>
            <InfoTable items={responseData.routeResponses}/>
        </div>
    );
}

export default App;
