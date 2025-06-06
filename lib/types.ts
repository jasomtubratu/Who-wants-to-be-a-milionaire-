export type Answer = {
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
  value: number;
  category: string;
  explanation: string;
  hostNotes?: string;
};

export type Lifeline = {
  id: "fifty" | "phone" | "audience";
  name: string;
  description: string;
  icon: string;
  used: boolean;
};

export type QuestionResult = {
  questionIndex: number;
  correct: boolean;
  selectedAnswer: number;
  correctAnswer: number;
};

export type GameState = {
  currentQuestionIndex: number;
  revealedQuestion: boolean;
  revealedAnswers: boolean;
  selectedAnswer: number | null;
  correctAnswerRevealed: boolean;
  eliminatedAnswers: number[];
  gameOver: boolean;
  wonAmount: number;
  activeLifeline: string | null;
  questionResults: QuestionResult[];
  showIntro: boolean;
  showExplanation: boolean;
  showCalling: boolean;
  showCountdown: boolean;
  audienceVotes: { [key: string]: number };
  votingActive: boolean;
};