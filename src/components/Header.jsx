import logo from '../assets/productLogo-f38cde65.svg'

import Framee from '../assets/frameworkBannerIcon-081bdcdc.svg'
import Portfolio from '../assets/portfolioIcon-ed329ffc.svg';
import React, { useEffect, useState } from 'react';
import Desktop from './Desktop'
import Mobile from './Mobile';

const Text = [
    {
        img: Framee,
        text: (
            <>
                Discover Essential{' '}
                <span className='underline'>Frameworks:</span> Your Roadmaps to
                Success in Product Management!
            </>
        ),
        textSm: (
            <>
                Discover Essential{' '}
                <span className='underline'>Frameworks:</span> Your Roadmaps to
                Success!
            </>
        ),
        color: 'FFCBA5'
    },
    {
        img: Portfolio,
        text: (
            <>
                Showcase Your Success: Introducing{' '}
                <a href='#' className='underline'>
                    User Portfolio
                </a>{' '}
                - Your Portfolio in Product Management!
            </>
        ),
        textSm: (
            <>
                Showcase Your Success: Introducing{' '}
                <a href='#' className='underline'>
                    User Portfolio
                </a>
            </>
        ),
        color: 'D9BCFF'
    }
];

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [click, setClick] = useState(false)
    
    useEffect(() => {
        let timeoutId;

        const updateIndex = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Text.length);
        };

        timeoutId = setInterval(updateIndex, 5000);

        return () => {
            clearInterval(timeoutId);
        };
    }, []);

    console.log(currentIndex);
  return (
      <>
          <div className='bg-[#144c894d]'>
              <div className='w-[95%] mx-auto py-3 font-semibold'>
                  {Text.map((item, index) => (
                      <div
                          key={item.img}
                          className={`flex gap-2 items-center justify-center ${
                              index === currentIndex ? 'text_in' : 'hidden'
                          }`}>
                          <img src={item.img} alt={item.img} className={``} />
                          <p
                              className='hidden md:block md:text-base'
                              style={{ color: `#${item.color}` }}>
                              {index === currentIndex
                                  ? React.createElement('span', null, item.text)
                                  : ''}
                          </p>
                          <p
                              className='block md:hidden text-[9px]'
                              style={{ color: `#${item.color}` }}>
                              {index === currentIndex
                                  ? React.createElement(
                                        'span',
                                        null,
                                        item.textSm
                                    )
                                  : ''}
                          </p>
                          <img
                              src={item.img}
                              alt={item.img}
                              className={`block md:hidden`}
                          />
                      </div>
                  ))}
              </div>
          </div>
          <header className='bg-[#0f0f0f] relative'>
              <div className='mx-auto w-[95%] flex justify-between py-5 items-center'>
                  <div
                      className='flex flex-col gap-1 lgg:hidden'
                      onClick={() => setClick(!click)}>
                      <span className='w-5 h-[3.5px] bg-white'></span>
                      <span className='w-5 h-[3.5px] bg-white'></span>
                      <span className='w-5 h-[3.5px] bg-white'></span>
                  </div>
                  <img
                      src={logo}
                      alt=''
                      className='w-[40%] md:w-[20%] mx-auto md:mx-0  lgg:justify-items-start lgg:relative'
                  />
                  {click ? <div className=" ">
                      <Mobile click={click} setClick={setClick} />
                  </div> : null}
                  <Desktop />
              </div>
          </header>
      </>
  );
}

export default Header
