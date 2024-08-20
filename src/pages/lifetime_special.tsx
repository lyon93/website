import HeroSection from '@/components/lifetime/HeroSection';
import FeatureSection from '@/components/lifetime/FeatureSection';
import GetLifetimeSection from '@/components/lifetime/GetLifetimeSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import PaymentSection, { LifetimeMode } from '@/components/lifetime/PaymentSection';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/lifetime/CtaSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { PromoCodeName } from '@/lib/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LifetimeSpecial = ({ lang, metatagsDescriptions, langJson, testimonialsJson, footerLang, navbarLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');
  const { locale } = useRouter();

  const [couponCodeName, setCouponCodeName] = useState<PromoCodeName>();
  const [lifetimeMode, setLifetimeMode] = useState<LifetimeMode>();

  useEffect(() => {
    switch (locale) {
      case 'en':
        setLifetimeMode('celebration');
        setCouponCodeName(PromoCodeName.Lifetime82);
        break;
      case 'es':
        setLifetimeMode('celebration');
        setCouponCodeName(PromoCodeName.TierraDeHackers);
        break;

      default:
        setLifetimeMode('normal');
        break;
    }
  }, [lang]);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Lifetime"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" isLinksHidden />

      <HeroSection
        textContent={langJson.HeroSection}
        previewImg="/images/lifetime/file_item.webp"
        hideTimer
        bgImage="/images/lifetime/celebration/normal-bg.png"
      />
      {lifetimeMode && (
        <PaymentSection
          textContent={langJson.PaymentSection}
          lang={lang}
          lifetimeMode={lifetimeMode}
          couponCode={couponCodeName}
          discount={0.18}
          showPriceBefore={locale === 'en' || locale === 'es'}
        />
      )}

      <GetLifetimeSection textContent={langJson.GetLifetimeSection} />

      <FeatureSection textContent={langJson.FeatureSection} withoutCta />

      <TestimonialsSection textContent={testimonialsJson.TestimonialsSection} bgColor="bg-gray-1" />

      <CtaSection textContent={langJson.CtaSection} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/lifetime_special.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      testimonialsJson,
      navbarLang,
      footerLang,
    },
  };
}

export default LifetimeSpecial;
