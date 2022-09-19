import React from "react";
import {ISearchRequest} from "../interface/ISearchRequest";

const searchRequest: ISearchRequest = {};
export const SearchContext = React.createContext(searchRequest);