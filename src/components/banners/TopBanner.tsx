import { useRouter } from 'next/router';
import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';

interface TopBannerProps {
  isBannerFixed?: boolean;
}

const TopBanner = ({ isBannerFixed }: TopBannerProps) => {
  const router = useRouter();
  const lang = router.locale;
  const bannersJson = require(`@/assets/lang/${lang}/banners.json`);
  const textContent = bannersJson.TopBarBanner;

  return (
    <>
      {/* Desktop view */}
      <div
        className={`group ${
          isBannerFixed ? 'absolute' : 'fixed'
        } left-0 z-50 hidden h-[54px] w-screen items-center justify-center overflow-hidden bg-primary text-white md:flex`}
      >
        <div className="mx-auto flex flex-row items-center justify-center space-x-3">
          <div className="flex cursor-default">
            <p className="font-normal">
              ⚽️ {textContent.title.normalText}
              <span className="font-bold">{textContent.title.boldText}</span>
            </p>
          </div>
          <Link
            href={'/pricing'}
            target="_blank"
            id={'topBannerActionButton'}
            className="flex cursor-pointer flex-row items-center space-x-2"
          >
            <p className="font-semibold underline hover:no-underline">{textContent.title.cta}</p>
            <CaretRight size={16} />
          </Link>
        </div>
      </div>
      {/* Mobile view */}
      <div
        className={`group fixed left-0 z-30 flex h-[65px] w-screen items-center justify-center overflow-hidden bg-primary text-white md:hidden`}
      >
        <div className="flex flex-col items-center justify-center py-2 px-2 text-center">
          <Link className="flex flex-col items-center justify-center" href={'/pricing'} target="_blank">
            <p className="font-normal">
              ⚽️ {textContent.title.normalText}
              <span className="font-semibold">{textContent.title.boldText}</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
