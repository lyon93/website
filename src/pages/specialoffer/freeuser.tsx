import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Navbar from '@/components/layout/navbars/Navbar';
import { Interval } from '@/components/services/stripe.service';
import CtaSection from '@/components/shared/CtaSection';
import { PricingSection } from '@/components/shared/pricing/PricingSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { FeatureSectionForSpecialOffer } from '@/components/specialoffer/FeatureSection';
import { HeroSectionForSpecialOffer } from '@/components/specialoffer/HeroSection';
import { InxtFeaturesSection } from '@/components/specialoffer/InxtFeaturesSection';
import { WhatWeDoSectionForSpecialOffer } from '@/components/specialoffer/WhatWeDoSection';
import usePricing from '@/hooks/usePricing';
import { checkout } from '@/lib/auth';
import { CouponType } from '@/lib/types';
import { SwitchButtonOptions } from '@/components/shared/pricing/components/PlanSwitch';

interface FreeUserPageProps {
  lang: string;
  metatagsDescriptions: Record<string, any>;
  navbarLang: Record<string, any>;
  textContent: Record<string, any>;
  footerLang: Record<string, any>;
}

const FreeUserPage = ({
  metatagsDescriptions,
  footerLang,
  navbarLang,
  lang,
  textContent,
}: FreeUserPageProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'free-user');

  const { products, loadingCards, currencyValue, coupon } = usePricing({
    couponCode: CouponType.freeUserCoupon,
  });

  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Individuals');
  const [billingFrequency, setBillingFrequency] = useState<Interval>(Interval.Year);

  const onPlanTypeChange = (activeSwitchPlan: SwitchButtonOptions, interval?: Interval) => {
    setActiveSwitchPlan(activeSwitchPlan);

    if (interval) {
      setBillingFrequency(interval);
    }
  };

  const onIndividualSwitchToggled = (interval: Interval) => {
    setBillingFrequency(interval);
  };

  const onCheckoutButtonClicked = (planId: string) => {
    checkout({
      planId: planId,
      couponCode: coupon,
      currency: currencyValue ?? 'eur',
      mode: billingFrequency === Interval.Lifetime ? 'payment' : 'subscription',
    });
  };

  const handleOnButtonClick = () => {
    window.location.hash = '#priceTable';
  };

  return (
    <Layout title={metatags.title} description={metatags.description} segmentName={'Free User'}>
      <Navbar textContent={navbarLang} cta={['default']} lang={lang} fixed isLinksHidden />

      <HeroSectionForSpecialOffer textContent={textContent.HeroSection} />

      <PricingSection
        textContent={textContent.tableSection}
        lang={lang}
        billingFrequency={billingFrequency}
        hideFreeCard
        decimalDiscountForPrice={0.25}
        products={products}
        loadingCards={loadingCards}
        activeSwitchPlan={activeSwitchPlan}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        onPlanTypeChange={onPlanTypeChange}
        onIndividualSwitchToggled={onIndividualSwitchToggled}
      />

      <FeatureSectionForSpecialOffer textContent={textContent.FeatureSection} />

      <InxtFeaturesSection textContent={textContent.InxtFeaturesSection} />

      <CtaSection textContent={textContent.CtaSection} url={'/specialoffer/freeuser#priceTable'} target="_self" />

      <WhatWeDoSectionForSpecialOffer
        textContent={textContent.WhatWeDoSection}
        handleOnButtonClick={handleOnButtonClick}
      />

      <FAQSection textContent={textContent.FaqSection} />

      <MinimalFooter lang={lang} footerLang={footerLang.FooterSection} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/specialoffer/free-user.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const homeComponentsLang = require(`@/assets/lang/${lang}/home.json`);

  return {
    props: {
      metatagsDescriptions,
      footerLang,
      navbarLang,
      lang,
      textContent,
      homeComponentsLang,
    },
  };
}

export default FreeUserPage;
