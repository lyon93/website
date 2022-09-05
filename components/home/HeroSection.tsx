import React from 'react';
import Marquee from 'react-fast-marquee';
import { openAuthDialog } from '../../lib/auth';

export default function HeroSection({ textContent, lang }) {
  return (
    <section>
      <div className="mx-4 border-b border-gray-5 pt-24 lg:mx-10 xl:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between sm:mb-6 md:flex-row">
          <div className="mx-20 mb-6 flex w-auto flex-col md:hidden">
            <img
              loading="lazy"
              src="/images/home/devicesMobileView.webp"
              draggable="false"
              alt="laptop and phone with Internxt app"
            />
          </div>

          <div className="my-6 flex w-screen flex-shrink-0 flex-col items-center px-5 text-center sm:w-auto sm:px-0 md:my-8 md:ml-2 md:items-start md:text-left lg:my-20 lg:ml-0">
            <h1 className="max-w-md bg-gradient-to-tr from-primary to-gradients-electric-cyan bg-clip-text pb-5 text-4xl font-medium text-transparent sm:text-5xl lg:max-w-lg lg:pb-10 lg:text-6xl">
              {textContent.title}
            </h1>

            <h2 className="mb-4 max-w-md text-lg text-gray-80 md:mb-8 lg:text-xl">{textContent.subtitle}</h2>

            <button
              className="relative mt-3 flex h-12 w-full flex-row items-center justify-center space-x-4 rounded-full bg-primary px-5 text-lg text-white shadow-2xl shadow-primary/25 transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:mt-0 sm:w-auto sm:px-9"
              onClick={() => openAuthDialog('signup')}
            >
              <div className="flex flex-row items-center space-x-2">
                <span>{textContent.cta.title}</span>
                <span>{'—'}</span>
                <span className="opacity-60">{textContent.cta.subtitle}</span>
              </div>
            </button>
          </div>

          <div className="ml-5 hidden max-w-2xl flex-grow flex-col md:flex xl:ml-20">
            <img
              loading="lazy"
              className="hidden xl:flex"
              src="/images/home/devicesAsc.webp"
              draggable="false"
              alt="desktop, laptop and phone with Internxt app"
            />

            <img
              loading="lazy"
              className="flex translate-x-10 transform xl:hidden"
              src="/images/home/devicesAscCut.webp"
              draggable="false"
              alt="desktop, laptop and phone with Internxt app"
            />
          </div>
        </div>

        <div className="relative">
          <div className="flex xl:hidden">
            <Marquee className="bg-white" gradientColor={[255, 255, 255]} gradientWidth="32px" speed={30}>
              <div className="featured flex w-full flex-row p-6">
                {lang === 'es' ? (
                  <a
                    href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/forbes.svg"
                      draggable="false"
                      width="62"
                      height="16"
                      alt="forbes logo"
                    />
                  </a>
                ) : (
                  <a
                    href="https://www.forbes.com/sites/alisoncoleman/2021/07/13/hard-knocks-how-a-schoolboy-rugby-injury-inspired-this-tech-entrepreneur/?sh=7108d8d570ee"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/forbes.svg"
                      draggable="false"
                      width="62"
                      height="16"
                      alt="forbes logo"
                    />
                  </a>
                )}

                {lang === 'es' && (
                  <a
                    href="https://www.elconfidencial.com/empresas/2022-04-25/telefonica-juan-roig-google-drive-espanol_3413834/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/elconfidencial.svg"
                      draggable="false"
                      width="144"
                      height="16"
                      alt="elconfidencial logo"
                    />
                  </a>
                )}

                <a
                  href="https://www.techradar.com/news/how-decentralized-models-are-reimagining-the-cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/techradar.svg"
                    draggable="false"
                    width="94"
                    height="16"
                    alt="techradar logo"
                  />
                </a>

                <a
                  href="https://techcrunch.com/2021/06/17/internxt-gets-1m-to-be-the-coinbase-of-decentralized-storage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/techcrunch.svg"
                    draggable="false"
                    width="113"
                    height="16"
                    alt="techcrunch logo"
                  />
                </a>

                <a
                  href="https://venturebeat.com/2022/04/25/web3-startup-internxt-valued-at-40m-aims-to-compete-with-google-drive/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/venturebeat.svg"
                    draggable="false"
                    width="125"
                    height="16"
                    alt="venturebeat logo"
                  />
                </a>

                {lang === 'es' && (
                  <a
                    href="https://www.lavanguardia.com/local/valencia/20210130/6207854/valenciano-emprendedor-joven-internxt-drive.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      className="mr-12"
                      src="../../logos/featured/lavanguardia.svg"
                      draggable="false"
                      width="152"
                      height="16"
                      alt="lavanguardia logo"
                    />
                  </a>
                )}

                {lang === 'es' && (
                  <a
                    href="https://cincodias.elpais.com/cincodias/2021/01/26/companias/1611660127_471030.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      src="../../logos/featured/elpais.svg"
                      draggable="false"
                      width="82"
                      height="16"
                      alt="elpais logo"
                    />
                  </a>
                )}
              </div>
            </Marquee>
          </div>

          <div className="hidden overflow-hidden xl:flex">
            <div className="featured flex w-full flex-row justify-center overflow-x-auto bg-white p-6 md:px-10 lg:px-32">
              {lang === 'es' ? (
                <a
                  href="https://forbes.es/empresas/155897/telefonica-se-une-a-roig-e-invierte-en-internxt-el-google-drive-espanol-que-vale-40-millones/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/forbes.svg"
                    draggable="false"
                    width="62"
                    height="16"
                    alt="forbes logo"
                  />
                </a>
              ) : (
                <a
                  href="https://www.forbes.com/sites/alisoncoleman/2021/07/13/hard-knocks-how-a-schoolboy-rugby-injury-inspired-this-tech-entrepreneur/?sh=7108d8d570ee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/forbes.svg"
                    draggable="false"
                    width="62"
                    height="16"
                    alt="forbes logo"
                  />
                </a>
              )}

              {lang === 'es' && (
                <a
                  href="https://www.elconfidencial.com/empresas/2022-04-25/telefonica-juan-roig-google-drive-espanol_3413834/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/elconfidencial.svg"
                    draggable="false"
                    width="144"
                    height="16"
                    alt="elconfidencial logo"
                  />
                </a>
              )}

              <a
                href="https://www.techradar.com/news/how-decentralized-models-are-reimagining-the-cloud"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  loading="lazy"
                  className="mr-12"
                  src="../../logos/featured/techradar.svg"
                  draggable="false"
                  width="94"
                  height="16"
                  alt="techradar logo"
                />
              </a>

              <a
                href="https://techcrunch.com/2021/06/17/internxt-gets-1m-to-be-the-coinbase-of-decentralized-storage/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  loading="lazy"
                  className="mr-12"
                  src="../../logos/featured/techcrunch.svg"
                  draggable="false"
                  width="113"
                  height="16"
                  alt="techcrunch logo"
                />
              </a>

              <a
                href="https://venturebeat.com/2022/04/25/web3-startup-internxt-valued-at-40m-aims-to-compete-with-google-drive/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  loading="lazy"
                  className="mr-12"
                  src="../../logos/featured/venturebeat.svg"
                  draggable="false"
                  width="125"
                  height="16"
                  alt="venturebeat logo"
                />
              </a>

              {lang === 'es' && (
                <a
                  href="https://www.lavanguardia.com/local/valencia/20210130/6207854/valenciano-emprendedor-joven-internxt-drive.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    className="mr-12"
                    src="../../logos/featured/lavanguardia.svg"
                    draggable="false"
                    width="152"
                    height="16"
                    alt="lavanguardia logo"
                  />
                </a>
              )}

              {lang === 'es' && (
                <a
                  href="https://cincodias.elpais.com/cincodias/2021/01/26/companias/1611660127_471030.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    src="../../logos/featured/elpais.svg"
                    draggable="false"
                    width="82"
                    height="16"
                    alt="elpais logo"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
