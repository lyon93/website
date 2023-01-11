import React from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/virus-scanner/HeroSection';
import FeaturesSection from '../components/virus-scanner/FeaturesSection';
import CtaSection from '../components/virus-scanner/CtaSection';
import BannersSection from '../components/virus-scanner/BannersSection';
import SendBanner from '../components/virus-scanner/SendBanner';

const Scan = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'virus-scanner');

  return (
    <Layout segmentName="Virus Scanner" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <SendBanner textContent={langJson.SendBanner} />

      <HeroSection textContent={langJson.HeroSection} lang={lang} />

      <FeaturesSection textContent={langJson.FeaturesSection} lang={lang} />

      <BannersSection textContent={langJson.BannersSection} lang={lang} />

      <CtaSection textContent={langJson.CtaSection} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  if (lang === 'fr') {
    return {
      redirect: {
        destination: '/virus-scanner',
        permanent: false,
      },
    };
  }
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/virus-scanner.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      footerLang,
      navbarLang,
      lang,
    },
  };
}

export default Scan;
