import React from "react";
import {ISearchRequest} from "../interface/ISearchRequest";
import {ISearchResponse} from "../interface/response/ISearchResponse";

const searchRequest: ISearchRequest = {}
const searchResponse: ISearchResponse = {}
export const SearchContext = React.createContext(searchRequest);

export const ResponseContext = React.createContext(searchResponse);