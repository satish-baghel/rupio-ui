import { ArrowDown, ArrowUp } from 'lucide-react'
import React from 'react'
import { ScrollArea } from '../ui/scroll-area'

const StockList = () => {
  const gainers = [
    { name: 'IT SOLUTIONS', change: +2.55, price: '₹ 1,234.50' },
    { name: 'AGROCHEM', change: +1.98, price: '₹ 456.78' },
    { name: 'MEDIA CORP', change: +1.52, price: '₹ 789.12' },
    { name: 'IT SOLUTIONS 2 ', change: +2.55, price: '₹ 1,234.50' },
    { name: 'AGROCHEM 1', change: +1.98, price: '₹ 456.78' },
    { name: 'MEDIA CORP 3', change: +1.52, price: '₹ 789.12' },
  ]

  const losers = [
    { name: 'FINANCE LTD', change: -3.1, price: '₹ 987.65' },
    { name: 'RETAIL INDIA', change: -2.05, price: '₹ 321.09' },
    { name: 'POWER GEN', change: -1.75, price: '₹ 654.32' },
  ]
  return (
    <section className='bg-white dark:bg-gray-900 py-12 transition-colors duration-300'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Top Gainers */}
          <div className='flex-1 bg-gray-50 dark:bg-gray-950 p-6 rounded-xl shadow-lg'>
            <h3 className='text-2xl font-bold text-green-500 flex items-center mb-4'>
              <ArrowUp className='w-6 h-6 mr-2' /> Top Gainers
            </h3>
            <ScrollArea className='h-[400px] p-4'>
              <ul className='space-y-4'>
                {gainers.map((stock, index) => (
                  <li
                    key={index}
                    className='flex justify-between items-center py-2 border-b last:border-b-0 border-gray-200 dark:border-gray-800'
                  >
                    <div>
                      <p className='font-semibold text-gray-900 dark:text-gray-50'>
                        {stock.name}
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        {stock.price}
                      </p>
                    </div>
                    <span className='text-green-500 font-bold text-lg'>
                      {stock.change.toFixed(2)}%
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>

          {/* Top Losers */}
          <div className='flex-1 bg-gray-50 dark:bg-gray-950 p-6 rounded-xl shadow-lg'>
            <h3 className='text-2xl font-bold text-red-500 flex items-center mb-4'>
              <ArrowDown className='w-6 h-6 mr-2' /> Top Losers
            </h3>
            <ScrollArea className='h-[400px] p-4'>
              <ul className='space-y-4'>
                {losers.map((stock, index) => (
                  <li
                    key={index}
                    className='flex justify-between items-center py-2 border-b last:border-b-0 border-gray-200 dark:border-gray-800'
                  >
                    <div>
                      <p className='font-semibold text-gray-900 dark:text-gray-50'>
                        {stock.name}
                      </p>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        {stock.price}
                      </p>
                    </div>
                    <span className='text-red-500 font-bold text-lg'>
                      {stock.change.toFixed(2)}%
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StockList
