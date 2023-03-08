import React from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/password-checker/HeroSection';
import FeaturesSection from '../components/password-checker/FeaturesSection.js';
import TryInternxtBanner from '../components/banners/TryInternxtBanner';

const PasswordChecker = ({ metatagsDescriptions, langJson, navbarLang, footerLang, lang, bannerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'password-checker');

  return (
    <Layout segmentName="Password Checker" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <TryInternxtBanner
        textContent={bannerLang.tryOutInternxtPasswordCheckerBanner}
        url={'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=internxtpw'}
      />

      <HeroSection textContent={langJson.HeroSection} />

      <FeaturesSection textContent={langJson.FeaturesSection} lang={lang} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  if (lang === 'fr') {
    return {
      redirect: {
        destination: '/password-checker',
        permanent: false,
      },
    };
  }

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/password-checker.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const bannerLang = require(`../assets/lang/en/banners.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      footerLang,
      navbarLang,
      lang,
      bannerLang,
    },
  };
}

export default PasswordChecker;
