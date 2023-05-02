/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { Parallax } from 'react-parallax';

import DownloadComponent from './DownloadComponent';
import * as anim from '../../public/js/anim';
import RevealX from '../components/RevealX';
import Image from 'next/image';
import FileParallaxSection from '../home/FileParallaxSection';

const FeaturesSection = ({ textContent, lang, download }) => (
  <section className="flex w-full flex-col">
    <div className="flex w-full flex-col items-center">
      {/* Title */}
      <Parallax
        className="flex w-full flex-col items-center justify-center text-center"
        renderLayer={(percentage) => (
          <h2 className="relative text-3xl font-medium text-cool-gray-90 lg:mb-20 lg:text-5xl">
            <Transition
              show={anim.trigger(percentage)}
              enter="transition-all duration-500"
              enterFrom="opacity-0 translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-500 delay-250"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-6"
            >
              {textContent.section1.title.line1}
            </Transition>
            <Transition
              show={anim.trigger(percentage)}
              enter="transition-all duration-500 delay-250"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-500"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
            >
              {textContent.section1.title.line2}
            </Transition>
          </h2>
        )}
      />

      {/* Feature #1 - All your files available in all your devices */}
      <div className="relative grid w-full grid-cols-1 justify-center gap-20 pt-10 lg:grid-cols-2 lg:pt-20 lg:pb-20">
        <RevealX
          className="hidden w-full max-w-[713px] flex-col object-contain object-right lg:right-0 lg:flex"
          direction="right"
        >
          <Image
            className="w-full"
            src="/images/drive/desktop-internxtFolder-filelogger-mockup.png"
            width={713}
            height={894}
            quality={100}
            unoptimized={true}
            alt="Internxt Drive"
          />
        </RevealX>

        <div className="flex w-full flex-col items-center justify-center lg:-top-4 lg:items-start lg:pl-10">
          <div
            className="relative"
            style={{
              width: 250,
              height: 505,
            }}
          >
            <div className="absolute flex h-full w-full rounded-4xl shadow-subtle" />
            <div
              className="absolute h-full w-full bg-cover bg-left-top bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/drive/mobile-work-list-mockup.png)',
              }}
            />
          </div>

          <div className="mt-10 flex flex-col px-10 lg:px-0">
            <h3 className="mb-6 text-3xl font-semibold text-gray-100 lg:text-4xl">
              {textContent.section2.title.line1} <br className="hidden sm:flex" />
              {textContent.section2.title.line2} <br className="hidden sm:flex" />
              {textContent.section2.title.line3}
            </h3>

            <p className="w-full max-w-[262px] text-lg text-gray-80">
              {textContent.section2.subtitle.line1}
              {textContent.section2.subtitle.line2}
              {textContent.section2.subtitle.line3}
              {textContent.section2.subtitle.line4}
              {textContent.section2.subtitle.line5}
              {textContent.section2.subtitle.line6}
            </p>
          </div>
        </div>
      </div>

      {/* Feature #2 - Keep your files organized and accessible from anywhere */}
      <div className="grid w-full grid-cols-1 justify-center pt-10 lg:grid-cols-2 lg:gap-20 lg:pb-20">
        <div className="flex flex-col items-center lg:items-end lg:pr-20">
          {/* Keep items aligned to the left */}
          <div className="flex w-full flex-col items-center pt-10 lg:w-auto lg:items-start">
            <div className="mb-20 flex flex-col px-10 pt-10 lg:mb-28 lg:px-0">
              <h3 className="mb-6 text-3xl font-semibold text-gray-100 lg:text-4xl">
                {textContent.section3.title.line1} <br className="hidden sm:flex" />
                {textContent.section3.title.line2} <br className="hidden sm:flex" />
                {textContent.section3.title.line3} <br className="hidden sm:flex" />
                {textContent.section3.title.line4}
              </h3>

              <p className="text-lg text-gray-80">
                {textContent.section3.subtitle.line1} <br className="hidden sm:flex" />
                {textContent.section3.subtitle.line2} <br className="hidden sm:flex" />
                {textContent.section3.subtitle.line3} <br className="hidden sm:flex" />
                {textContent.section3.subtitle.line4} <br className="hidden sm:flex" />
                {textContent.section3.subtitle.line5} <br className="hidden sm:flex" />
                {textContent.section3.subtitle.line6} <br className="hidden sm:flex" />
                {textContent.section3.subtitle.line7} <br className="hidden sm:flex" />
                {textContent.section3.subtitle.line8}
              </p>
            </div>

            <div
              className="relative order-first lg:order-last"
              style={{
                width: 250,
                height: 505,
              }}
            >
              <div className="absolute flex h-full w-full rounded-4xl shadow-subtle" />
              <div
                className="absolute h-full w-full bg-cover bg-left-top bg-no-repeat"
                style={{
                  backgroundImage: 'url(/images/drive/mobile-drive-grid-mockup.png)',
                }}
              />
            </div>
          </div>
        </div>

        <div className="absolute hidden w-full max-w-[750px] flex-col items-start object-contain object-right lg:right-0 lg:flex">
          <RevealX className="hidden flex-col lg:flex" direction="left">
            <Image
              className="h-full w-full shadow-subtle-hard"
              src="/images/drive/desktop-internxt-drive-explorer.png"
              width={750}
              height={772}
              quality={100}
              unoptimized={true}
              objectPosition={'right'}
              objectFit="contain"
              alt="Internxt Drive Explorer"
            />
          </RevealX>
        </div>
      </div>

      {/* Feature #3 - Share your files with ease, security is on us */}
      <div className="grid w-full grid-cols-1 items-center justify-center pt-10 lg:grid-cols-2 lg:gap-20 lg:pt-20 lg:pb-20">
        <div className="hidden h-full flex-col items-start object-contain object-left lg:left-0 lg:flex">
          <RevealX className="hidden flex-col lg:flex" direction="left">
            <Image
              className="shadow-subtle-hard"
              src="/images/drive/share-settings-menu.png"
              width={690}
              height={650}
              draggable={false}
              layout="intrinsic"
              quality={100}
              unoptimized={true}
              alt="Internxt Drive Share Settings Menu"
            />
          </RevealX>
        </div>

        <div className="flex w-full flex-col items-center lg:w-auto lg:items-start lg:pl-10">
          <div
            className="relative flex rounded-4xl bg-cover bg-left-top bg-no-repeat shadow-subtle lg:hidden"
            style={{
              width: 250,
              height: 505,
            }}
          >
            <div className="absolute flex h-full w-full rounded-4xl shadow-subtle" />
            <div
              className="absolute h-full w-full bg-cover bg-left-top bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/drive/mobile-work-list-share-mockup.webp)',
              }}
            />
          </div>

          <div className="mb-20 flex flex-col px-10 pt-10 lg:mb-24 lg:px-0">
            <h3 className="mb-6 text-3xl font-semibold text-gray-100 lg:text-4xl">
              {textContent.section4.title.line1} <br className="hidden sm:flex" />
              {textContent.section4.title.line2} <br className="hidden sm:flex" />
              {textContent.section4.title.line3} <br className="hidden sm:flex" />
              {textContent.section4.title.line4}
            </h3>

            <p className="text-lg text-gray-80">
              {textContent.section4.subtitle.line1} <br className="hidden sm:flex" />
              {textContent.section4.subtitle.line2} <br className="hidden sm:flex" />
              {textContent.section4.subtitle.line3} <br className="hidden sm:flex" />
              {textContent.section4.subtitle.line4} <br className="hidden sm:flex" />
              {textContent.section4.subtitle.line5} <br className="hidden sm:flex" />
              {textContent.section4.subtitle.line6} <br className="hidden sm:flex" />
              {textContent.section4.subtitle.line7} <br className="hidden sm:flex" />
              {textContent.section4.subtitle.line8}
            </p>
          </div>
        </div>
      </div>

      {/* Feature #4 - Backup what matters to you. */}
      <div className="grid w-full grid-cols-1 justify-center gap-20 pt-5 lg:grid-cols-2 lg:pt-20 lg:pb-20">
        <div className="flex flex-col items-center lg:items-end lg:pr-20">
          <div className="mx-12 flex w-full flex-col bg-transparent lg:hidden">
            <img
              loading="lazy"
              className="w-full"
              src="/images/drive/internxt-desktop-backups.png"
              draggable="false"
              alt="Internxt Desktop backups"
            />
          </div>

          <div className="mb-24 flex flex-col px-10 pt-10 lg:px-0 lg:pt-0">
            <h3 className="mb-6 text-3xl font-medium text-cool-gray-90 lg:text-4xl">
              {textContent.section5.title.line1} <br className="hidden sm:flex" />
              {textContent.section5.title.line2} <br className="hidden sm:flex" />
              {textContent.section5.title.line3}
            </h3>

            <p className="text-lg text-cool-gray-80 sm:text-base">
              {textContent.section5.subtitle.line1} <br className="hidden sm:flex" />
              {textContent.section5.subtitle.line2} <br className="hidden sm:flex" />
              {textContent.section5.subtitle.line3} <br className="hidden sm:flex" />
              {textContent.section5.subtitle.line4} <br className="hidden sm:flex" />
              {textContent.section5.subtitle.line5} <br className="hidden sm:flex" />
              {textContent.section5.subtitle.line6}
            </p>
          </div>
        </div>

        <div className="hidden h-full flex-col items-start object-cover object-left lg:flex">
          <RevealX className="hidden flex-col lg:flex" direction="left">
            <Image
              className="object-contain shadow-subtle-hard"
              src="/images/drive/internxt-desktop-backups.png"
              width={550}
              height={460}
              draggable={false}
              layout="intrinsic"
              quality={100}
              unoptimized={true}
              alt="Internxt Desktop backups"
            />
          </RevealX>
        </div>
      </div>

      <div className="flex w-full flex-col items-center bg-gray-1 px-10 py-10 lg:px-0 lg:py-20">
        <h3 className="mb-12 text-center text-5xl font-semibold text-gray-100">
          {textContent.section6.title.line1} <br className="hidden sm:flex" />
          {textContent.section6.title.line2}
        </h3>

        {/* Download links */}
        <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
      </div>
    </div>
  </section>
);

export default FeaturesSection;
