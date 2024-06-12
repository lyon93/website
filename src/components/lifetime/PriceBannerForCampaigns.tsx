import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export const PriceBannerForCampaigns = ({ textContent }) => {
  const globalDialog = useGlobalDialog();
  const shouldShowBanner = globalDialog.dialogIsOpen(GlobalDialog.PriceBannerForCampaigns);

  return (
    <div className={`${shouldShowBanner ? 'flex' : 'hidden'} flex-col overflow-hidden px-5`}>
      <div className="flex w-full  flex-col justify-between rounded-[32px] bg-white bg-[url('/images/campaigns/euro/grass.webp')] lg:flex-row">
        <div className="flex w-full flex-col items-center gap-6 p-10 text-center lg:items-start lg:py-16 lg:text-left xl:w-full">
          <div className="flex w-max rounded-2xl bg-gray-100 py-2 px-4 ring-4 ring-primary">
            <p className="text-5xl font-bold text-white">{textContent.label}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold text-white">{textContent.subtitle}</p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <Link
              href={'#billingButtons'}
              className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white lg:hover:bg-primary-dark"
            >
              {textContent.cta2}
            </Link>
            <div className="flex flex-row items-center space-x-2 text-white">
              <CheckCircle size={24} className="text-primary" />
              <p className="whitespace-nowrap font-medium lg:text-lg">{textContent.guarantee}</p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-50">{textContent.lastCta}</p>
        </div>
        <div className="hidden w-full max-w-xl flex-row justify-end  lg:flex">
          <img
            src="/images/campaigns/euro/pricing.webp"
            draggable={false}
            alt="Internxt Cloud Storage Pricing"
            className="h-full w-full rounded-r-[32px] object-cover"
          />
        </div>
        <div className="flex h-full w-full flex-col object-cover lg:hidden">
          <Image
            src="/images/campaigns/euro/mobile.webp"
            width={377}
            height={190}
            alt="Euro 2024 image"
            className="w-full rounded-b-[32px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
