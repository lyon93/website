import React, { useEffect } from 'react';

import HeroSection from '../components/lifetime/HeroSection';
import FeatureSection from '../components/lifetime/FeatureSection';
import GetLifetimeSection from '../components/lifetime/GetLifetimeSection';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import PaymentSection from '../components/lifetime/PaymentSection';
import Navbar from '../components/layout/Navbar';
import CtaSection from '../components/lifetime/CtaSection';

import axios from 'axios';

const Lifetime = ({ lang, metatagsDescriptions, langJson, footerLang, deviceLang, navbarLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');
  const [country, setCountry] = React.useState('ES');

  async function getCountryCode() {
    const countryCode = await axios.get(process.env.NEXT_PUBLIC_COUNTRY_API_URL);
    return countryCode;
  }

  useEffect(() => {
    getCountryCode().then((res) => {
      setCountry(res.data.country);
    });
  });

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Lifetime"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" />

      <HeroSection textContent={langJson.HeroSection} />

      <PaymentSection textContent={langJson.PaymentSection} lang={lang} country={country} />

      <GetLifetimeSection textContent={langJson.GetLifetimeSection} />

      <FeatureSection textContent={langJson.FeatureSection} />

      <CtaSection textContent={langJson.CtaSection} />

      <Footer textContent={footerLang} lang={deviceLang} hideNewsletter />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/en/lifetime.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Lifetime;
