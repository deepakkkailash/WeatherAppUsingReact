import ToolBar from './components/ToolBar'
import WeatherStuff from './components/WeatherStuff'
const App = ()=>{
    return (
        <div className='bg-black w-[100vw] h-[100vh] flex flex-row gap-[10px]'>
            <ToolBar />
            <WeatherStuff />
        </div>
    )
}


export default App;