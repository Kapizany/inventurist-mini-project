import { combineReducers, Store } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import companies from "./companies/index";
import { CompaniesState } from "./companies/dataTypes";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
    companies,
});

export interface ApplicationState {
    companies: CompaniesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;