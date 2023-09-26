import { InstagramLogo } from '@phosphor-icons/react';
import { TwitterIcon } from 'next-share';
import QuestionsSection from './QuestionsSection';

const CheckQuestions = ({ textContent, answers, correctAnswers }) => {
  const isCorrectAnswer: Boolean[] = correctAnswers.map((answer, index) => {
    return answers[index] === answer;
  });

  const correctAnswerLength = isCorrectAnswer.filter((answer) => answer === true).length;

  const shareUrlFacebook = 'https://www.facebook.com/sharer/sharer.php';
  const shareUrlTwitter = 'https://twitter.com/intent/tweet';
  const urlToShare = `https://${window.location.origin}/cyber-security-quiz`; // Reemplaza con la URL que deseas compartir
  const textToShare = `I just scored ${correctAnswerLength}${textContent.totalQuestions} on Internxt’s cybersecurity quiz! Can you beat my score? Try it and find out!`;

  const facebookShareLink = `${shareUrlFacebook}?u=${encodeURIComponent(urlToShare)}&quote=${encodeURIComponent(
    textToShare,
  )}`;
  const twitterShareLink = `${shareUrlTwitter}?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(
    textToShare,
  )}`;
  const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    urlToShare,
  )}&title=${encodeURIComponent(textToShare)}`;

  return (
    <section className="overflow-hidden">
      <div className="flex  flex-col items-center justify-center py-40 px-5">
        <div className="flex w-full max-w-[847px] flex-col space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.lessThan3.title}</p>
          <p className="text-xl text-gray-80">{textContent.lessThan3.subtitle}</p>
          <p className="text-9xl font-bold text-primary">
            {correctAnswerLength}
            {textContent.totalQuestions}
          </p>
          <p className="text-xl text-gray-80">{textContent.shareTheResults}</p>
          <div className="flex flex-row items-center justify-center space-x-6">
            <p className="text-xl font-bold text-gray-80">{textContent.shareYourResults}</p>
            <div className="flex flex-row space-x-4">
              <a href={twitterShareLink} target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  className="h-4.5"
                  src={`/icons/social/cool-gray-60/twitter.svg`}
                  draggable="false"
                  alt="twitter icon"
                />
              </a>
              <a href={facebookShareLink} target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  className="h-4.5"
                  src={`/icons/social/cool-gray-60/facebook.svg`}
                  draggable="false"
                  alt="facebook icon"
                />
              </a>
              <a href={linkedInShareLink} target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  className="h-4.5"
                  src={`/icons/social/cool-gray-60/linkedin.svg`}
                  draggable="false"
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="flex flex-col items-center space-y-16">
            <QuestionsSection textContent={textContent.QuestionsSection} isCorrectAnswer={isCorrectAnswer} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckQuestions;
