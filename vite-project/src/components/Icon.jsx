const Icon = (props)=>{
    return (
        <button className='p-[5px] bg-slate-300 rounded-lg w-fit hover:animate-pulse'>
            <img src={props.image} className='w-[30px] h-[30px]'/>
        </button>
    )
}
export default Icon;