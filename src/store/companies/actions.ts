import { action } from "typesafe-actions";
import { CompaniesTypes } from "./actionTypes";
import { Company } from "./dataTypes";

export const getCompanies = (page: number, pageSize: number) => action(CompaniesTypes.GET_COMPANIES, {page, pageSize})
export const getCompaniesSuccess = (data: Company[], page: number, pageSize:number, count: number) => action(CompaniesTypes.GET_COMPANIES_SUCCESS, {
    data, page, pageSize, count
})
export const getCompaniesFailure = () => action(CompaniesTypes.GET_COMPANIES_FAILURE)
export const resetCompanies = () => action(CompaniesTypes.RESET_COMPANIES)
