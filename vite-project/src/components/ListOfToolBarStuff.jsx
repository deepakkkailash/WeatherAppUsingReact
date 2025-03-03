import ListOfIcons from '../IconPack.js'
import MainLogo from '../assets/MainLogo.png'
import Icon from './Icon'
const ListOfToolBarStuff = ()=>{
    return(
    <div className='flex flex-col justify-around items-center gap-[80px] hover:animate-pulse' >
            <img src={MainLogo} className='w-[50px] h-[50px]'/>
            <div className='flex flex-col items-center gap-[30px]'>
            {ListOfIcons.map((icon)=>{
                return <Icon key={icon} image={icon} />
            })}
            </div>
    </div>);
}

export default ListOfToolBarStuff;