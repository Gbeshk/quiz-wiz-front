import type { Quiz, Question } from '@/types/quizz';
const TITLES = [
  'World Capitals',
  '80s Movie Trivia',
  'Classical Music Legends',
  'Greek Philosophy Basics',
  'Olympic History',
  'Board Game Origins',
];

const DESCRIPTIONS = [
  'Test your knowledge of countries and their capitals from around the world.',
  'A nostalgic challenge covering iconic films from the 1980s.',
  'Recognize legendary composers and masterpieces from classical music.',
  'Explore the ideas of Socrates, Plato, Aristotle, and other Greek thinkers.',
  'Discover memorable moments and records from Olympic history.',
  'Learn where your favorite board games came from and how they evolved.',
];

const CATEGORY_PAIRS: [string, string][] = [
  ['Geography', 'Travel'],
  ['Movies', 'Entertainment'],
  ['Music', 'History'],
  ['Philosophy', 'Greek philosophy'],
  ['Sports', 'Olympics'],
  ['Toys', 'Just for fun'],
];
const INSTRUCTIONS: string[] = [
  'You will be asked 3 questions about world capitals. Each question has only one correct answer, so read carefully before choosing. You have 8 minutes to complete the quiz, and your score is based on correct answers.',
  'You will be asked 3 questions about 80s movies. Select the best answer for each question. You have 11 minutes to complete the quiz, and points are awarded per question, with harder questions worth more.',
  'You will be asked 3 questions about classical music. Only one option is correct per question. You have 14 minutes to complete the quiz, so try to answer as many correctly as possible for a higher score.',
  'You will be asked 3 questions about Greek philosophy. Read each question carefully before answering. You have 17 minutes to complete the quiz, and your total points depend on which questions you get right.',
  'You will be asked 3 questions about Olympic history. Choose one answer per question. You have 20 minutes to complete the quiz, and some questions are worth more points than others.',
  'You will be asked 3 questions about board game origins. Pick the correct option for each question. You have 23 minutes to complete the quiz, and points are awarded based on difficulty.',
];
const DIFFICULTIES = [
  'Starter',
  'Beginner',
  'Middle',
  'High',
  'Very high',
  'Dangerously high',
];

const TIMES_PLAYED = [3, 1, 5, 0, 2, 4];
const QUESTIONS: Question[][] = [
  [
    {
      id: '1',
      question: 'What is the capital city of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      type: 'single',
      correctAnswer: 1,
      points: 10,
    },
    {
      id: '2',
      question: 'What is the capital city of Japan?',
      options: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima'],
      type: 'single',
      correctAnswer: 0,
      points: 10,
    },
    {
      id: '3',
      question: 'Which of these cities are national capitals?',
      options: ['Rome', 'Barcelona', 'Athens', 'Munich'],
      type: 'multiple',
      correctAnswers: [0, 2],
      points: 15,
    },
    {
      id: '4',
      question: 'What is the capital city of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      type: 'single',
      correctAnswer: 1,
      points: 10,
    },
  ],

  [
    {
      id: '1',
      question: 'Which movie features the character Marty McFly?',
      options: ['Top Gun', 'Back to the Future', 'Ghostbusters', 'Die Hard'],
      type: 'single',
      correctAnswer: 1,
      points: 10,
    },
    {
      id: '2',
      question: 'Which of these actors appeared in 80s blockbuster films?',
      options: [
        'Harrison Ford',
        'Tom Cruise',
        'Arnold Schwarzenegger',
        'Meryl Streep',
      ],
      type: 'multiple',
      correctAnswers: [0, 1, 2],
      points: 10,
    },
    {
      id: '3',
      question: 'Which movie includes the quote "E.T. phone home"?',
      options: [
        'Alien',
        'E.T. the Extra-Terrestrial',
        'The Terminator',
        'Predator',
      ],
      type: 'single',
      correctAnswer: 1,
      points: 15,
    },
  ],

  [
    {
      id: '1',
      question: 'Who composed the famous Symphony No. 9?',
      options: ['Mozart', 'Beethoven', 'Bach', 'Chopin'],
      type: 'single',
      correctAnswer: 1,
      points: 10,
    },
    {
      id: '2',
      question: 'Which instrument has 88 keys?',
      options: ['Violin', 'Flute', 'Piano', 'Trumpet'],
      type: 'single',
      correctAnswer: 2,
      points: 10,
    },
    {
      id: '3',
      question: 'Which of these composers were born in Austria?',
      options: ['Mozart', 'Beethoven', 'Bach', 'Haydn'],
      type: 'multiple',
      correctAnswers: [0, 3],
      points: 15,
    },
  ],

  [
    {
      id: '1',
      question: 'Who was the teacher of Plato?',
      options: ['Aristotle', 'Socrates', 'Pythagoras', 'Heraclitus'],
      type: 'single',
      correctAnswer: 1,
      points: 10,
    },
    {
      id: '2',
      question: 'Which philosopher wrote "The Republic"?',
      options: ['Plato', 'Socrates', 'Epicurus', 'Zeno'],
      type: 'single',
      correctAnswer: 0,
      points: 10,
    },
    {
      id: '3',
      question: 'Which of these are considered ancient Greek philosophers?',
      options: ['Socrates', 'Confucius', 'Aristotle', 'Seneca'],
      type: 'multiple',
      correctAnswers: [0, 2],
      points: 15,
    },
  ],

  [
    {
      id: '1',
      question: 'How often are the Summer Olympic Games held?',
      options: [
        'Every 2 years',
        'Every 3 years',
        'Every 4 years',
        'Every 5 years',
      ],
      type: 'single',
      correctAnswer: 2,
      points: 10,
    },
    {
      id: '2',
      question: 'Where did the ancient Olympic Games begin?',
      options: ['Rome', 'Greece', 'Egypt', 'China'],
      type: 'single',
      correctAnswer: 1,
      points: 10,
    },
    {
      id: '3',
      question: 'Which of these are official Olympic symbols or elements?',
      options: ['Five rings', 'Olympic torch', 'Golden crown', 'Laurel trophy'],
      type: 'multiple',
      correctAnswers: [0, 1],
      points: 15,
    },
  ],

  [
    {
      id: '1',
      question: 'Who created the board game Monopoly?',
      options: [
        'Charles Darrow',
        'Milton Bradley',
        'Parker Brothers',
        'Hasbro',
      ],
      type: 'single',
      correctAnswer: 0,
      points: 10,
    },
    {
      id: '2',
      question: 'Chess originated from which country?',
      options: ['India', 'France', 'USA', 'Japan'],
      type: 'single',
      correctAnswer: 0,
      points: 10,
    },
    {
      id: '3',
      question:
        'Which of these games involve moving pieces around a board using dice?',
      options: ['Monopoly', 'Chess', 'Risk', 'Scrabble'],
      type: 'multiple',
      correctAnswers: [0, 2],
      points: 15,
    },
  ],
];

export const MOCK_QUIZZES: Quiz[] = TITLES.map((title, index) => {
  const isCompleted = index % 3 !== 0;
  const questions = QUESTIONS[index];
  const pointsTotal = questions.reduce((sum, q) => sum + q.points, 0);

  return {
    id: String(index + 1),
    title,
    description: DESCRIPTIONS[index],
    categories: CATEGORY_PAIRS[index],
    questions,
    isCompleted,
    completedDate: isCompleted ? '20 Jan, 2022' : undefined,
    totalTimeMinutes: 8 + index * 3,
    totalUsers: 15 + index * 7,
    difficulty: DIFFICULTIES[index],
    pointsEarned: isCompleted ? Math.round(pointsTotal * 0.7) : 0,
    pointsTotal,
    timesPlayed: TIMES_PLAYED[index],
    instructions: INSTRUCTIONS[index],
  };
});
