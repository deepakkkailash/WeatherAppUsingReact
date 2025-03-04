import Container from './Container'
const ColumnOfStuff = (props)=>{
       if(props.type=='Squares'){
            return(
                      <div className='flex flex-col items-center gap-[5px]'>
            <Container type='square' contenttype='TodayWeather' />
            <Container type='square' contenttype='Next5days' />
            </div>
)
}
        else{
            return(
          <div className='flex flex-col items-center gap-[5px]'>
                <Container type='rectangle' contenttype='TodaysHighlight' />
                <Container type='rectangle' contenttype='WeatherMap' />

              </div>);
        }

}

export default ColumnOfStuff