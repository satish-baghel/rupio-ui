import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-50 py-6 transition-colors duration-300'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-sm'>
          &copy; 2025 Rupio. All rights reserved. |
          <a href='#' className='hover:underline ml-1'>
            Disclaimer
          </a>{' '}
          |
          <a href='#' className='hover:underline ml-1'>
            Privacy Policy
          </a>
        </p>
        <p className='text-xs mt-2 text-gray-400 dark:text-gray-500'>
          Disclaimer: Stock tips are provided by SEBI-registered professionals.
          Please conduct your own due diligence before investing.
        </p>
      </div>
    </footer>
  )
}

export default Footer
