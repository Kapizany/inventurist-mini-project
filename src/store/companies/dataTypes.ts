export interface Company {
    id: number;
    context: string;
    questions: string;
    companies: string;
    onlySearchWebsiteTitles: boolean;
    selectMarket: "IT" | "Bank";
}

export interface CompaniesState {
    loading: boolean;
    error: boolean;
    data: Company[];
    page: number;
    pageSize: number;
    count: number;
}