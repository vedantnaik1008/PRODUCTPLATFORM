import CC from '../assets/flashCard-5a0854a6.svg';
import Sam from '../assets/sampleQ_AIcon-161232ec.svg';
import frame from '../assets/frameworkIcon-10a04e46.svg';
import IQ from '../assets/interview-3a05a99d.svg';
import Cs from '../assets/caseStudyIcon-4cc33f2b.svg';
import ProductTalk from '../assets/product_talks_icon-4f062cc2.svg';
import Blogs from '../assets/blogIcon-5b91f53a.svg';
import Profile from '../assets/portfolio_icon-d4976e84.svg';
import LiveProject from '../assets/live-project-icon-9a56a69b.svg';
import Framee from '../assets/frameworkBannerIcon-081bdcdc.svg';
import Portfolio from '../assets/portfolioIcon-ed329ffc.svg';
import interviewImg from '../assets/interviewLaptopIcon-2b48c087.webp';
import sampleImg from '../assets/sampleQ_ALaptopIcon-09079d58.webp';
import frameworkImg from '../assets/frameworkLaptopIcon-b884b948.webp';
import caseStudiesImg from '../assets/caseStudyLaptopIcon-73352860.webp';
import interviewImgMobile from '../assets/mobileInterviewLaptopIcon-35aff321.svg';
import sampleImgMobile from '../assets/mobileSampleQ_ALaptopIcon-b8a906eb.svg';
import frameworkImgMobile from '../assets/mobileFrameworkLaptopIcon-fd456dfa.svg';
import caseStudiesImgMobile from '../assets/mobileCaseStudyLaptopIcon-7d6d1639.svg';

export const data = [
    {
    name: 'Portfolio', 
    icon: Profile
},
{
    name: 'Interview Questions', 
    icon: IQ
},
{
    name: 'Blog', 
    icon: Blogs
},
{
    name: 'Case Studies', 
    icon: Cs
},
{
    name: 'Concept Cards', 
    icon: CC
},
{
    name: 'Sample Q&A', 
    icon: Sam
},
{
    name: 'Frameworks', 
    icon: frame
},
{
    name: 'Live Project', 
    icon: LiveProject
},
{
    name: 'Product Talk', 
    icon: ProductTalk
},
]

export const desktopLinks = [
    {
        name: 'Live Project',
        className:
            'flex items-center gap-2 text-[rgba(254,_254,_254,_0.5)] hover:text-white text-lg font-semibold'
    },
    {
        name: 'Portfolio',
        className: 'flex items-center gap-2 text-white text-lg font-semibold'
    }
];

export const BannerText = [
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

export const HeroText = [
    {
        img: caseStudiesImg,
        icon: Cs,
        imgSm: caseStudiesImgMobile,
        text: 'Case Studies',
        color: 'rgb(0, 255, 255)',
        delay: 2500,
        registeredText:
            'Industry relevant problem statements & case studies curated for mastering effective problem-solving skills.'
    },
    {
        img: interviewImg,
        icon: IQ,
        imgSm: interviewImgMobile,
        text: 'Interview Questions',
        color: 'rgb(197, 153, 255)',
        delay: 1000,
        registeredText:
            'Past interview questions gathered from reliable sources to help you understand the interview pattern of your target role/company'
    },
    {
        img: sampleImg,
        icon: Sam,
        imgSm: sampleImgMobile,
        text: 'Sample Q&A',
        color: 'rgb(0, 224, 68)',
        delay: 1500,
        registeredText:
            'Learn the expert’s approach from a rich collection of interview questions and their recommended answers.'
    },
    {
        img: frameworkImg,
        icon: frame,
        imgSm: frameworkImgMobile,
        text: 'Frameworks',
        color: 'rgb(255, 111, 6)',
        delay: 2000,
        registeredText:
            'Guiding pointers that help you solve product management problems in a structured manner'
    }
];