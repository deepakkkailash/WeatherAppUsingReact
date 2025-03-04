const Container = (props)=>{
    if(props.type=='square'){
        if(props.contenttype=='TodayWeather'){
                return <div className='gradientbackground rounded-lg w-[30vw] h-[45vh]'></div>
        }
        else if(props.contenttype=='Next5days'){
                 return <div className='gradientbackground rounded-lg w-[30vw] h-[45vh]'></div>
        }
    }
    else if(props.type=='rectangle'){
              if(props.contenttype=='TodaysHighlight'){
                     return <div className='gradientbackground rounded-lg w-[55vw] h-[40vh]'></div>
        }
        else if(props.contenttype=='WeatherMap'){
                     return <div className='gradientbackground rounded-lg w-[55vw] h-[40vh]'></div>
        }
    }
}


export default Container