import type { QuizHeroSectionProps } from '@/types/quizz';
import QuizCategories from '@/components/Quizzes/QuizCategories';
import QuizMetaRow from './QuizMetaRow';
import { Link } from 'react-router-dom';

export default function QuizHeroSection({ quiz }: QuizHeroSectionProps) {
  return (
    <div className="w-full max-w-203.25 flex justify-between gap-8">
      <div className=" w-full max-w-113.75 shrink-0">
        <h1 className="font-raleway font-bold text-4xl leading-none tracking-normal">
          {quiz.title}
        </h1>
        <div className="-mt-2">
          <QuizCategories categories={quiz.categories} />
        </div>
        <h1 className="text-auth-placeholder mt-4 font-semibold text-sm leading-6.5 tracking-normal">
          {quiz.description}
        </h1>

        <QuizMetaRow quiz={quiz} />
        <Link
          to={`/quizzes/${quiz.id}/start`}
          className="w-83.5 h-12 bg-auth-link mt-10 rounded-xl text-white font-inter font-semibold text-base cursor-pointer flex items-center justify-center"
        >
          Start Quiz
        </Link>
      </div>

      <div className="w-81.5 h-76.75 bg-amber-100 rounded-3xl flex items-center justify-center shrink-0">
        Image
      </div>
    </div>
  );
}
