import { TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const TIpSection = () => {
  const fetchedTips = [
    {
      id: 1,
      title: 'Long-Term Buy: INFOTECH LTD.',
      analyst: {
        name: 'Jane Doe',
        sebiRegNo: 'INA000012345',
        expertise: 'IT, Pharmaceuticals',
      },
      summary:
        'Infotech Ltd. is a leading player in the IT services sector. With strong quarterly results and a healthy project pipeline, we project a 15% growth over the next 12 months. This is a solid long-term investment.',
      stockName: 'INFOTECH LTD.',
      stockSymbol: 'INFY',
      action: 'BUY',
      price: '₹ 1,550.25',
      priceChange: '+15.20',
      percentageChange: '+0.99%',
      isPositive: true,
      buyPrice: '₹ 1,530.00',
      targetPrice: '₹ 1,750.00',
      stopLoss: '₹ 1,480.00',
    },
    {
      id: 2,
      title: 'Short-Term Sell: AUTO CORP.',
      analyst: {
        name: 'John Smith',
        sebiRegNo: 'INA000054321',
        expertise: 'Automotive, FMCG',
      },
      summary:
        "Auto Corp. faces supply chain issues and is under pressure from rising raw material costs. We expect a short-term correction and advise a 'sell' rating for the next 3 months.",
      stockName: 'AUTO CORP.',
      stockSymbol: 'AUTO',
      action: 'SELL',
      price: '₹ 820.50',
      priceChange: '-5.75',
      percentageChange: '-0.70%',
      isPositive: false,
      buyPrice: null, // No buy price for a sell recommendation
      targetPrice: '₹ 800.00',
      stopLoss: '₹ 835.00',
    },
    {
      id: 3,
      title: 'Hold: E-COMMERCE HUB',
      analyst: {
        name: 'Alice Johnson',
        sebiRegNo: 'INA000098765',
        expertise: 'E-Commerce',
      },
      summary:
        "E-Commerce Hub is consolidating its market position. We recommend a 'Hold' as the stock price is expected to remain stable in the short term.",
      stockName: 'E-COMMERCE HUB',
      stockSymbol: 'ECOM',
      action: 'HOLD',
      price: '₹ 2,345.10',
      priceChange: '+2.10',
      percentageChange: '+0.09%',
      isPositive: true,
      buyPrice: '₹ 2,300.00',
      targetPrice: '₹ 2,400.00',
      stopLoss: '₹ 2,280.00',
    },
    {
      id: 4,
      title: 'Buy: ENERGY PLUS',
      analyst: {
        name: 'David Williams',
        sebiRegNo: 'INA000045678',
        expertise: 'Energy, Utilities',
      },
      summary:
        "Energy Plus has secured new government contracts and is expanding its renewable energy portfolio. A strong 'Buy' rating for mid to long-term gains.",
      stockName: 'ENERGY PLUS',
      stockSymbol: 'ENERG',
      action: 'BUY',
      price: '₹ 450.75',
      priceChange: '+10.25',
      percentageChange: '+2.33%',
      isPositive: true,
      buyPrice: '₹ 440.00',
      targetPrice: '₹ 480.00',
      stopLoss: '₹ 425.00',
    },
  ]
  return (
    <section
      id='tips'
      className='py-16 bg-gradient-to-br from-fuchsia-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300'
    >
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-10'>
          Latest Tips & Market Insights
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {fetchedTips.map((tip) => (
            <div
              key={tip.id}
              className='bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]'
            >
              <div className='flex items-center space-x-4 mb-4'>
                {tip.isPositive ? (
                  <TrendingUp
                    size={28}
                    className='text-green-500 flex-shrink-0'
                  />
                ) : (
                  <TrendingDown
                    size={28}
                    className='text-red-500 flex-shrink-0'
                  />
                )}
                <div>
                  <h4 className='text-lg font-bold text-gray-900 dark:text-gray-100'>
                    {tip.stockName}
                  </h4>
                  <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                    {tip.analyst.name}
                  </p>
                </div>
              </div>
              <div className='flex flex-col space-y-2 mb-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-base font-semibold text-gray-900 dark:text-gray-50'>
                    Action:
                  </span>
                  <span
                    className={`text-base font-bold ${
                      tip.action === 'BUY'
                        ? 'text-green-500'
                        : tip.action === 'SELL'
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    }`}
                  >
                    {tip.action}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-base font-semibold text-gray-900 dark:text-gray-50'>
                    Current Price:
                  </span>
                  <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
                    {tip.price}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-base font-semibold text-gray-900 dark:text-gray-50'>
                    Buy Price:
                  </span>
                  <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
                    {tip.buyPrice || 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-base font-semibold text-gray-900 dark:text-gray-50'>
                    Target Price:
                  </span>
                  <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
                    {tip.targetPrice || 'N/A'}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-base font-semibold text-gray-900 dark:text-gray-50'>
                    Stop Loss:
                  </span>
                  <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
                    {tip.stopLoss || 'N/A'}
                  </span>
                </div>
              </div>
              <button
                // onClick={() => handleExpandTip(tip)}
                // disabled={isLoading}
                className='w-full mt-2 py-2 text-sm font-semibold rounded-full bg-fuchsia-600 text-white shadow-lg transition-transform duration-300 hover:bg-fuchsia-700 disabled:bg-fuchsia-300 disabled:cursor-not-allowed'
              >
                Full Analysis
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

TIpSection.propTypes = {}

export default TIpSection
