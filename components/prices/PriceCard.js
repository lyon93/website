import React, { useEffect, useState } from 'react';

const PriceCard = ({
  planType,
  storage,
  pricePerMonth,
  billingFrequency,
  totalBilled,
  featureList,
  cta,
  popular
}) => {

  const billingFrequencyList = {
    "1": "monthly",
    "6": "semianually",
    "12": "anually"
  }

  totalBilled = pricePerMonth * billingFrequency;

  return (
    <div className={`priceCard ${popular ? 'bg-blue-60 ring-4 ring-blue-60' : ''} flex flex-col flex-shrink-0 flex-grow-0 rounded-2xl shadow-xl overflow-hidden`}>

      <div className={`mostPopular ${popular ? '' : 'hidden'} flex flex-col py-1.5 items-center justify-center text-xs font-semibold text-white`}>Most popular</div>

      <div className={`info flex flex-col p-6 items-center justify-center bg-white ${popular ? 'rounded-t-2xl' : ''}`}>
        <div className={`storage flex py-1 pb-0.5 px-4 max-w-min ${popular ? 'bg-blue-10 text-blue-60' : 'bg-neutral-20 text-neutral-80'} font-semibold rounded-full`}>
          <p>{storage}<span className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>/user</span></p>
        </div>

        <div className="planPrice flex flex-col p-8 justify-center items-center space-y-4">
          <div className="priceBreakdown flex flex-row items-end space-x-1">
            <p className="flex flex-row items-start text-neutral-700 font-semibold space-x-0.5"><span className={`currency ${pricePerMonth.toLowerCase() === 'free' ? 'hidden' : ''}`}>€</span><span className="pricePerMonth text-4xl font-bold">{pricePerMonth.toLowerCase() === 'free' ? pricePerMonth.charAt(0).toUpperCase() + pricePerMonth.slice(1) : pricePerMonth}</span></p>
            <span className={`perMonth ${pricePerMonth.toLowerCase() === 'free' ? 'hidden' : ''}`}>/month</span>
          </div>

          <div className="totalBilling flex flex-row text-neutral-80 text-xs">
            <p className={`${pricePerMonth.toLowerCase() === 'free' ? 'hidden' : ''}`}><span className="currency text-supporting-2">€</span><span className="totalBilled">{totalBilled}</span> billed <span className="billingFrequency">{billingFrequencyList[billingFrequency]}</span></p>
            <p className={`${pricePerMonth.toLowerCase() === 'free' ? '' : 'hidden'}`}>Free forever</p>
          </div>
        </div>

        <div className="subscribePlan flex justify-center w-full items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75 cursor-pointer select-none">
          <p className={`${pricePerMonth.toLowerCase() === 'free' ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>Buy {storage}</p>
          <p className={`${pricePerMonth.toLowerCase() === 'free' ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>Sign up now</p>
          <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>Get started</p>
        </div>
      </div>
      
      <div className="featureList flex flex-col p-6 text-neutral-500 bg-neutral-10 border-t border-neutral-20">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2 font-semibold"><img src="/icons/checkNeutral500.svg" draggable="false"/><span>30 days guarantee</span></div>
          <div className="flex flex-row space-x-2"><img src="/icons/checkNeutral500.svg" draggable="false"/><span>Private and Secure file sharing</span></div>
          <div className="flex flex-row space-x-2"><img src="/icons/checkNeutral500.svg" draggable="false"/><span>Access your files from any device</span></div>
        </div>
      </div>

    </div>
  )
}

export default PriceCard;
