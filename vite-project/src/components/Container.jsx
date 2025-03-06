import {useEffect,useState} from 'react'

const Container = (props)=>{
    const [data,setData] = useState(null)
    const fetchdata = async ({lat,lon})=>{


        let fetchurl = null;
        switch(props.contenttype){
            case 'TodayWeather':
                fetchurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_WEATHER}`
                break
            case 'Next5days':
                fetchurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_WEATHER}`
                break
            default:
                 return
        }

        let res = await fetch(fetchurl,{
                method:'GET'
        })

        let data = await res.json();
        console.log(data);
        switch(props.contenttype){
            case 'TodayWeather':
                setData(data)
                break
            case 'Next5days':
                break
            default:
                return

        }



    }

    useEffect(()=>{
      if (navigator.geolocation) {
        let coords = navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                let coords = {lat:latitude, lon:longitude}
                fetchdata(coords)
            },
            (error) => {
                console.error(`Error getting location: ${error.message}`);
            }
    );

    }
    },[])

    if(props.type=='square'){
        if(props.contenttype=='TodayWeather'){
                if(data){
                    return (
                        <div className='gradientbackground rounded-lg w-[30vw] h-[45vh] flex flex-col justify-center items-start pl-[10px] gap-[30px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <h1 className='font-mono text-white font-bold text-5xl'>{Math.round(data.main.temp-273)}°C</h1>
                                <span className='font-mono text-white text-md'>{data.weather[0].main}</span>
                             </div>
                            <hr className='w-[60%] text-white opacity-[0.5]' />
                            <div className='flex flex-col gap-[5px]'>
                                    <span className='text-white text-sm'>{data.name}</span>
                                    <span className='text-white text-sm'>Feels like {Math.round(data.main.feels_like-273)}°C</span>
                            </div>
                    </div>)
                }
                else{
                  //when the data is not loaded yet
                         return <div className='gradientbackground rounded-lg w-[30vw] h-[45vh] flex flex-col justify-center items-start pl-[10px] gap-[10px]'>
                        <h1 className='font-mono text-green-500 font-bold text-5xl'>Loading data...</h1>

                </div>

                }
        }
        else if(props.contenttype=='Next5days'){
                 return <div className='gradientbackground rounded-lg w-[30vw] h-[45vh]'>{}</div>
        }
    }
    else if(props.type=='rectangle'){
              if(props.contenttype=='TodaysHighlight'){
                     return <div className='gradientbackground rounded-lg w-[55vw] h-[40vh]'>{}</div>
        }
        else if(props.contenttype=='WeatherMap'){
                     return <div className='gradientbackground rounded-lg w-[55vw] h-[40vh]'>{}</div>
        }
    }
}


export default Container