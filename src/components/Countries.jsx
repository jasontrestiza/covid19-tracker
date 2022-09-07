import React from "react"
import axios from "axios"

const Countries = ({data, handleChange, selectedCountry, count}) => {


    const [countries,setCountries]= React.useState([])
    const country = "https://covid19.mathdro.id/api/countries"

    React.useEffect( ()=>{
        axios.get(country).then((response)=>{
            setCountries(response.data.countries)
        }).catch((e)=>{
            console.log(e)
        })

    },[])
    
    return(
        <div className="">
          <p className="text-center py-4">{new Date().toDateString()}</p>
          <select onChange={handleChange} value={selectedCountry} className="p-2 rounded w-full bg-transparent border border-black/40 font-bold text-sm text-black/70 outline-none">
                    <option value='global'>Global</option>
                {countries.map((items,i) =>
                    <option key={i} value={items.name}>{items.name}</option>
                )}
            </select>
        </div>
    )
}

export default Countries;