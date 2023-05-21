import { CaretRight } from '@phosphor-icons/react';
import React from 'react';

const SuiteSection = ({ textContent }) => {
  const suiteCards = [
    {
      img: '/images/cyber-awareness/SuiteSection/card-1.svg',
      title: textContent.cards['title-1'],
      body: textContent.cards['body-1'],
      textUrl: textContent.cards['textUrl-1'],
      url: '/drive',
    },
    {
      img: '/images/cyber-awareness/SuiteSection/card-2.svg',
      title: textContent.cards['title-2'],
      body: textContent.cards['body-2'],
      textUrl: textContent.cards['textUrl-2'],
      url: '/photos',
    },
    {
      img: '/images/cyber-awareness/SuiteSection/card-3.svg',
      title: textContent.cards['title-3'],
      body: textContent.cards['body-3'],
      textUrl: textContent.cards['textUrl-3'],
      url: 'https://send.internxt.com',
    },
    {
      img: '/images/cyber-awareness/SuiteSection/card-4.svg',
      title: textContent.cards['title-4'],
      body: textContent.cards['body-4'],
      textUrl: textContent.cards['textUrl-4'],
      url: '/mail',
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-20 p-10 px-5 sm:p-20">
        <p className="text-center text-5xl font-semibold md:w-full md:max-w-xl">{textContent.title}</p>
        <div className="grid grid-cols-1 justify-items-center gap-x-40 gap-y-20 md:grid-cols-2">
          {suiteCards.map((card, index) => (
            <div key={index} className="flex flex-col space-y-4 rounded-2xl bg-gray-1 p-10 ">
              <img src={card.img} width={32} height={32} alt={`${card.title} image`} />
              <p className="text-2xl font-medium">{card.title}</p>
              <p className="max-w-[408px] text-lg font-normal">{card.body}</p>
              <a href={card.url} target={'_blank'} className="flex cursor-pointer flex-row items-center space-x-1">
                <p className="text-lg font-semibold text-primary">{card.textUrl}</p>
                <CaretRight size={16} weight="bold" className="text-primary" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuiteSection;
