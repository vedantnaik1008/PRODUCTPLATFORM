/* eslint-disable react/prop-types */
import { data } from '../data/NavLinks';
import Cs from '../assets/caseStudyIcon-4cc33f2b.svg';
import Blogs from '../assets/blogIcon-5b91f53a.svg';


const HoverList = ({start, end, state, hoverState}) => {
  return (
      <>
      
          {state ? (
              <div
                  className={`transition-all duration-500 ease-in-out ${
                      state ? 'right' : '0'
                  } absolute top-10 right-0 z-10 bg-white rounded-b-lg rounded-tl-lg p-5 w-[230px]`}>
                  <ul className='w-full text-lg font-medium flex flex-col gap-6 text-black'>
                      {data.slice(start, end).map((item) => (
                          <li
                              key={item.name}
                              className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                              <img src={item.icon} alt='' className='w-[20%]' />{' '}
                              <p className=''>{item.name}</p>
                          </li>
                      ))}
                      {state === hoverState.practice && (
                          <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                              <img src={Cs} alt='' className='w-[20%]' />{' '}
                              <p className=''>Case studies</p>
                          </li>
                      )}
                      {state === hoverState.community && (
                          <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                              <img src={Blogs} alt='' className='w-[20%]' />{' '}
                              <p className=''>Blogs</p>
                          </li>
                      )}
                  </ul>
              </div>
          ) : null}
      </>
  );
}

export default HoverList
