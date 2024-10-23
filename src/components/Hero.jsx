import interviewImg from '../assets/interviewLaptopIcon-2b48c087.webp';
import sampleImg from '../assets/sampleQ_ALaptopIcon-09079d58.webp';
import frameworkImg from '../assets/frameworkLaptopIcon-b884b948.webp';
import caseStudiesImg from '../assets/caseStudyLaptopIcon-73352860.webp';
import interviewImgMobile from '../assets/mobileInterviewLaptopIcon-35aff321.svg';
import sampleImgMobile from '../assets/mobileSampleQ_ALaptopIcon-b8a906eb.svg';
import frameworkImgMobile from '../assets/mobileFrameworkLaptopIcon-fd456dfa.svg';
import caseStudiesImgMobile from '../assets/mobileCaseStudyLaptopIcon-7d6d1639.svg';
import React, { useEffect, useState } from 'react';

const Text = [
    {
        img: interviewImg,
        imgSm: interviewImgMobile,
        text: 'Interview Questions',
        color: 'rgb(197, 153, 255)',
        delay: 1000
    },
    {
        img: sampleImg,
        imgSm: sampleImgMobile,
        text: 'Sample Q&A',
        color: 'rgb(0, 224, 68)',
        delay: 1500
    },
    {
        img: frameworkImg,
        imgSm: frameworkImgMobile,
        text: 'Frameworks',
        color: 'rgb(255, 111, 6)',
        delay: 2000
    },
    {
        img: caseStudiesImg,
        imgSm: caseStudiesImgMobile,
        text: 'Case Studies',
        color: 'rgb(0, 255, 255)',
        delay: 2500
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeoutId;

            
        const updateIndex = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Text.length);
        };

        timeoutId = setInterval(updateIndex, 3000);

        return () => {
            clearInterval(timeoutId);
        };
    }, []);
console.log(currentIndex);

    return (
        <section className='hero'>
            <div className='md:h-[70dvh] lgg:h-[62dvh] w-[90%] mx-auto flex flex-col-reverse md:flex-col lgg:flex-row md:justify-between xl:justify-around items-center'>
                <div className='relative self-center block md:hidden'>
                    <button className='bg-white rounded-md  text-black  py-[6px] px-4 font-semibold text-lg mt-5'>
                        Register for free
                    </button>
                </div>
                <div className='xl:w-[40%]  md:hidden  justify-end flex'>
                    {Text.map((item, index) => (
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
                    {Text.map((item, index) => (
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
                        {Text.map((item, index) => (
                            <span
                                key={item.color}
                                className={`transition-opacity duration-500 ${
                                    index === currentIndex
                                        ? 'text_in'
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
                        {Text.map((item, index) => (
                            <span
                                key={item.color}
                                className={`transition-opacity duration-500 ${
                                    index === currentIndex
                                        ? 'text_in'
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
                        <button className='bg-white rounded-md  text-black  py-[6px] px-4 font-semibold md:text-lg text-4xl  llg:mr-[80px]'>
                            Register for free
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
