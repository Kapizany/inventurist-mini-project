import { Box } from "@mui/material"
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { ApplicationState } from "../store";


export const HeatMap = () => {
    const {error, loading, count} = useSelector((globalState: ApplicationState) => {

            return {
                error:globalState.companies.error,
                loading:globalState.companies.loading,
                count:globalState.companies.count,
            }
    })
    const options = {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        title:{
            text: "Companies/Websites",
            align: 'center',
        },
        dataLabels: {
          enabled: true
        },
        colors: ["#008FFB"],
        xaxis: {
            position: 'top',
        },
        yaxis: {
            title: {
                text: "Context & Questions",
            },
        },
      }
    const series = [
          {
            name: "Clean Energy",
            data: [{
              x: 'Polaris.com',
              y: 10
            }, {
              x: 'BRB.com',
              y: 10
            }, {
              x: 'Tesla.com',
              y: 10
            }, {
              x: 'Google.com',
              y: 10
            }]
          },
          {
            name: "Hydrogen",
            data: [{
                x: 'Polaris.com',
                y: 10
            }, {
                x: 'BRB.com',
                y: 0
            }, {
                x: 'Tesla.com',
                y: 10
            }, {
                x: 'Google.com',
                y: 10
            }]
          },
          {
            name: "Clean Energy, Hydrogen",
            data: [{
                x: 'Polaris.com',
                y: 10
            }, {
                x: 'BRB.com',
                y: 10
            }, {
                x: 'Tesla.com',
                y: 0
            }, {
                x: 'Google.com',
                y: 10
            }]
          },
        ]

    return ((count > 0) && !loading && !error) ? ( <Box paddingX={10} my={10}>
            <h4>Heatmap</h4>
            <Chart options={options as ApexOptions} series={series} type="heatmap" height={350} />
        </Box>) : <></>
}