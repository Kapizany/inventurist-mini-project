import { Box } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"
import { useSelector } from "react-redux"
import { Header } from "../components/Header"
import { HeatMap } from "../components/HeatMap"
import { InputSection } from "../components/InputSection"
import { Table } from "../components/Table"
import { ApplicationState } from "../store"

export const  Home =  () => {
    const {loading, error, count} = useSelector((globalState: ApplicationState) => {

        return {
            loading:globalState.companies.loading,
            error: globalState.companies.error,
            count: globalState.companies.count
        }
    })
    
    return <>
        <Header />
        <h3>Input Section</h3>
        <InputSection />
        <h3>Result Section</h3>
        <HeatMap />
        {((count>0) && !error && !loading) &&<Table />}
        {loading && (<Box width="100%" height={600} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>)}
    </>
}