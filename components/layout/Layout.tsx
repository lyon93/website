/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import isBrave from '../../lib/brave';
import Script from 'next/script';
import { useRouter } from 'next/router';
import TopBannerHomePage from '../../components/banners/TopBannerHomePage';
import axios from 'axios';
import moment from 'moment';

interface LayoutProps {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly description: string;
  readonly segmentName?: string | null;
  readonly disableMailerlite?: boolean;
  readonly disableDrift?: boolean;
  readonly isProduction?: boolean;
  readonly specialOffer?: string;
  readonly host?: string;
  readonly isBannerFixed?: boolean;
  readonly lang?: string;
}

const INTERNXT_URL = 'https://internxt.com';
const COOKIE_DOMAIN = 'internxt.com';

const excludedPaths = [];
const imageLang = ['ES', 'FR', 'EN'];

export default function Layout({
  children,
  title = 'Internxt',
  description = 'Internxt',
  segmentName = null,
  disableMailerlite = false,
  specialOffer,
  disableDrift = true,
  isBannerFixed,
  isProduction = process.env.NODE_ENV === 'production',
}: // lang
LayoutProps) {
  const pageURL = segmentName === 'home' ? '' : segmentName;
  const router = useRouter();
  const pathname = router.pathname === '/' ? '' : router.pathname;
  const lang = router.locale;
  const showBanner = excludedPaths.includes(router.pathname);
  const langToUpperCase = lang.toLocaleUpperCase();
  const imagePreview = imageLang.includes(langToUpperCase) ? langToUpperCase : 'EN';
  const [ip, setIp] = useState('');

  // THIS CODE SNIPPET SHOULD NOT BE REMOVED OR MODIFIED IN ANY WAY BECAUSE IT IS USED TO SEE THE NUMBER OF VISITS TO THE WEBSITE FROM AFFILIATES IN IMPACT
  useEffect(() => {
    axios.get('https://ipinfo.io/ip').then((res) => {
      setIp(res.data);
    });

    window.rudderanalytics.page(segmentName, {
      brave: isBrave(),
    });

    if (document.referrer !== '') return;

    const randomUUID = crypto.randomUUID();

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    const cookie = `anonymousID=${randomUUID};expires=${new Date(
      expirationDate,
    ).toUTCString()};domain=${COOKIE_DOMAIN}; Path=/`;

    document.cookie = cookie;

    axios
      .post(process.env.NEXT_PUBLIC_IMPACT_API, {
        anonymousId: randomUUID,
        originalTimestamp: moment().format('YYYY-MM-DDTHH:mm:ss.sssZ'),
        request_ip: ip,
        context: {
          userAgent: navigator.userAgent,
          page: {
            url: window.location.href,
            referrer: document.referrer,
          },
        },
        type: 'page',
      })
      .catch((err) => {
        console.log(err);
      });
  }, [segmentName]);

  const slogan = {
    en: "Internxt is a secure cloud storage service based on encryption and absolute privacy. Internxt's open-source suite of cloud storage services protects your right to privacy. Internxt Drive, Photos, Send, and more.",
    es: 'Internxt es un servicio seguro de almacenamiento en la nube basado en el cifrado y la privacidad absoluta. El conjunto de servicios de código abierto de Internxt protege tu privacidad. Internxt Drive, Photos, Send y mucho más.',
    fr: "Internxt est un service de stockage en ligne sécurisé basé sur le chiffrage et la confidentialité absolue. La suite open-source de services de stockage en nuage d'Internxt protège votre droit à la vie privée. Internxt Drive, Photos, Send, et plus encore.",
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={`${INTERNXT_URL}${lang === 'en' ? '' : `/${lang}`}${pathname}`} />
        <link rel="alternate" hrefLang={'en'} href={`${INTERNXT_URL}${pathname}`} />
        <link rel="alternate" hrefLang={'it'} href={`${INTERNXT_URL}/it${pathname}`} />
        <link rel="alternate" hrefLang={'es'} href={`${INTERNXT_URL}/es${pathname}`} />
        <link rel="alternate" hrefLang={'zh'} href={`${INTERNXT_URL}/zh${pathname}`} />
        <link rel="alternate" hrefLang={'fr'} href={`${INTERNXT_URL}/fr${pathname}`} />
        <link rel="alternate" hrefLang={'ru'} href={`${INTERNXT_URL}/ru${pathname}`} />
        <link rel="alternate" hrefLang={'de'} href={`${INTERNXT_URL}/de${pathname}`} />
        <link rel="alternate" hrefLang="x-default" href={`${INTERNXT_URL}${pathname}`} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${INTERNXT_URL}${lang === 'en' ? '' : `/${lang}`}${pathname}`} />
        <meta
          property="og:image"
          content={specialOffer || `${INTERNXT_URL}/images/previewLink/PreviewGeneric${imagePreview}.png`}
        />
        <meta property="twitter:url" content={`${INTERNXT_URL}${lang === 'en' ? '' : `/${lang}`}${pathname}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={specialOffer || `${INTERNXT_URL}/images/previewLink/PreviewGeneric${imagePreview}.png`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="thumbnail" content={`${INTERNXT_URL}/images/previewLink/LifetimeGoogleSearch.png`} />
        <meta name="apple-itunes-app" content={`app-id=1465869889`} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
        <link rel="icon" href="/favicon.ico" />
        {!disableMailerlite && <Script defer src="/js/mailerlite.js" />}
        {!disableDrift && <Script defer src="/js/drift.js" />}
      </Head>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Internxt",
          "url": "https://www.internxt.com/",
          "logo": "https://internxt.com/logos/internxt/cool-gray-90.svg",
          "founder": "Fran Villalba Segarra",
          "foundingDate": "2020",
          "location": "Valencia, Spain",
          "legalName": "Internxt Universal Technologies SL",
          "slogan": "${slogan[lang]}",
          "sameAs": [
            "https://twitter.com/Internxt",
            "https://www.facebook.com/internxt",
            "https://es.linkedin.com/company/internxt",
            "https://www.instagram.com/internxt/",
            "https://github.com/internxt"
          ]
        }`}
      </Script>
      {showBanner ? (
        <>
          <TopBannerHomePage isBannerFixed={isBannerFixed} />
          <div className="z-50 flex flex-col overflow-hidden pt-[64px] md:pt-[54px]">{children}</div>
        </>
      ) : (
        children
      )}

      {/* <BFBanner /> */}
    </>
  );
}
