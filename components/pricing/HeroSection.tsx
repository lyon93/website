import Image from 'next/image';
import { Alarm, Coin, CreditCard, Detective } from '@phosphor-icons/react';
import Countdown from '../components/Countdown';
import { analyticsService } from '../services/analyticsService';
import { useEffect, useState } from 'react';
import { Interval, Products, stripeService } from '../services/stripeService';
import { CouponType } from '../../pages/api/stripe/get_coupons';
import { checkout } from '../../lib/auth';

const HeroSection = ({ textContent }) => {
  const [product, setProduct] = useState<string>('');
  const [coupon, setCoupon] = useState<string>('');
  const feeds = [
    {
      icon: Coin,
      title: textContent.feeds.firstFeed,
    },
    {
      icon: CreditCard,
      title: textContent.feeds.secondFeed,
    },
    {
      icon: Detective,
      title: textContent.feeds.thirdFeed,
    },
  ];

  useEffect(() => {
    Promise.all([
      stripeService.getSelectedPrice(Interval.Year, '2TB'),
      stripeService.getCoupon(CouponType.TwoTBCoupon75),
    ])
      .then((data) => {
        setProduct(data[0].priceId);
        setCoupon(data[1]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="overflow-hidden pt-12">
      <div className="xl:pl-58 flex w-full flex-col items-center justify-center space-y-10 py-24 px-6 lg:flex-row lg:space-x-10 lg:space-y-0 xl:space-x-56 xl:pl-32">
        <div className="flex flex-col items-center justify-center space-y-10 lg:items-start lg:justify-start">
          <div className="flex max-w-[470px] flex-col items-center justify-center space-y-10 lg:items-start">
            <div className="flex flex-row rounded-lg bg-gray-5 px-5 py-2">
              <Alarm size={32} className="mr-4 text-primary" />
              <Countdown textColor={'black'} dt={'2023-09-18T23:59:59'} />
            </div>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-col text-center lg:text-start">
                <p className="text-7xl font-bold">
                  {textContent.title.line1} <span className="text-primary">{textContent.title.line2}</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center lg:items-start">
                <div className="flex flex-col items-start space-y-4">
                  {feeds.map((feed) => (
                    <div className="flex flex-row items-center space-x-4" key={feed.title}>
                      <feed.icon size={32} className="text-primary" />
                      <p className="text-xl font-medium text-gray-80">{feed.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 space-x-8 lg:flex-row lg:space-y-0">
            <button
              className="flex w-max items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark"
              onClick={() => {
                analyticsService.offerTrack({
                  campaign: '2TBPLAN75',
                  discount: 75,
                  plan: '2TB',
                  coupon: coupon,
                });
                checkout({
                  planId: product,
                  couponCode: coupon,
                  mode: 'subscription',
                });
              }}
            >
              {textContent.cta.title}
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl bg-white">
          <Image
            alt="woman using file storage"
            src="/images/pricing/woman-using-file-storage.png"
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
