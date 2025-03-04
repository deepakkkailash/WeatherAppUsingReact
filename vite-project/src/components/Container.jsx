const Container = (props)=>{
    if(props.type=='square'){
        if(props.contenttype=='TodayWeather'){
                return <div></div>
        }
        else if(props.contenttype=='Next5days'){
                 return <div></div>
        }
    }
    else if(props.type=='rectangle'){
              if(props.contenttype=='TodaysHighlight'){
                     return <div></div>
        }
        else if(props.contenttype=='WeatherMap'){
                     return <div></div>
        }
    }
}


export default Container