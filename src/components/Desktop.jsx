import CC from '../assets/flashCard-5a0854a6.svg';
import Sam from '../assets/sampleQ_AIcon-161232ec.svg';
import frame from '../assets/frameworkIcon-10a04e46.svg';
import IQ from '../assets/interview-3a05a99d.svg';
import Cs from '../assets/caseStudyIcon-4cc33f2b.svg';
import ProductTalk from '../assets/product_talks_icon-4f062cc2.svg';
import Blogs from '../assets/blogIcon-5b91f53a.svg';
import dropDown from '../assets/dropdown-a2724aec.svg';
import { useState } from 'react';

const Desktop = () => {
    const [hoverState, setHoverState] = useState({
        learn: false,
        practice: false,
        community: false
    });

  return (
      <nav className='justify-items-end'>
          <ul className='flex gap-7 items-center'>
              <li className='relative hidden lgg:block'>
                  <div
                      onClick={() =>
                          setHoverState((prev) => ({
                              ...prev,
                              learn: !hoverState.learn,
                              practice: false,
                              community: false
                          }))
                      }
                      className='flex items-center gap-1 text-gray-400 hover:text-white text-lg font-semibold'>
                      <p className=''>Learn</p>{' '}
                      <img
                          src={dropDown}
                          className={`transition-all duration-500 ease-in-out ${
                              hoverState.learn ? 'rotate-180' : 'rotate-0'
                          } hover:fill-white fill-gray-400 w-[18%]`}
                          alt=''
                      />
                      {hoverState.learn ? (
                          <div
                              className={`transition-all duration-500 ease-in-out ${
                                  hoverState.learn
                                      ? 'right'
                                      : '0'
                              } absolute top-10 right-0 z-10 bg-white rounded-b-lg rounded-tl-lg p-5 w-[230px]`}>
                              <ul className='w-full text-lg font-medium flex flex-col gap-6 text-black'>
                                  <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                                      <img
                                          src={CC}
                                          alt=''
                                          className='w-[20%]'
                                      />{' '}
                                      <p className=''>Concept Cards</p>
                                  </li>
                                  <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                                      <img
                                          src={Sam}
                                          className='w-[20%]'
                                          alt=''
                                      />{' '}
                                      <p className=''>Sample Q&A</p>
                                  </li>
                                  <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                                      <img
                                          src={frame}
                                          className='w-[20%]'
                                          alt=''
                                      />{' '}
                                      <p className=''>Frameworks</p>
                                  </li>
                              </ul>
                          </div>
                      ) : null}
                  </div>
              </li>
              <li className=' relative hidden lgg:block'>
                  <div
                      onClick={() =>
                          setHoverState((prev) => ({
                              ...prev,
                              learn: false,
                              practice: !hoverState.practice,
                              community: false
                          }))
                      }
                      className='flex items-center gap-1 text-gray-400 hover:text-white text-lg font-semibold'>
                      <p className=''>Practice</p>{' '}
                      <img
                          src={dropDown}
                          className={`transition-all duration-500 ease-in-out ${
                              hoverState.practice ? 'rotate-180' : 'rotate-0'
                          } hover:fill-white fill-gray-400 w-[15%]`}
                          alt=''
                      />
                      {hoverState.practice ? (
                          <div className={`transition-all duration-500 ease-in-out ${
                                  hoverState.practice
                                      ? 'right'
                                      : '0'
                              } absolute top-10 right-0 z-10 bg-white rounded-b-lg rounded-tl-lg p-5 w-[230px]`}>
                              <ul className='w-full text-lg font-medium flex flex-col gap-6 text-black'>
                                  <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                                      <img
                                          src={IQ}
                                          className='w-[20%]'
                                          alt=''
                                      />{' '}
                                      <p className=''>Interview Questions</p>
                                  </li>
                                  <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                                      <img
                                          src={Cs}
                                          alt=''
                                          className='w-[20%]'
                                      />{' '}
                                      <p className=''>Case studies</p>
                                  </li>
                              </ul>
                          </div>
                      ) : null}
                  </div>
              </li>
              <li className=' relative hidden lgg:block'>
                  <div
                      onClick={() =>
                          setHoverState((prev) => ({
                              ...prev,
                              learn: false,
                              practice: false,
                              community: !hoverState.community
                          }))
                      }
                      className='flex items-center gap-1 text-gray-400 hover:text-white text-lg font-semibold'>
                      <p className=''>Community</p>{' '}
                      <img
                          src={dropDown}
                          className={`transition-all duration-500 ease-in-out ${
                              hoverState.community ? 'rotate-180' : 'rotate-0'
                          } hover:fill-white fill-gray-400 w-[11%]`}
                          alt=''
                      />
                      {hoverState.community ? (
                          <div className={`transition-all duration-500 ease-in-out ${
                                  hoverState.community
                                      ? 'right'
                                      : '0'
                              } absolute top-10 right-0 z-10 bg-white rounded-b-lg rounded-tl-lg p-5 w-[230px]`}>
                              <ul className='w-full text-lg font-medium flex flex-col gap-6 text-black'>
                                  <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                                      <img
                                          src={ProductTalk}
                                          className='w-[20%]'
                                          alt=''
                                      />{' '}
                                      <p className=''>Product Talk</p>
                                  </li>
                                  <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                                      <img
                                          src={Blogs}
                                          alt=''
                                          className='w-[20%]'
                                      />{' '}
                                      <p className=''>Blogs</p>
                                  </li>
                                  <li className='flex items-center gap-3 hover:bg-[#afd7ea]'>
                                      <img src='' alt='' className='w-[20%]' />{' '}
                                      <p className=''></p>
                                  </li>
                              </ul>
                          </div>
                      ) : null}
                  </div>
              </li>
              <li className='hidden lgg:block'>
                  <a
                      className='flex items-center gap-2 text-gray-400 hover:text-white text-lg font-semibold'
                      href=''>
                      Live Project
                  </a>
              </li>
              <li className='hidden lgg:block'>
                  <a
                      className='flex items-center gap-2 text-white text-lg font-semibold'
                      href=''>
                      Portfolio
                  </a>
              </li>
              <li className='relative '>
                  <button className='bg-white rounded-md  text-black  py-[6px] px-4 font-semibold text-[12px] lgg:text-lg  self-center xl:start-btn'>
                      Register Now!
                  </button>
              </li>
          </ul>
      </nav>
  );
}

export default Desktop
