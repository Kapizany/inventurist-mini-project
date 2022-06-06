import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../store";
import { getCompanies } from '../store/companies/actions';

export const Table = () => {
    const dispatch = useDispatch()

    const columns: GridColDef[] = [
        { field: 'companies', headerName: 'Companies', width: 230 },
        { field: 'context', headerName: 'Context', width: 230 },
        { field: 'questions', headerName: 'Questions', width: 230 },
        { field: 'selectMarket', headerName: 'Market', width: 230 },
    ];

    const {data, page, pageSize, count} = useSelector((globalState: ApplicationState) => {

            return {
                data:globalState.companies.data,
                page:globalState.companies.page,
                pageSize:globalState.companies.pageSize,
                count:globalState.companies.count,
            }
    })
    
    return <div style={{ height: 400, width: "80%", margin: "auto" }}>
        <h4>Signals</h4>
        <DataGrid
            rows={data}
            columns={columns}
            pagination
            pageSize={pageSize}
            page={page-1}
            rowCount={count}
            onPageSizeChange={(newPageSize) => dispatch(getCompanies(page,newPageSize))}
            onPageChange={(newPage) => dispatch(getCompanies(newPage+1,pageSize))}
            rowsPerPageOptions={[1,5,10]}
            checkboxSelection
        />
    </div>

}