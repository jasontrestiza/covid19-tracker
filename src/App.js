import React from "react"
import axios from "axios"
import SelectCountries from "./components/Countries"
import Cards from "./components/Card"
import ChartPage from "./components/ChartPage"
import {RiVirusFill} from "react-icons/ri"


function App() {

  
  const [data,setData] = React.useState({})
  const [selectedCountry,setSelectedCountry] = React.useState('global')


  const handleChange = (event) =>{
    setSelectedCountry(event.target.value)
  }

  React.useEffect(()=>{
    if(selectedCountry !== 'global'){
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        params: {country: selectedCountry},
        headers: {
          'X-RapidAPI-Key': 'ee79892f2dmsh650c6cd86c47729p132647jsnd3db5c074dc7',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        const getSelectedCountry = response.data.response
        // console.log(getSelectedCountry)
        getSelectedCountry.map((items) => {
          setData(items)
        })
      }).catch(function (error) {
        console.error(error);
      });
 
    }
    else if(selectedCountry === 'global'){
    
      const options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
        headers: {
          'X-RapidAPI-Key': 'ee79892f2dmsh650c6cd86c47729p132647jsnd3db5c074dc7',
          'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        const getWorldData = response.data;
        // console.log(getWorldData)
        const rawData = getWorldData.map(items => {
          return {
            worldActiveCases: items.ActiveCases,
            worldNewCases: items.NewCases,
            worldNewDeaths: items.NewDeaths,
            worldNewRecovered: items.NewRecovered,
            worldTotalCases: items.TotalCases,
            worldTotalDeaths: items.TotalDeaths,
            worldTotalRecovered: items.TotalRecovered
            
          }
        })
        rawData.map((worldData)=>{
          setData(worldData)
        })
     
      }).catch(function (error) {
        console.error(error);
      });

    }
  
  },[selectedCountry])

  return (
    <div className=" bg-white/90 w-full h-screen md:h-full text-black/80">
      <div className="flex flex-col justify-start p-4 items-center w-full h-screen md:h-full bg-black/10">
        <h1 className="text-3xl uppercase tracking-[.12em] my-4 font-bold text-center md:text-5xl">
            C<RiVirusFill className="inline-block md:mb-2 text-red-900"/>vid-19 Tracker
        </h1>
        <SelectCountries data={data} selectedCountry={selectedCountry} handleChange={handleChange}/>
        <Cards data={data} selectedCountry={selectedCountry}/>
        <ChartPage data={data} selectedCountry={selectedCountry} />
        
      </div>
    </div>
  );
}

export default App;
