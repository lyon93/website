import React, { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import ReactMarkdown from 'react-markdown';

export default function FaqAccordion({ question, answer, isQuestionBigger = false }) {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col items-stretch justify-start">
      <button
        type="button"
        onClick={() => {
          setActive(!active);
        }}
        className="my-5 flex cursor-pointer flex-row items-center justify-between space-x-6 text-left hover:text-primary"
      >
        <span className={`w-full text-lg font-medium ${isQuestionBigger ? 'md:text-2xl' : 'md:text-xl'}`}>
          {question}
        </span>
        <PlusCircle size={32} className={`${active && 'rotate-45'} duration-250 transition-transform ease-in-out`} />
      </button>

      <span
        className={`markdown will-change-height flex h-auto flex-col space-y-3 overflow-hidden ${
          active ? 'max-h-double-screen pb-8 opacity-100' : 'max-h-0 opacity-50'
        } duration-250 whitespace-wrap w-full pr-14 text-left text-lg text-gray-60 transition-all ease-in-out`}
      >
        {answer.map((text) => {
          console.log(text);
          return <ReactMarkdown key={text}>{text}</ReactMarkdown>;
        })}
      </span>
    </div>
  );
}
