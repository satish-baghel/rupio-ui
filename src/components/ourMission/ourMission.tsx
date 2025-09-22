import React from 'react'

const OurMission = () => {
  return (
    <section
      id='about'
      className='py-16 bg-gradient-to-br from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300'
    >
      <div className='container mx-auto px-4 text-center'>
        <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4'>
          Our Mission: Transparency & Trust
        </h3>
        <p className='text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-8'>
          Rupio connects you directly with SEBI-registered Research Analysts and
          Investment Advisers, ensuring that every tip and piece of advice you
          receive is credible and compliant with regulatory standards. We are
          committed to fostering a transparent and trustworthy environment for
          every investor, from beginners to experts.
        </p>
      </div>
    </section>
  )
}

export default OurMission
