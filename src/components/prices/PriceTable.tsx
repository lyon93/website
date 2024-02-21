/* eslint-disable max-len */
import { useState } from 'react';
import { Switch, Transition } from '@headlessui/react';
import PriceCard from './PriceCard';
import BusinessBanner from '@/components/banners/BusinessBanner';
import { Interval } from '@/components/services/stripe.service';
import CardSkeleton from '@/components/components/CardSkeleton';
import FreePlanCard from './FreePlanCard';
import Header from '@/components/shared/Header';
import usePricing from '@/hooks/usePricing';
import CampaignCtaSection from '../lifetime/CampaignCtaSection';
import { CouponType } from '@/lib/types/types';
import { Detective, FolderSimpleLock, ShieldCheck } from '@phosphor-icons/react';

interface PriceTableProps {
  setSegmentPageName: (pageName: string) => void;
  lang: string;
  textContent: any;
  setIsLifetime?: (isLifetime: boolean) => void;
}

const CurrencyValue = {
  '€': 'EUR',
  $: 'USD',
};

type SwitchButtonOptions = 'Individuals' | 'Lifetime' | 'Business';

export default function PriceTable({ setSegmentPageName, lang, textContent }: PriceTableProps) {
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);
  const contentText = require(`@/assets/lang/${lang}/priceCard.json`);
  const CampaignContent = require(`@/assets/lang/${lang}/pricing.json`);
  const banner = require('@/assets/lang/en/banners.json');
  const { products, currency, loadingCards, coupon } = usePricing({
    couponCode: CouponType.ValentinesCoupon,
  });

  const features = [
    {
      icon: ShieldCheck,
      text: textContent.featureSection.firstFeature,
    },
    {
      icon: FolderSimpleLock,
      text: textContent.featureSection.secondFeature,
    },
    {
      icon: Detective,
      text: textContent.featureSection.thirdFeature,
    },
  ];

  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Individuals');

  const isIndividual = activeSwitchPlan !== 'Business';
  const isIndividualSwitchEnabled = billingFrequency === Interval.Year;
  const isSubscription = billingFrequency === Interval.Month || billingFrequency === Interval.Year;

  return (
    <section className="overflow-hidden bg-white">
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="flex flex-col items-center space-y-10 pt-12">
          {/* <CampaignCtaSection textContent={CampaignContent.tableSection.ctaBanner} /> */}
          <div id="priceTable" className="flex flex-col items-center px-5 text-center">
            <Header>{isIndividual ? contentText.planTitles.individuals : `${contentText.planTitles.business}`}</Header>
            <p className="mt-4 w-full max-w-3xl text-center text-xl text-gray-80">
              {!isIndividual && lang === 'en' ? `${contentText.businessDescription}` : `${contentText.planDescription}`}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-9">
          {/* Switch buttons (Individual plans | Lifetime plans | Business) */}
          <div id="billingButtons" className="flex flex-row rounded-lg bg-cool-gray-10 p-0.5 text-sm">
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Individuals');
                setBillingFrequency(Interval.Year);
                setSegmentPageName(`Pricing Individuals ${billingFrequency}`);
              }}
              className={`rounded-lg py-0.5 px-6 font-medium ${
                activeSwitchPlan === 'Individuals' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.individual}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Lifetime');
                setBillingFrequency(Interval.Lifetime);
                setSegmentPageName(`Pricing Individuals Lifetime`);
              }}
              className={`rounded-lg py-0.5 px-6 font-medium ${
                activeSwitchPlan === 'Lifetime' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.lifetime}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSwitchPlan('Business');
                setSegmentPageName(`Pricing Business`);
              }}
              className={`rounded-lg py-0.5 px-6 font-medium ${
                activeSwitchPlan === 'Business' ? 'bg-white text-cool-gray-80 shadow-sm' : 'text-cool-gray-50'
              }`}
            >
              {contentText.billingFrequency.business}
            </button>
          </div>
          {/* Switch buttons for Individual plans (Monthly | Annually) */}
          <div className={`flex-row items-start  gap-5 lg:items-center ${isSubscription ? 'flex' : 'hidden'}`}>
            <p
              className={`text-base font-medium ${
                billingFrequency === Interval.Month ? 'text-gray-100' : 'text-gray-50'
              }`}
            >
              {contentText.billingFrequency.monthly}
            </p>

            <Switch
              checked={isIndividualSwitchEnabled}
              onChange={() => {
                setBillingFrequency(isIndividualSwitchEnabled ? Interval.Month : Interval.Year);
              }}
              className={`${
                isIndividualSwitchEnabled ? 'bg-green' : 'bg-gray-10'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  isIndividualSwitchEnabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>

            <div className="relative flex flex-col lg:flex-row lg:items-center">
              <p
                className={`text-base font-medium ${
                  billingFrequency === Interval.Year ? 'text-gray-100' : 'text-gray-50'
                }`}
              >
                {contentText.billingFrequency.annually}
              </p>
              <p className="absolute top-full whitespace-nowrap font-medium text-green-dark lg:top-0 lg:left-full lg:pl-1.5">
                {contentText.save} 23%
              </p>
            </div>
          </div>
        </div>

        {/* Skeleton cards while fetching products data */}
        <Transition
          show={isIndividual && loadingCards}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </Transition>

        {/* Subscriptions and Lifetime cards */}
        <Transition
          show={isIndividual && !loadingCards}
          enterFrom="scale-95 translate-y-20 opacity-0"
          className={'flex flex-col'}
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-4">
            {products?.individuals?.[billingFrequency] &&
              Object.values(products.individuals[billingFrequency]).map((product: any) => {
                return (
                  <PriceCard
                    planType="individual"
                    key={product.storage}
                    storage={product.storage}
                    price={
                      billingFrequency === 'year'
                        ? parseFloat((Math.floor(parseFloat(product.price) * 77) / 100).toFixed(2))
                        : product.price
                    }
                    billingFrequency={billingFrequency}
                    popular={product.storage === '5TB'}
                    cta={['checkout', product.priceId]}
                    priceBefore={billingFrequency === 'year' ? product.price : undefined}
                    lang={lang}
                    currency={currency}
                    coupon={billingFrequency === 'year' ? coupon : undefined}
                    savePercentage={69}
                  />
                );
              })}
          </div>
        </Transition>

        {/* Business banner */}
        <Transition
          show={!isIndividual}
          enter="transition duration-500 ease-out"
          enterFrom="scale-95 translate-y-20 opacity-0"
          enterTo="scale-100 translate-y-0 opacity-100"
        >
          <div className="content flex flex-row flex-wrap items-end justify-center justify-items-center p-6 py-14">
            <BusinessBanner textContent={banner.BusinessBanner} />
          </div>
        </Transition>
        <div id="freeAccountCard" className="content flex w-full px-5">
          <FreePlanCard textContent={contentText.freePlanCard} />
        </div>

        <div className="flex flex-col justify-center space-y-8 text-center md:flex-row md:items-center md:space-y-0 md:space-x-32">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-row items-center space-x-3">
              <feature.icon size={40} className="text-primary" />
              <p className="text-xl font-medium text-gray-80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
