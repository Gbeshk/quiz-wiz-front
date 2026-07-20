import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import Quizzes from '@/pages/Quizzes';
import QuizDetailsPage from '@/pages/QuizDetailsPage';
import StartQuizPage from '@/pages/StartQuizPage';
import NotFoundPage from '@/pages/NotFoundPage';
import InternalErrorPage from '@/pages/InternalErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <InternalErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
  {
    path: '/quizzes',
    element: <Quizzes />,
  },
  {
    path: '/quizzes/:id',
    element: <QuizDetailsPage />,
  },
  {
    path: '/quizzes/:id/start',
    element: <StartQuizPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
