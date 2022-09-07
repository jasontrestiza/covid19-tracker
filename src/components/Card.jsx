import React from "react"
import CountUp from "react-countup"

const Card = ({data,selectedCountry}) => {

    const {cases,deaths,time} = data
    

    
    return (
        <div className="flex flex-col  w-[90%] my-4 justify-center md:flex-row">
       
          <div className="w-full relative my-2 md:w-[220px] h-[120px] bg-white/20 border-b-8 border-blue-600/90 md:m-2 p-2 shadow-lg shadow-blue-600/40">
             
                <h1 className=" text-blue-600 font-bold tracking-[0.05em]">Confirmed</h1>
                <div className="w-[8px] h-[8px] bg-blue-600/40 top-0 right-0 absolute"></div>
    
                <p className="text-end text-3xl md:text-2xl">
                    <CountUp
                        start={0}
                        end={selectedCountry !== 'global' ? cases?.total : data.worldTotalCases}
                        duration={2}
                        separator=","
                        className="tracking-[0.09em]"
                    />
                </p>
                <p className="text-xs">
                    <span className="font-bold" style={{display: cases?.new || data.worldNewCases  ? 'inline-block' : 'none'}}>
                        {
                            cases?.new || data.worldNewCases  
                            ? '+' 
                            : ''
                        }
                    </span>
                    {
                        cases?.new || data.worldNewCases 
                        ? 
                            <CountUp
                            start={0}
                            end={selectedCountry !== 'global' ? cases?.new ? cases?.new + ' ' : 'no record ' : data.worldNewCases + ' '}
                            duration={2}
                            separator=","
                            className="font-bold text-blue-600"
                        />
                        :
                        'no record'
                    }
                    <span> as of {new Date(time? time : Date.now()).toLocaleString().replace(",","").replace(/:.. /," ")}</span>

                </p>
                <p className="text-[12px] font-bold text-black/60 md:text-[10px] md:py-4">Number of confirmed cases of COVID-19</p>
          </div>

          <div className="w-full relative my-2 md:w-[220px] h-[120px] bg-white/20 md:m-2 p-2 border-b-8 border-green-700/70 shadow-lg shadow-green-700/40">
            
                <h1 className=" text-green-700 font-bold tracking-[0.05em]">Recovered</h1>
                <div className="w-[8px] h-[8px]  bg-green-700/40 top-0 right-0 absolute"></div>
               
                <p className="text-end text-3xl md:text-2xl">
                    <CountUp
                        start={0}
                        end={selectedCountry !== 'global' ? cases?.recovered : data.worldTotalRecovered}
                        duration={2}
                        separator=","
                        className="tracking-[0.09em]"
                    />
                
                </p>
                <p className="text-xs">
                    <span className="font-bold" style={{display: data.worldTotalRecovered  ? 'inline-block' : 'none'}}>
                        {
                            data.worldTotalRecovered  
                            ? '+' 
                            : ''
                        }
                    </span>
                    {
                        data.worldTotalRecovered
                        ? 
                            <CountUp
                                start={0}
                                end={ selectedCountry === 'global' ? data.worldNewRecovered +' ': 'no record ' }
                                duration={2}
                                separator=","
                                className="font-bold text-green-700"
                            />
                        : 'no record'
                    }
                    
                    <span> as of {new Date(time? time : Date.now()).toLocaleString().replace(",","").replace(/:.. /," ")}</span>

                </p>
                <p className="text-[12px] font-bold text-black/60 md:text-[10px] md:py-4">Number of recovered from COVID-19</p>
          </div>

          <div className="w-full relative my-2 md:w-[220px] h-[120px] bg-white/20 md:m-2 p-2 border-b-8 border-black/40 shadow-lg shadow-black/40">
            
                    <h1 className=" text-black/60 font-bold tracking-[0.05em]">Deaths</h1>
                    <div className="w-[8px] h-[8px]  bg-black/30 top-0 right-0 absolute"></div>
      
                <p className="text-end text-3xl md:text-2xl">
                    <CountUp
                        start={0}
                        end={selectedCountry !== 'global' ? deaths?.total : data.worldTotalDeaths}
                        duration={2}
                        separator=","
                        className="tracking-[0.09em]"
                    />
                    
                </p>
                <p className="text-xs">
                    <span className="font-bold" style={{display: deaths?.new || data.worldNewDeaths ? 'inline-block' : 'none'}}>
                        {
                            deaths?.new || data.worldNewDeaths 
                            ? '+' 
                            : 'asdasd'
                        }
                    </span>
                    {
                        deaths?.new || data.worldNewDeaths 
                        ? 
                            <CountUp
                            start={0}
                            end={ selectedCountry !== 'global' ? deaths?.new ? deaths?.new : 'no record ' : data.worldNewDeaths}
                            duration={2}
                            separator=","
                            className="font-bold "
                        />
                        :
                        'no record'
                    }
                <span> as of {new Date(time? time : Date.now()).toLocaleString().replace(",","").replace(/:.. /," ")}</span>

                </p>
                <p className="text-[12px] font-bold text-black/60 md:text-[10px] md:py-4">Number of deaths caused by COVID-19</p>
          </div>

          {/* <div className="w-full relative my-2 md:w-[220px] h-[120px] bg-white/20 md:m-2 p-2 border-b-8 border-red-600/80 shadow-lg shadow-red-600/40">
            
                    <h1 className=" text-red-600/80 font-bold tracking-[0.05em]">Active Cases</h1>
                    <div className="w-[8px] h-[8px]  bg-red-600/80 top-0 right-0 absolute"></div>
      
                <p className="text-end text-3xl md:text-2xl">
                    <CountUp
                        start={0}
                        end={selectedCountry !== 'global' ? cases?.active : data.worldActiveCases}
                        duration={2}
                        separator=","
                        className="tracking-[0.09em]"
                    />
                    
                </p>
                <p className="text-xs">
                    <span className="font-bold" style={{display: deaths?.new || data.worldNewDeaths ? 'inline-block' : 'none'}}>
                        {
                            deaths?.new || data.worldNewDeaths 
                            ? '+' 
                            : 'asdasd'
                        }
                    </span>
                    {
                        deaths?.new || data.worldNewDeaths 
                        ? 
                            <CountUp
                            start={0}
                            end={ selectedCountry !== 'global' ? deaths?.new ? deaths?.new : 'no record ' : data.worldNewDeaths}
                            duration={2}
                            separator=","
                            className="font-bold text-red-600"
                        />
                        :
                        'no record'
                    }
                <span> as of {new Date(time? time : Date.now()).toLocaleString().replace(",","").replace(/:.. /," ")}</span>

                </p>
            </div> */}

        </div>
    )
}

export default Card;