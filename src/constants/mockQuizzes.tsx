import type { Quiz } from '@/types/quizz';

const TITLES = [
  'World Capitals',
  '80s Movie Trivia',
  'Classical Music Legends',
  'Greek Philosophy Basics',
  'Olympic History',
  'Board Game Origins',
  'Space Exploration Facts',
  'Famous Painters',
  'Coding Languages 101',
  'Ancient Rome',
  'Ocean Creatures',
  'World Religions',
  'Football Legends',
  'Video Game History',
  'Human Anatomy Basics',
  'Dance Styles Around the World',
  'Internet Culture',
  'Language Families',
  'Literary Classics',
  'Math Puzzles',
  'Travel Landmarks',
  'Gadgets Through the Decades',
  'Animated Classics',
  'Psychology 101',
];

const CATEGORY_PAIRS: [string, string][] = [
  ['Geography', 'Travel'],
  ['Movies', 'Entertainment'],
  ['Music', 'History'],
  ['Philosophy', 'Greek philosophy'],
  ['Sports', 'Olympics'],
  ['Toys', 'Just for fun'],
  ['Physics', 'Trivia'],
  ['ART', 'History'],
  ['Internet', 'Gadgets'],
  ['History', 'Trivia'],
  ['Animations', 'Just for fun'],
  ['Religion', 'History'],
  ['Sports', 'Trivia'],
  ['Gaming', 'Entertainment'],
  ['Human Anatomy', 'Trivia'],
  ['Dance', 'Entertainment'],
  ['Internet', 'Just for fun'],
  ['Language', 'Trivia'],
  ['Literature', 'Trivia'],
  ['Math', 'Trivia'],
  ['Travel', 'Geography'],
  ['Gadgets', 'Internet'],
  ['Animations', 'Movies'],
  ['Psychology', 'Trivia'],
];

const DIFFICULTIES = [
  'Starter',
  'Beginner',
  'Middle',
  'High',
  'Very high',
  'Dangerously high',
];

export const MOCK_QUIZZES: Quiz[] = TITLES.map((title, index) => {
  const isCompleted = index % 3 !== 0;

  return {
    id: String(index + 1),
    title,
    categories: CATEGORY_PAIRS[index],
    isCompleted,
    completedDate: isCompleted ? '20 Jan, 2022' : undefined,
    totalTimeMinutes: 8 + (index % 5) * 3,
    totalUsers: 15 + index * 7,
    difficulty: DIFFICULTIES[index % DIFFICULTIES.length],
    pointsEarned: isCompleted ? 6 + (index % 5) : 0,
    pointsTotal: 10,
  };
});
