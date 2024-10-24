import { useState } from 'react';
import HoverList from './HoverList';
import Svg from './ui/Svg';

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
                        className='flex items-center gap-1 text-[rgba(254,_254,_254,_0.5)] hover:text-white text-lg font-semibold'>
                        <p className=''>Learn</p>
                        <Svg state={hoverState.learn} className={'w-[18%]'} />
                        <HoverList
                            start={4}
                            end={7}
                            state={hoverState.learn}
                            hoverState={hoverState}
                        />
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
                        className='flex items-center gap-1 text-[#fefefe80] hover:text-white text-lg font-semibold'>
                        <p className=''>Practice</p>{' '}
                        <Svg
                            state={hoverState.practice}
                            className={'w-[14%]'}
                        />
                        <HoverList
                            start={1}
                            end={2}
                            state={hoverState.practice}
                            hoverState={hoverState}
                        />
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
                        className='flex items-center gap-1 text-[rgba(254,_254,_254,_0.5)] hover:text-white text-lg font-semibold'>
                        <p className=''>Community</p>{' '}
                        <Svg
                            state={hoverState.community}
                            className={'w-[10%]'}
                        />
                        <HoverList
                            start={8}
                            end={9}
                            state={hoverState.community}
                            hoverState={hoverState}
                        />
                    </div>
                </li>
                <li className='hidden lgg:block'>
                    <a
                        className='flex items-center gap-2 text-[rgba(254,_254,_254,_0.5)] hover:text-white text-lg font-semibold'
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
};

export default Desktop;
