import ColumnOfStuff from './ColumnOfStuff'
const WeatherStuff = ()=>{
    return (
        <div className='flex flex-row justify-start items-center gap-[30px] items-center w-[96vw] h-[100vh]'>
                <ColumnOfStuff type='Squares' />
                <ColumnOfStuff type='Rectangles' />
        </div>

    )

}


export default WeatherStuff;