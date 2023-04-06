import React from 'react';
import Image from 'next/image';
import { Alarm, Coin, CreditCard, Detective } from 'phosphor-react';
import Countdown from '../components/Countdown';
import { checkout } from '../../lib/auth';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden pt-12">
      <div className="flex flex-col items-center justify-center space-y-10 py-24 px-6 lg:flex-row lg:space-y-0 lg:space-x-48">
        <div className="flex flex-col space-y-10">
          <div className="flex max-w-[468px] flex-col items-center justify-center space-y-10 lg:items-start">
            <div className="flex flex-row rounded-lg bg-gray-5 px-5 py-2">
              <p className="text-xl font-medium text-gray-80">{textContent.header}</p>
            </div>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-col text-center lg:text-start">
                <p className="text-6xl font-semibold">
                  {textContent.title.normalText}
                  <span className="text-6xl font-semibold text-primary">{textContent.title.blueText}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-5 space-x-8 lg:flex-row lg:justify-start lg:space-y-0">
            <button
              className="flex w-max items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white"
              onClick={() => {
                window.scrollTo({ top: document.getElementById('payment').offsetTop, behavior: 'smooth' });
              }}
            >
              {textContent.cta}
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl bg-gradient-to-b from-white to-gray-1 shadow-2xl">
          <Image
            alt="Woman with laptop"
            src="/images/pricing/WomanWithLaptop.png"
            className=" rounded-3xl"
            width={496}
            height={520}
            layout="intrinsic"
            loading="eager"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
