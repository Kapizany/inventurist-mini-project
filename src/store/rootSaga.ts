import {all, takeLatest} from 'redux-saga/effects';

import { CompaniesTypes } from './companies/actionTypes';
import { list } from './companies/sagas';

export default function* rootSaga(){
    //@ts-ignore
    return yield all([
        takeLatest(CompaniesTypes.GET_COMPANIES, list),
    ])
}