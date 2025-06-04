"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { questions, moneyLadder, lifelines } from './questions';
import type { GameState, Lifeline } from './types';

interface GameStore extends GameState {
  lifelines: Lifeline[];
  resetGame: () => void;
  revealQuestion: () => void;
  revealAnswers: () => void;
  selectAnswer: (index: number) => void;
  revealCorrectAnswer: () => void;
  nextQuestion: () => void;
  useFiftyFifty: () => void;
  usePhoneFriend: () => void;
  useAskAudience: () => void;
  setActiveLifeline: (id: string | null) => void;
  endGame: (won: boolean) => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      currentQuestionIndex: 0,
      revealedQuestion: false,
      revealedAnswers: false,
      selectedAnswer: null,
      correctAnswerRevealed: false,
      eliminatedAnswers: [],
      gameOver: false,
      wonAmount: 0,
      activeLifeline: null,
      lifelines: JSON.parse(JSON.stringify(lifelines)),

      resetGame: () => set({
        currentQuestionIndex: 0,
        revealedQuestion: false,
        revealedAnswers: false,
        selectedAnswer: null,
        correctAnswerRevealed: false,
        eliminatedAnswers: [],
        gameOver: false,
        wonAmount: 0,
        activeLifeline: null,
        lifelines: JSON.parse(JSON.stringify(lifelines))
      }),

      revealQuestion: () => set({ revealedQuestion: true }),
      
      revealAnswers: () => set({ revealedAnswers: true }),
      
      selectAnswer: (index: number) => set({ selectedAnswer: index }),
      
      revealCorrectAnswer: () => set({ correctAnswerRevealed: true }),
      
      nextQuestion: () => {
        const state = get();
        const currentQuestion = questions[state.currentQuestionIndex];
        const newWonAmount = currentQuestion.value;
        
        if (state.currentQuestionIndex < questions.length - 1) {
          set({
            currentQuestionIndex: state.currentQuestionIndex + 1,
            revealedQuestion: false,
            revealedAnswers: false,
            selectedAnswer: null,
            correctAnswerRevealed: false,
            eliminatedAnswers: [],
            wonAmount: newWonAmount,
            activeLifeline: null
          });
        } else {
          set({
            gameOver: true,
            wonAmount: newWonAmount
          });
        }
      },
      
      useFiftyFifty: () => {
        const state = get();
        const currentQuestion = questions[state.currentQuestionIndex];
        
        // Find incorrect answers
        const incorrectIndices = currentQuestion.answers
          .map((answer, index) => ({ index, isCorrect: answer.isCorrect }))
          .filter(answer => !answer.isCorrect)
          .map(answer => answer.index);
        
        // Randomly select two to eliminate
        const shuffled = [...incorrectIndices].sort(() => 0.5 - Math.random());
        const toEliminate = shuffled.slice(0, 2);
        
        // Update lifelines
        const updatedLifelines = state.lifelines.map(lifeline => 
          lifeline.id === "fifty" ? { ...lifeline, used: true } : lifeline
        );
        
        set({
          eliminatedAnswers: toEliminate,
          lifelines: updatedLifelines,
          activeLifeline: null
        });
      },
      
      usePhoneFriend: () => {
        const updatedLifelines = get().lifelines.map(lifeline => 
          lifeline.id === "phone" ? { ...lifeline, used: true } : lifeline
        );
        
        set({
          lifelines: updatedLifelines,
          activeLifeline: "phone"
        });
      },
      
      useAskAudience: () => {
        const updatedLifelines = get().lifelines.map(lifeline => 
          lifeline.id === "audience" ? { ...lifeline, used: true } : lifeline
        );
        
        set({
          lifelines: updatedLifelines,
          activeLifeline: "audience"
        });
      },
      
      setActiveLifeline: (id: string | null) => set({ activeLifeline: id }),
      
      endGame: (won: boolean) => {
        const state = get();
        const finalAmount = won ? questions[state.currentQuestionIndex].value : 0;
        
        set({
          gameOver: true,
          wonAmount: finalAmount
        });
      }
    }),
    {
      name: 'millionaire-game-storage',
    }
  )
);