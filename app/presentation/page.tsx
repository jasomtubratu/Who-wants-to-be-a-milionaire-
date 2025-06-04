"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import QuestionDisplay from "@/components/QuestionDisplay";
import AnswerOption from "@/components/AnswerOption";
import MoneyLadder from "@/components/MoneyLadder";
import Lifelines from "@/components/Lifelines";
import GameOver from "@/components/GameOver";
import { useGameStore } from "@/lib/gameStore";
import { questions } from "@/lib/questions";
import { initSocket } from "@/lib/socket";

export default function PresentationPage() {
  const router = useRouter();
  const gameStore = useGameStore();

  useEffect(() => {
    const socket = initSocket();

    socket.on('questionRevealed', () => {
      gameStore.revealQuestion();
    });

    socket.on('answersRevealed', () => {
      gameStore.revealAnswers();
    });

    socket.on('answerSelected', (index: number) => {
      gameStore.selectAnswer(index);
    });

    socket.on('correctAnswerRevealed', () => {
      gameStore.revealCorrectAnswer();
    });

    socket.on('lifelineUsed', (data: { type: string }) => {
      switch (data.type) {
        case 'fifty':
          gameStore.useFiftyFifty();
          break;
        case 'phone':
          gameStore.usePhoneFriend();
          break;
        case 'audience':
          gameStore.useAskAudience();
          break;
      }
    });

    socket.on('questionAdvanced', () => {
      gameStore.nextQuestion();
    });

    socket.on('gameEnded', (won: boolean) => {
      gameStore.endGame(won);
    });

    return () => {
      socket.off('questionRevealed');
      socket.off('answersRevealed');
      socket.off('answerSelected');
      socket.off('correctAnswerRevealed');
      socket.off('lifelineUsed');
      socket.off('questionAdvanced');
      socket.off('gameEnded');
    };
  }, []);

  const currentQuestion = questions[gameStore.currentQuestionIndex];

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex flex-col">
      <div className="bg-gray-900 bg-opacity-80 p-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-white">Presentation View</h1>
        <div className="flex items-center">
          <div className="mr-4 text-blue-300 font-semibold hidden sm:block">
            Current Prize: <span className="text-green-400">${(gameStore.currentQuestionIndex > 0 ? questions[gameStore.currentQuestionIndex - 1].value : 0).toLocaleString()}</span>
          </div>
          <Button variant="outline" onClick={handleGoHome} size="sm">
            <Home className="mr-2 h-4 w-4" />
            Exit
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:hidden bg-gray-800 bg-opacity-70 p-3 rounded-lg flex items-center justify-between">
            <span className="text-white font-semibold">Question {gameStore.currentQuestionIndex + 1}/15</span>
            <span className="text-green-400 font-bold">${currentQuestion.value.toLocaleString()}</span>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <Lifelines
              lifelines={gameStore.lifelines}
              onUseFiftyFifty={() => {}}
              onUsePhoneFriend={() => {}}
              onUseAskAudience={() => {}}
              activeLifeline={gameStore.activeLifeline}
              isPresentation={true}
            />
            
            <QuestionDisplay 
              question={currentQuestion} 
              revealed={gameStore.revealedQuestion} 
              currentValue={currentQuestion.value}
            />
            
            {gameStore.revealedAnswers && (
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.answers.map((answer, index) => (
                  <AnswerOption
                    key={index}
                    letter={String.fromCharCode(65 + index)}
                    text={answer.text}
                    isSelected={gameStore.selectedAnswer === index}
                    isCorrect={answer.isCorrect}
                    isEliminated={gameStore.eliminatedAnswers.includes(index)}
                    correctRevealed={gameStore.correctAnswerRevealed}
                    onClick={() => {}}
                    disabled={true}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="hidden md:block">
            <div className="bg-gray-800 bg-opacity-70 rounded-lg h-full">
              <MoneyLadder currentQuestionIndex={gameStore.currentQuestionIndex} />
            </div>
          </div>
        </div>
      </div>
      
      {gameStore.gameOver && (
        <GameOver 
          amount={gameStore.wonAmount} 
          onRestart={gameStore.resetGame}
        />
      )}
    </div>
  );
}