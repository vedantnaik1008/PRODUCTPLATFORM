import { useState } from 'react';
import HoverList from './HoverList';
import Svg from './ui/Svg';
import ListContainer from './ui/ListContainer';
import { desktopLinks } from '../data/NavLinks';

const Desktop = () => {
    const [hoverState, setHoverState] = useState({
        learn: false,
        practice: false,
        community: false
    });

    return (
        <nav className='justify-items-end'>
            <ul className='flex gap-7 items-center'>
                <ListContainer
                    setHoverState={setHoverState}
                    learn={!hoverState.learn}
                    practice={false}
                    community={false}>
                    <p className=''>Learn</p>
                    <Svg state={hoverState.learn} className={'w-[18%]'} />
                    <HoverList
                        start={4}
                        end={7}
                        state={hoverState.learn}
                        hoverState={hoverState}
                    />
                </ListContainer>
                <ListContainer
                    setHoverState={setHoverState}
                    learn={false}
                    practice={!hoverState.practice}
                    community={false}>
                    <p className=''>Practice</p>{' '}
                    <Svg state={hoverState.practice} className={'w-[14%]'} />
                    <HoverList
                        start={1}
                        end={2}
                        state={hoverState.practice}
                        hoverState={hoverState}
                    />
                </ListContainer>
                <ListContainer
                    setHoverState={setHoverState}
                    learn={false}
                    practice={false}
                    community={!hoverState.community}>
                    <p className=''>Community</p>{' '}
                    <Svg state={hoverState.community} className={'w-[10%]'} />
                    <HoverList
                        start={8}
                        end={9}
                        state={hoverState.community}
                        hoverState={hoverState}
                    />
                </ListContainer>
                {desktopLinks.map((item) => (
                    <li key={item.name} className='hidden lgg:block'>
                        <a className={`${item.className}`} href=''>
                            {item.name}
                        </a>
                    </li>
                ))}
                <li className='relative '>
                    <button className='bg-white rounded-md  text-black  py-[6px] px-4 font-semibold text-[12px] lgg:text-lg  self-center xl:start-btn'>
                        Login
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Desktop;
