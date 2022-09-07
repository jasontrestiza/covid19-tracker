import React from "react"
import {Line,Bar} from "react-chartjs-2"
import Chart  from "chart.js/auto"

const ChartPage = ({data, selectedCountry}) => {

      const barChart = (
        data.length !== 0
        ? 
        <Bar
          data={{
            labels: ['Confirmed','Recovered','Deaths'],
            datasets:[
              {
                label: 'People',
                backgroundColor: [
                  'rgb(37 99 235 / 0.9)',
                  'rgb(21 128 61 / 0.9)',
                  'rgb(0 0 0 / 0.6)'
                ],
                data: selectedCountry ==='global' 
                ? [
                  data.worldTotalCases,
                  data.worldTotalRecovered,
                  data.worldTotalDeaths
                ] 
                : [
                  data.cases?.total,
                  data.cases?.recovered,
                  data.deaths?.total
                ],
              
              },
              // {
                  
              //     label: 'Active Cases',
              //     backgroundColor: ['rgb(255, 0, 0)'],
              //     data: selectedCountry === 'global'
              //     ? [data.worldActiveCases]
              //     : [data.cases?.active]
               
              // }
            ],
          }}
          
          options={{
            responsive:true,
            plugins: {
              legend:{
                display: false
              },
              title: { 
                display: true, 
                text: `${selectedCountry === 'global' ? 'Global Record' : `Current state in ${selectedCountry}` }` 
              },
            }
          }}
        />
        : null
      );  

    return(
        <div className="w-full h-full md:h-full p-4 md:w-[650px] m-auto">
          <div className="w-full h-full md:h-full m-auto">
            {barChart}
          </div>
        
        </div>
    )
}

export default ChartPage;