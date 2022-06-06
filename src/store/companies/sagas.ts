import { AnyAction } from 'redux';
import {call, put} from 'redux-saga/effects';
import { api } from '../../services/api';

import { getCompaniesSuccess, getCompaniesFailure } from './actions';
import { Company } from './dataTypes';



export function* list(action: AnyAction){
    try {
        const response: {
            data : {
                data : Company[],
                page : string,
                pageSize : string,
                count: number,
            }
        } = yield call(api.get, `companies?page=${action.payload.page}&pageSize=${action.payload.pageSize}`);
        yield put(getCompaniesSuccess(response.data.data, parseInt(response.data.page), parseInt(response.data.pageSize), response.data.count));
    } catch(err){
        yield put(getCompaniesFailure());
    }
}