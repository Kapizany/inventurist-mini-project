import { Reducer } from "redux";
import { CompaniesTypes } from "./actionTypes";
import { CompaniesState } from "./dataTypes";

const INITIAL_STATE: CompaniesState = {
    loading: false,
    error: false,
    data: [],
    page: 1,
    pageSize: 10,
    count:0,
};

const reducer: Reducer<CompaniesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CompaniesTypes.GET_COMPANIES:
            return {...state, loading: true};
        case CompaniesTypes.GET_COMPANIES_FAILURE:
            return {...state, loading: false, error: true, data: []};
        case CompaniesTypes.GET_COMPANIES_SUCCESS:
            return {
                ...state, loading: false, error: false, data: action.payload.data, 
                page: action.payload.page, pageSize: action.payload.pageSize,
                count: action.payload.count,
            };
        case CompaniesTypes.RESET_COMPANIES:
            return {...state, loading: false, error: true, data: []};
        default:
            return state;
    }
}

export default reducer;