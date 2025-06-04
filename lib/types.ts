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
};

export type Lifeline = {
  id: "fifty" | "phone" | "audience";
  name: string;
  description: string;
  icon: string;
  used: boolean;
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
};