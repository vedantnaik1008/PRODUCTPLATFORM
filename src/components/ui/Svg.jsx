/* eslint-disable react/prop-types */

const Svg = ({state, className}) => {
  return (
      <>
          <svg
              className={`transition-all duration-500 ease-in-out ${
                  state ? 'rotate-180' : 'rotate-0'
              }   ${className}`}
              width='20'
              height='13'
              viewBox='0 0 20 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                  d='M2 2L9.66387 10L17.6303 2'
                  stroke='#fefefe80'
                  strokeWidth='4'
                  strokeLinecap='round'
                  className='hover:stroke-white'
              />
          </svg>
      </>
  );
}

export default Svg
