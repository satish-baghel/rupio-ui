import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import Autoplay from 'embla-carousel-autoplay'
const marketIndices = [
  { name: 'NIFTY', value: '25,202.35', change: -124.7, percentage: -0.49 },
  { name: 'BANKNIFTY', value: '55,284.75', change: -174.1, percentage: -0.31 },
  { name: 'SENSEX', value: '82,159.97', change: -466.26, percentage: -0.56 },
  { name: 'FINNIFTY', value: '26,501.20', change: 89.55, percentage: 0.34 },
  { name: 'MIDCAP', value: '15,890.15', change: 25.4, percentage: 0.16 },
  { name: 'NIFTY', value: '25,202.35', change: -124.7, percentage: -0.49 },
  { name: 'BANKNIFTY', value: '55,284.75', change: -174.1, percentage: -0.31 },
  { name: 'SENSEX', value: '82,159.97', change: -466.26, percentage: -0.56 },
  { name: 'FINNIFTY', value: '26,501.20', change: 89.55, percentage: 0.34 },
  { name: 'MIDCAP', value: '15,890.15', change: 25.4, percentage: 0.16 },
]
const Stock = () => {
  return (
    <section className='dark:bg-gray-950 py-8 px-4'>
      <div className='container mx-auto'>
        <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-2'>
          Market Indices
        </h3>
        <p className='text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-center mb-8'>
          Keep a pulse on the Indian market's performance with a real-time
          overview of key indices.
        </p>

        <div className=''>
          <Carousel
            opts={{
              // align: 'start',
              duration: 10,
              skipSnaps: true,
            }}
          >
            <CarouselContent className='w-full'>
              {marketIndices.map((index, i) => (
                <CarouselItem
                  key={`${index.name}-${i}`}
                  className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 px-4 mb-4'
                >
                  <Card>
                    <CardContent>
                      <div className=' bg-white dark:bg-gray-900 duration-300'>
                        <h4 className='text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1'>
                          {index.name}
                        </h4>
                        <p className='text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100'>
                          {index.value}
                        </p>
                        <div className='flex items-center space-x-1 mt-1'>
                          <span
                            className={`text-sm font-semibold ${
                              index.change >= 0
                                ? 'text-green-500'
                                : 'text-red-500'
                            }`}
                          >
                            {index.change > 0 ? '+' : ''}
                            {index.change.toFixed(2)}
                          </span>
                          <span
                            className={`text-sm font-semibold ${
                              index.change >= 0
                                ? 'text-green-500'
                                : 'text-red-500'
                            }`}
                          >
                            ({index.percentage > 0 ? '+' : ''}
                            {index.percentage.toFixed(2)}%)
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Stock

//
{
  /*  <div className='min-w-[180px] md:min-w-[250px] bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 flex-col justify-between hover:shadow-lg transition-shadow duration-300'>
<h4 className='text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1'>
{index.name}
</h4>
<p className='text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100'>
{index.value}
</p>
<div className='flex items-center space-x-1 mt-1'>
<span
  className={`text-sm font-semibold ${
    index.change >= 0 ? 'text-green-500' : 'text-red-500'
  }`}
>
  {index.change > 0 ? '+' : ''}
  {index.change.toFixed(2)}
</span>
<span
  className={`text-sm font-semibold ${
    index.change >= 0 ? 'text-green-500' : 'text-red-500'
  }`}
>
  ({index.percentage > 0 ? '+' : ''}
  {index.percentage.toFixed(2)}%)
</span>
</div>
</div> */
}
