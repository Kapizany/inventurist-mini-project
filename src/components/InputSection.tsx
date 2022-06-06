import {  Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react"
import { getCompanies, resetCompanies } from "../store/companies/actions"


export const InputSection = () => {
    const [market, setMarket] = useState('')
    const dispatch = useDispatch()

    const handleSearch = () => {
        dispatch(getCompanies(1,10))
    }
    const handleReset = () => {
        dispatch(resetCompanies())
    }

    return (
        <>
        <Grid container spacing={2} paddingX={5} my={5}>
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Context(s)"
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue="Enter here..."
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Questions"
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue="Enter here..."
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Companies/Websites"
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue="Enter here..."
                />
            </Grid>
            <Grid item xs={12}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Only search website titles" />
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Market</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={market}
                        label="Select Market"
                        displayEmpty
                        onChange={(event) => setMarket(event.target.value)}
                    >
                        <MenuItem value={''}>Select Market</MenuItem>
                        <MenuItem value={'it'}>IT</MenuItem>
                        <MenuItem value={'bank'}>Bank</MenuItem>
                        <MenuItem value={'industry'}>Industry</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Stack justifyContent="flex-end" spacing={2} direction="row">
                    <Button variant="text" onClick={() => handleReset()}>Reset</Button>
                    <Button variant="contained" onClick={() => handleSearch()}>Search</Button>
                </Stack>
            </Grid>
        </Grid>
            

        </>
    )
}