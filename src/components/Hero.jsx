import React from 'react';
import { HeroText } from '../data/NavLinks';
import useIntervalAnimation from '../hooks/useIntervalAnimation';


const Hero = () => {
    const { currentIndex } = useIntervalAnimation({delay: 2000, data: HeroText});

    return (
        <section className='hero'>
            <div className='md:h-[70dvh] lgg:h-[62dvh] w-[90%] mx-auto flex flex-col-reverse md:flex-col lgg:flex-row md:justify-between xl:justify-around items-center'>
                <div className='relative self-center block md:hidden '>
                    <button className='start-btn font-semibold text-sm mt-5 rounded-md'>
                        Register for free
                    </button>
                </div>
                <div className='xl:w-[40%]  md:hidden  justify-end flex'>
                    {HeroText.map((item, index) => (
                        <React.Fragment key={item.img}>
                            <img
                                src={item.imgSm}
                                alt={item.imgSm}
                                width={320}
                                height={320}
                                className={` w-[317px]  transition-opacity duration-500 ${
                                    index === currentIndex ? 'appear' : 'hidden'
                                } `}
                            />
                        </React.Fragment>
                    ))}
                </div>
                <div className='xl:w-[45%]  justify-end hidden md:flex'>
                    {HeroText.map((item, index) => (
                        <React.Fragment key={item.img}>
                            <img
                                src={item.img}
                                alt={item.img}
                                className={`  w-[349px]  transition-opacity duration-500 ${
                                    index === currentIndex ? 'appear' : 'hidden'
                                } `}
                            />
                        </React.Fragment>
                    ))}
                </div>
                <div className='xl:w-[50%] self-center flex flex-col items-start '>
                    <p className='text-white md:block font-semibold hidden md:text-3xl lgg:text-4xl mb-5'>
                        Elevate Your Product Management
                    </p>
                    <p className='text-white font-semibold hidden md:text-3xl lgg:text-4xl md:block  mb-5 lgg:mb-16'>
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
                    <div className='relative self-center hidden md:block'>
                        <button className='bg-white rounded-md start-btn  text-black  py-[6px] px-4 font-semibold md:text-lg lgg:text-4xl  llg:mr-[80px]'>
                            Register for free
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
