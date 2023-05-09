/* eslint-disable max-len */
import Image from 'next/image';
import React from 'react';
import DownloadComponent from '../drive/DownloadComponent';

const HeroSection = ({ textContent, lang, device, download }) => (
  <section className="flex w-full flex-col pt-20">
    <div className="flex flex-col items-center py-40">
      {/* Main title */}
      <div className="flex flex-col items-center justify-center space-y-6 px-5 text-center">
        <div className="flex w-max items-center justify-center rounded-lg bg-gray-5 py-2 px-4">
          <h2 className="text-xl font-medium text-gray-80">{textContent.eyebrow}</h2>
        </div>

        <h1 className="mb-10 px-4 text-4xl font-medium text-cool-gray-90 lg:text-6xl">
          {textContent.title.line1} <br className="hidden sm:flex" />
          <span className="text-primary">{textContent.title.line2}</span>
        </h1>

        <h3 className="mb-10 max-w-4xl text-lg font-normal text-cool-gray-80 sm:text-base">
          {textContent.subtitle.line1}
          {textContent.subtitle.line2}
          {textContent.subtitle.line3}
        </h3>

        <div className="flex h-full flex-col px-5 py-16">
          <img src="/images/photos/hero-section-group.webp" alt="Internxt secure cloud storage" draggable="false" />
        </div>
      </div>

      {/* Download links */}

      <DownloadComponent textContent={textContent.DownloadLinks} lang={lang} download={download} />
    </div>
  </section>
);

export default HeroSection;
