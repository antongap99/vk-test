import {useContext} from "react";
import {FilterContext} from "../model/context.tsx";

export const useFilters = () => useContext(FilterContext);