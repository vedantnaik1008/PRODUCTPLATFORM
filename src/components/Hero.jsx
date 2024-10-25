import React, { useState } from 'react';
import { HeroText } from '../data/NavLinks';
import rightArrow from '../assets/registerBtnArrow-12fbff34.svg';
import useIntervalAnimation from '../hooks/useIntervalAnimation';

const Hero = () => {
    const { currentIndex } = useIntervalAnimation({
        delay: 2000,
        data: HeroText
    });
    // const [registered, setRegistered] = useState(false)

    return (
        <section className='hero'>
            <div className=' w-[90%] mx-auto flex flex-col items-center'>
                <div className='xl:w-[95%] mx-auto self-center flex flex-col items-start xl:items-center md:my-4 lg:mt-6 lg:mb-4'>
                    <p className='text-white md:block font-semibold hidden md:text-3xl lgg:text-4xl xl:text-5xl mb-5'>
                        Elevate Your Product Management
                    </p>
                    <p className='text-white font-semibold hidden md:text-3xl lgg:text-4xl xl:text-start xl:text-5xl  md:block  mb-5 lgg:mb-16'>
                        Career with{' '}
                        {HeroText.map((item, index) => (
                            <span
                                key={item.color}
                                className={`transition-opacity duration-100 inline-block ${
                                    index === currentIndex
                                        ? 'text_in_span'
                                        : 'hidden'
                                }`}
                                style={{
                                    color: `${item.color}`
                                }}>
                                {item.text}
                            </span>
                        ))}
                    </p>
                    <p className='md:hidden block text-white font-semibold  text-2xl my-5 text-center'>
                        Elevate Your <br /> Product Management Career with{' '}
                        <br />
                        {HeroText.map((item, index) => (
                            <span
                                key={item.color}
                                className={`transition-opacity duration-100 inline-block  ${
                                    index === currentIndex
                                        ? 'text_in_span'
                                        : 'hidden'
                                }`}
                                style={{
                                    color: `${item.color}`
                                }}>
                                {item.text}
                            </span>
                        ))}
                    </p>
                </div>

                <div className='xl:w-full flex flex-col items-center lg:flex-row lg:justify-evenly'>
                    <div className='h-[30dvh] md:h-[48dvh]  mb-2 md:mb-4 lg:w-[30dvw] lg:flex lg:justify-center'>
                        {HeroText.map((item, index) => (
                            <React.Fragment key={item.img}>
                                <img
                                    src={item.imgSm}
                                    alt={item.imgSm}
                                    width={320}
                                    height={320}
                                    className={` w-[317px] lg:w-full  transition-opacity duration-500 ${
                                        index === currentIndex
                                            ? 'appear md:hidden'
                                            : 'hidden'
                                    } `}
                                />
                            </React.Fragment>
                        ))}

                        <div className='hidden md:block w-full'>
                            {HeroText.map((item, index) => (
                                <React.Fragment key={item.img}>
                                    <img
                                        src={item.img}
                                        alt={item.img}
                                        className={`  w-[349px]  transition-opacity duration-500 ${
                                            index === currentIndex
                                                ? 'appear'
                                                : 'hidden'
                                        } `}
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex gap-2 md:gap-10 flex-wrap lg:flex-nowrap justify-center'>
                            {HeroText.map((item, index) => (
                                <div key={item.color} className='mt-4 '>
                                    <div
                                        style={{
                                            boxShadow: `${
                                                index === currentIndex
                                                    ? `5px 5px  
                                                      ${item.color}`
                                                    : 'none'
                                            }`
                                        }}
                                        className='flex flex-col items-center justify-center gap-2 bg-white p-3 rounded-md lg:rounded-xl w-20 h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 lg:pt-5 lg:px-3 xl:h-28'>
                                        <img
                                            src={item.icon}
                                            alt=''
                                            className='w-[40%] lg:w-[50%]'
                                        />
                                        <p
                                            style={{
                                                color: `${
                                                    index === currentIndex
                                                        ? `${item.color}`
                                                        : ''
                                                }`
                                            }}
                                            className='mt-1 lg:mt-0 text-[12px] lg:text-sm text-center break-words  font-semibold'>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='h-auto relative'>
                            {HeroText.map((item, index) => (
                                <p
                                    key={item.color}
                                    className={` text-white absolute left-0  max-w-[500px] transition-opacity duration-500 mt-5 md:mt-10 text-[12px] md:text-base lg:text-lg md:text-start text-center font-semibold ${
                                        index === currentIndex
                                            ? 'appear'
                                            : 'hidden'
                                    }`}>
                                    {item.registeredText}
                                </p>
                            ))}
                        </div>

                        <div className='relative self-center flex justify-center md:hidden mt-20'>
                            <button className='start-btn font-semibold text-sm mt-5 rounded-sm flex items-center gap-4'>
                                Get Started
                                <img src={rightArrow} alt='' className='' />
                            </button>
                        </div>

                        <div className='relative self-center hidden md:flex justify-center  md:mt-32 lg:mt-40 '>
                            <button className='bg-white rounded-md start-btn  text-black  py-[10px] px-4 font-semibold flex items-center gap-4 md:text-lg lgg:text-2xl  llg:mr-[80px]'>
                                Get Started
                                <img src={rightArrow} alt='' className='' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
