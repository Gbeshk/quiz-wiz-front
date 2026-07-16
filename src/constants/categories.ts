export const ALL_QUIZZES = 'All Quizzes';

export const PAGE_CATEGORIES: string[] = [
  ALL_QUIZZES,
  'Geography',
  'Music',
  'Movies',
  'Television',
  'Just for fun',
  'Personality',
  'Sports',
  'History',
  'Language',
  'Literature',
  'Philosophy',
  'Math',
  'Toys',
  'Entertainment',
  'Olympics',
  'Greek philosophy',
  'Animations',
  'Psychology',
  'ART',
  'Physics',
  'Human Anatomy',
  'Geometry',
  'Dance',
  'Gadgets',
  'Internet',
  'Religion',
  'Gaming',
  'Travel',
  'Trivia',
];

export const FILTER_CATEGORIES: string[] = PAGE_CATEGORIES.filter(
  (category) => category !== ALL_QUIZZES,
);
