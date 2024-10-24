import logo from '../assets/productLogo-f38cde65.svg'
import React, { useState } from 'react';
import Desktop from './Desktop'
import Mobile from './Mobile';
import { BannerText } from '../data/NavLinks';
import useIntervalAnimation from '../hooks/useIntervalAnimation';


const Header = () => {
    const [click, setClick] = useState(false)
    const { currentIndex } = useIntervalAnimation({
        delay: 3000,
        data: BannerText
    });
    
  return (
      <>
          <div className='bg-[#144c894d] overflow-hidden'>
              <div className='w-[95%] mx-auto py-3 font-semibold'>
                  {BannerText.map((item, index) => (
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
                  {click ? <>
                      <Mobile click={click} setClick={setClick} />
                  </> : null}
                  <Desktop />
              </div>
          </header>
      </>
  );
}

export default Header
