import type { QuizHeroSectionProps } from '@/types/quizz';
import QuizCategories from '@/components/Quizzes/QuizCategories';
import QuizMetaRow from './QuizMetaRow';
import { Link } from 'react-router-dom';

export default function QuizHeroSection({ quiz }: QuizHeroSectionProps) {
  return (
    <div className="flex w-full max-w-203.25 justify-between gap-8">
      <div className="w-full max-w-113.75 shrink-0">
        <h1 className="font-raleway text-4xl leading-none font-bold tracking-normal">
          {quiz.title}
        </h1>
        <div className="-mt-2">
          <QuizCategories categories={quiz.categories} />
        </div>
        <h1 className="text-auth-placeholder mt-4 text-sm leading-6.5 font-semibold tracking-normal">
          {quiz.description}
        </h1>

        <QuizMetaRow quiz={quiz} />
        <Link
          to={`/quizzes/${quiz.id}/start`}
          className="bg-auth-link font-inter mt-10 flex h-12 w-83.5 cursor-pointer items-center justify-center rounded-xl text-base font-semibold text-white"
        >
          Start Quiz
        </Link>
      </div>

      <div className="flex h-76.75 w-81.5 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-amber-100">
        {quiz.image ? (
          <img
            src={quiz.image}
            alt={quiz.title}
            className="h-full w-full object-cover"
          />
        ) : (
          'Image'
        )}
      </div>
    </div>
  );
}
