import { useEffect, useRef, useState } from 'react';
import Checkbox from './Checkbox';
import { InstagramLogo } from '@phosphor-icons/react';
import { TwitterIcon } from 'next-share';
import QuestionsSection from './QuestionsSection';
import { set } from 'cypress/types/lodash';
import Footer from '../layout/Footer';
import CheckQuestions from './CheckQuestions';
import Link from 'next/link';

type Views = 'initialState' | 'questions' | 'quizCompleted' | 'results';

interface ViewProps {
  view: Views;
}

const AnswerQuestionsSection = ({ textContent, setQuestionsAnswers }) => {
  const height = useRef(null);
  const [view, setView] = useState<Views>('initialState');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentCheckbox, setCurrentCheckbox] = useState<string>('');
  const [savedAnswers, setSavedAnswers] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [hash, setHash] = useState<string>('');

  const footerLang = require(`../../assets/lang/en/footer.json`);

  useEffect(() => {
    height.current = window.innerHeight;

    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      setCurrentQuestion(parseInt(hash));
      setView('questions');
      setCorrectAnswers(JSON.parse(sessionStorage.getItem('correctAnswers')));
    }
  }, []);

  useEffect(() => {
    handleCorrectAnswers();
    console.log(correctAnswers);
  }, [currentQuestion]);

  useEffect(() => {
    window.location.hash = hash;
  }, [hash]);

  function handleCorrectAnswers() {}

  function handleNextQuestion() {
    if (currentQuestion + 1 === 8) {
      setView('quizCompleted');
      window.location.hash = ``;
    } else {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1);
      setHash(`#${currentQuestion + 1}`);
      setSavedAnswers((previousAnswers) => [...previousAnswers, currentCheckbox]);
      setCurrentCheckbox('');
      sessionStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
      if (correctAnswers[currentQuestion] === currentCheckbox) {
        setCorrectAnswers((previousAnswers) => [...previousAnswers, currentCheckbox]);
      }
    }
  }

  function handleCheckbox(answer: string) {
    if (answer === currentCheckbox) {
      setCurrentCheckbox('');
      setQuestionsAnswers((previousAnswers) => previousAnswers.filter((item) => item !== answer));
    } else {
      setCurrentCheckbox(answer);
      setQuestionsAnswers((previousAnswers) => [...previousAnswers, answer]);
    }
  }

  const View = (viewSelected: ViewProps) => {
    const view = {
      initialState: (
        <section
          className="overflow-y-scroll xl:overflow-hidden"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
            height: height.current,
          }}
        >
          <div className="flex flex-row items-center justify-center px-5 text-white  xl:ml-24 xl:justify-between">
            <div className="flex max-w-[529px] flex-col items-center space-y-5 pb-40 pt-44 text-center xl:items-start xl:text-left">
              <h1 className="text-6xl font-semibold">{textContent.QuizSection.title}</h1>
              <p className="text-3xl font-semibold">{textContent.QuizSection.subtitle}</p>
              <p className="text-lg">{textContent.QuizSection.description}</p>
              <button
                onClick={() => {
                  setView('questions');
                  window.location.hash = `#${currentQuestion}`;
                }}
                className="w-max rounded-lg bg-primary px-5 py-3"
              >
                {textContent.QuizSection.cta}
              </button>
            </div>
            <img src="/images/cyber-awareness/Frame.svg" alt="quiz-laptop" className="hidden xl:flex" />
          </div>
        </section>
      ),
      questions: (
        <section
          className="overflow-y-scroll"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
            height: height.current,
          }}
        >
          <div className="flex flex-col items-center px-5 text-white xl:ml-24 xl:items-start">
            <div
              id={`${currentQuestion + 1}`}
              className={`flex flex-col space-y-8 pb-40 pt-44 xl:items-start xl:space-y-5`}
            >
              <p className=" text-2xl font-semibold ">
                {textContent.QuizSection.question} {currentQuestion + 1}:
              </p>
              <p className="text-4xl">{textContent.QuizSection.questions[currentQuestion].title}</p>
              <div className="flex flex-col space-y-8 xl:space-y-5">
                <div
                  onClick={() => handleCheckbox('A')}
                  className="flex cursor-pointer flex-row items-start space-x-2 text-white xl:items-center"
                >
                  <Checkbox
                    onClick={() => handleCheckbox('A')}
                    rounded="rounded-md"
                    checked={currentCheckbox === 'A'}
                    id="A"
                  />
                  <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].A}</p>
                </div>
                <div
                  onClick={() => handleCheckbox('B')}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-white"
                >
                  <Checkbox
                    onClick={() => handleCheckbox('B')}
                    checked={currentCheckbox === 'B'}
                    rounded="rounded-md"
                    id="B"
                  />
                  <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].B}</p>
                </div>
                <div
                  onClick={() => handleCheckbox('C')}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-white"
                >
                  <Checkbox
                    onClick={() => handleCheckbox('C')}
                    rounded="rounded-md"
                    checked={currentCheckbox === 'C'}
                    id="C"
                  />
                  <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].C}</p>
                </div>
                {textContent.QuizSection.questions[currentQuestion].D && (
                  <div
                    onClick={() => handleCheckbox('D')}
                    className="flex cursor-pointer flex-row items-center space-x-2 text-white"
                  >
                    <Checkbox
                      onClick={() => handleCheckbox('D')}
                      rounded="rounded-md"
                      checked={currentCheckbox === 'D'}
                      id="C"
                    />
                    <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].D}</p>
                  </div>
                )}
              </div>

              <button
                onClick={handleNextQuestion}
                className="flex w-full flex-col items-center justify-center rounded-lg bg-primary px-5 py-3 md:w-max"
              >
                {textContent.QuizSection.nextQuestion}
              </button>
            </div>
          </div>
        </section>
      ),
      quizCompleted: (
        <section
          className="overflow-y-scroll"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
            height: height.current,
          }}
        >
          <div className="flex flex-row items-center justify-center px-5 text-white xl:ml-24  xl:items-start xl:justify-between">
            <div className="flex max-w-[529px] flex-col items-center space-y-5 pb-40 pt-44 text-center xl:items-start xl:text-left">
              <p className="text-6xl font-semibold">{textContent.QuizSection.quizCompleted.title}</p>
              <p className="text-2xl font-semibold">{textContent.QuizSection.quizCompleted.subtitle}</p>
              <p className="text-lg">{textContent.QuizSection.quizCompleted.description}</p>
              <ul className="flex list-[square] flex-col space-y-1.5 pl-6">
                <li className="cursor-pointer text-lg font-bold hover:font-normal">
                  <Link href={'/cyber-awareness'}>{textContent.QuizSection.quizCompleted.cyberAwareness}</Link>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:font-normal">
                  <a href={'https://internxt.com/images/cyber-awareness/Internxt-Checklist.pdf'}>
                    <p>{textContent.QuizSection.quizCompleted.cyberSecurityChecklist}</p>
                  </a>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:font-normal">
                  <Link href={'/what-does-google-know-about-me'}>
                    {textContent.QuizSection.quizCompleted.whatGoogleKnows}
                  </Link>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:font-normal">
                  <Link href={'/password-generator'}>{textContent.QuizSection.quizCompleted.passwordGenerator}</Link>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:font-normal">
                  <Link href={'/virus-scanner'}>{textContent.QuizSection.quizCompleted.freeVirusScanner}</Link>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:font-normal">
                  <Link href={'/password-checker'}>{textContent.QuizSection.quizCompleted.passwordChecker}</Link>
                </li>
              </ul>

              <button
                onClick={() => {
                  setView('results');
                  window.location.hash = `#${currentQuestion}`;
                }}
                className="w-max items-center rounded-lg bg-primary px-5 py-3"
              >
                {textContent.QuizSection.quizCompleted.cta}
              </button>
            </div>
            <img src="/images/cyber-awareness/Frame.svg" alt="quiz-laptop" className="hidden xl:flex" />
          </div>
        </section>
      ),
      results: (
        <>
          <CheckQuestions
            textContent={textContent.CheckQuestions}
            totalCorrectAnswers={correctAnswers.length}
            answers={savedAnswers}
            correctAnswers={textContent.QuizSection.correctAnswers}
          />
          <Footer textContent={footerLang} lang="en" />
        </>
      ),
    };
    return view[viewSelected.view];
  };

  return (
    <>
      <View view={view} />
    </>
  );
};

export default AnswerQuestionsSection;
