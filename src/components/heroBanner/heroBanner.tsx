import Link from 'next/link'
import { Button } from '../ui/button'

///
const HeroBanner = () => {
  return (
    <section className='bg-gradient-to-br from-purple-100 to-fuchsia-100 dark:from-gray-900 dark:to-violet-950 py-20 md:py-32 transition-colors duration-300'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center gap-8'>
        {/* Left Section (Content) */}
        <div className='flex-1 text-center md:text-left'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-gray-50 tracking-wide'>
            Grow Your{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 gradient-animation'>
              Wealth
            </span>
            ,<br /> One Insight at a Time.
          </h2>

          <p className='text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 text-gray-700 dark:text-gray-300'>
            Unlock premium, verified stock market tips from SEBI-registered
            professionals and make smarter investment decisions with absolute
            confidence.
          </p>
          <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4'>
            <Link href={'#'}>
              <Button
                variant={'primary'}
                size={'lg'}
                rounded={'full'}
                animated={'bounce'}
                shadow={'lg'}
                fontSize={'md'}
                className='font-semibold px-8 py-6'
              >
                Find Your Analyst
              </Button>
            </Link>
          </div>
        </div>
        {/* Right Section (Image) */}
        <div className='flex-1 mt-8 md:mt-0 relative'>
          <img
            src='https://placehold.co/600x400/8b5cf6/ffffff?text=Financial+Growth'
            alt='A stock market graph'
            className='w-full h-auto rounded-3xl shadow-xl transform rotate-3 scale-105 transition-transform duration-500 ease-in-out'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600/30 to-fuchsia-500/30 rounded-3xl backdrop-blur-sm z-10 transition-colors duration-300'></div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
