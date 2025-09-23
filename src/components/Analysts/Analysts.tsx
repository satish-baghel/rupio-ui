'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

const Analysts = () => {
  const [currentAnalystIndex, setCurrentAnalystIndex] = useState(0)

  const handleNextAnalyst = () => {
    setCurrentAnalystIndex((prevIndex) =>
      prevIndex === analysts.length - 1 ? 0 : prevIndex + 1
    )
  }
  const analysts = [
    {
      name: 'Jane Doe',
      sebiRegNo: 'INA000012345',
      expertise: 'IT, Pharmaceuticals',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Jane',
    },
    {
      name: 'John Smith',
      sebiRegNo: 'INA000054321',
      expertise: 'Automotive, FMCG',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=John',
    },
    {
      name: 'Priya Sharma',
      sebiRegNo: 'INA000067890',
      expertise: 'Banking, Finance',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Priya',
    },
    {
      name: 'Rajesh Kumar',
      sebiRegNo: 'INA000013579',
      expertise: 'Energy, Utilities',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Rajesh',
    },
    {
      name: 'Amrita Singh',
      sebiRegNo: 'INA000024680',
      expertise: 'Retail, Consumer Goods',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Amrita',
    },
    {
      name: 'Vikram Reddy',
      sebiRegNo: 'INA000097531',
      expertise: 'Telecommunications',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Vikram',
    },
    {
      name: 'Deepika Verma',
      sebiRegNo: 'INA000086420',
      expertise: 'Infrastructure, Real Estate',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Deepika',
    },
    {
      name: 'Sanjay Gupta',
      sebiRegNo: 'INA000011223',
      expertise: 'Healthcare',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Sanjay',
    },
    {
      name: 'Kavita Rao',
      sebiRegNo: 'INA000033445',
      expertise: 'Technology, SaaS',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Kavita',
    },
    {
      name: 'Ajay Verma',
      sebiRegNo: 'INA000055667',
      expertise: 'Chemicals',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Ajay',
    },
    {
      name: 'Shruti Desai',
      sebiRegNo: 'INA000077889',
      expertise: 'Logistics',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Shruti',
    },
    {
      name: 'Gaurav Singh',
      sebiRegNo: 'INA000099001',
      expertise: 'Travel, Hospitality',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Gaurav',
    },
    {
      name: 'Neha Patel',
      sebiRegNo: 'INA000010101',
      expertise: 'Textiles',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Neha',
    },
    {
      name: 'Arjun Bhatia',
      sebiRegNo: 'INA000020202',
      expertise: 'Manufacturing',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Arjun',
    },
    {
      name: 'Sunita Reddy',
      sebiRegNo: 'INA000030303',
      expertise: 'Agriculture',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Sunita',
    },
    {
      name: 'Rohan Kapoor',
      sebiRegNo: 'INA000040404',
      expertise: 'Media & Entertainment',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Rohan',
    },
    {
      name: 'Ananya Mehra',
      sebiRegNo: 'INA000050505',
      expertise: 'Fintech',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Ananya',
    },
    {
      name: 'Aditya Jain',
      sebiRegNo: 'INA000060606',
      expertise: 'Biotechnology',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Aditya',
    },
    {
      name: 'Swati Narang',
      sebiRegNo: 'INA000070707',
      expertise: 'Metal & Mining',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Swati',
    },
    {
      name: 'Kartik Singh',
      sebiRegNo: 'INA000080808',
      expertise: 'Food & Beverage',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Kartik',
    },
    {
      name: 'Nisha Vohra',
      sebiRegNo: 'INA000090909',
      expertise: 'Education',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Nisha',
    },
    {
      name: 'Rahul Das',
      sebiRegNo: 'INA000012121',
      expertise: 'Commodities',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Rahul',
    },
    {
      name: 'Divya Shah',
      sebiRegNo: 'INA000023232',
      expertise: 'Small Cap Stocks',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Divya',
    },
    {
      name: 'Vivek Khanna',
      sebiRegNo: 'INA000034343',
      expertise: 'Mutual Funds',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Vivek',
    },
    {
      name: 'Pooja Gupta',
      sebiRegNo: 'INA000045454',
      expertise: 'Derivatives',
      img: 'https://placehold.co/128x128/f472b6/ffffff?text=Pooja',
    },
  ]

  return (
    <section
      id='analysts'
      className='py-16 bg-gradient-to-br from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300'
    >
      <div className='container mx-auto px-4 text-center'>
        <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4'>
          Our SEBI Registered Analysts
        </h3>
        <p className='text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-8'>
          Browse our directory to find and connect with top-tier financial
          experts who are verified by SEBI.
        </p>

        <Carousel
          opts={{
            align: 'start',
            duration: 10,
            skipSnaps: true,
          }}
        >
          <CarouselContent>
            {analysts.map((analyst, i) => {
              return (
                <CarouselItem
                  key={`${analyst.name}-${i}`}
                  className='basis-1/1 sm:basis-1/1 md:basis-1/2 lg:basis-1/2'
                >
                  <div className='flex flex-col items-center'>
                    {analysts.length > 0 && (
                      <div className='flex flex-col items-center'>
                        <div className='w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-fuchsia-600 shadow-md'>
                          <img
                            src={analyst.img}
                            alt={`Analyst ${analyst.name}`}
                            className='object-cover w-full h-full'
                          />
                        </div>
                        <h4 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                          {analyst.name}
                        </h4>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                          SEBI Reg. No. {analyst.sebiRegNo}
                        </p>
                        <p className='text-gray-700 dark:text-gray-300 mt-2'>
                          Expertise: {analyst.expertise}
                        </p>
                        <a
                          href='#'
                          className='mt-2 text-fuchsia-600 hover:underline font-medium'
                        >
                          View Profile
                        </a>
                      </div>
                    )}
                    <div className='mt-6 text-gray-600 dark:text-gray-400'>
                      {/* {currentAnalystIndex + 1} of {analysts.length} */}
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselNext className='right-0 md:-right-12 ' />
          <CarouselPrevious className='left-0 md:-left-12' />
        </Carousel>
      </div>
    </section>
  )
}

export default Analysts
{
  /* <div className='relative flex items-center justify-center'>
          <button
            // onClick={handlePrevAnalyst}
            className='absolute left-0 p-2 rounded-full bg-violet-100 dark:bg-gray-800 shadow-md hover:bg-violet-200 dark:hover:bg-gray-700 transition-colors z-10'
            aria-label='Previous analyst'
          >
            <ChevronLeft
              size={24}
              className='text-gray-600 dark:text-gray-300'
            />
          </button>
          <div className='flex flex-col items-center'>
            {analysts.length > 0 && (
              <div className='flex flex-col items-center'>
                <div className='w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-fuchsia-600 shadow-md'>
                  <img
                    src={analysts[currentAnalystIndex].img}
                    alt={`Analyst ${analysts[currentAnalystIndex].name}`}
                    className='object-cover w-full h-full'
                  />
                </div>
                <h4 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                  {analysts[currentAnalystIndex].name}
                </h4>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  SEBI Reg. No. {analysts[currentAnalystIndex].sebiRegNo}
                </p>
                <p className='text-gray-700 dark:text-gray-300 mt-2'>
                  Expertise: {analysts[currentAnalystIndex].expertise}
                </p>
                <a
                  href='#'
                  className='mt-2 text-fuchsia-600 hover:underline font-medium'
                >
                  View Profile
                </a>
              </div>
            )}
            <div className='mt-6 text-gray-600 dark:text-gray-400'>
              {currentAnalystIndex + 1} of {analysts.length}
            </div>
          </div>
          <button
            onClick={handleNextAnalyst}
            className='absolute right-0 p-2 rounded-full bg-violet-100 dark:bg-gray-800 shadow-md hover:bg-violet-200 dark:hover:bg-gray-700 transition-colors z-10'
            aria-label='Next analyst'
          >
            <ChevronRight
              size={24}
              className='text-gray-600 dark:text-gray-300'
            />
          </button>
        </div> */
}
