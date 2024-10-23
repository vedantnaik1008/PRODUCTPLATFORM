import { data } from "../data/NavLinks";
console.log(data);

// eslint-disable-next-line react/prop-types
const Mobile = ({click, setClick}) => {
  return (
      <nav className={`bg-[#F0F0F0] transition-all ease-in-out duration-500 ${click ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[200%]'} lgg:hidden absolute top-32 -left-0 text-black z-30 px-4 py-8 w-[250px] h-screen`}>
        <button onClick={()=> setClick(false)} className="px-3 py-1.5 absolute top-3 right-3 rounded-full text-white font-medium bg-black text-[12px]">X</button>
          <ul className='flex flex-col gap-5'>
              {data.map((item)=> (
                <li className='flex gap-4 items-center' key={item.name}>
                    <img src={item.icon} alt={item.icon} className='w-[12%]' />
                    <p className=''>{item.name}</p>
                </li>
              ))}
          </ul>
      </nav>
  );
}

export default Mobile
