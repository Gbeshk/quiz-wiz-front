import type { QuizHeroSectionProps } from '@/types/quizz';
import QuizCategories from '@/components/Quizzes/QuizCategories';
import QuizMetaRow from './QuizMetaRow';
import { Link } from 'react-router-dom';
import DefaultImage from '@/components/UI/Icons/DefaultImage';

export default function QuizHeroSection({ quiz }: QuizHeroSectionProps) {
  return (
    <div className="quiz-hero-grid w-full max-w-203.25 justify-between">
      <h1
        className="font-raleway max-xl1:mt-4 text-4xl leading-none font-bold tracking-normal"
        style={{ gridArea: 'title' }}
      >
        {quiz.title}
      </h1>

      <div className="max-xl1:mt-6 -mt-2" style={{ gridArea: 'categories' }}>
        <QuizCategories categories={quiz.categories} />
      </div>

      <h1
        className="text-auth-placeholder max-xl1:mt-4 mt-4 text-sm leading-6.5 font-semibold tracking-normal"
        style={{ gridArea: 'description' }}
      >
        {quiz.description}
      </h1>

      <div style={{ gridArea: 'meta' }}>
        <QuizMetaRow quiz={quiz} responsive />
      </div>

      <Link
        to={`/quizzes/${quiz.id}/start`}
        className="bg-auth-link font-inter max-xl1:w-full max-xl1:max-w-98.5 mt-10 flex h-12 w-83.5 cursor-pointer items-center justify-center rounded-xl text-base font-semibold text-white"
        style={{ gridArea: 'button' }}
      >
        Start Quiz
      </Link>

      <div
        className="max-xl1:mt-4 max-xl1:h-68.5 max-xl1:w-98.5 max-xl1:ml-0 ml-16 flex h-76.75 w-81.5 shrink-0 items-center justify-center overflow-hidden rounded-3xl"
        style={{ gridArea: 'image' }}
      >
        {quiz.image ? (
          <img
            src={quiz.image}
            alt={quiz.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <DefaultImage />
        )}
      </div>
    </div>
  );
}
