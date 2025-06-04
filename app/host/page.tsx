"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  Home 
} from "lucide-react";
import QuestionDisplay from "@/components/QuestionDisplay";
import AnswerOption from "@/components/AnswerOption";
import MoneyLadder from "@/components/MoneyLadder";
import Lifelines from "@/components/Lifelines";
import GameOver from "@/components/GameOver";
import { useGameStore } from "@/lib/gameStore";
import { questions } from "@/lib/questions";
import { initSocket, getSocket } from "@/lib/socket";

export default function HostPage() {
  const router = useRouter();
  const gameStore = useGameStore();
  
  useEffect(() => {
    initSocket();
  }, []);

  const currentQuestion = questions[gameStore.currentQuestionIndex];
  const correctAnswerIndex = currentQuestion?.answers.findIndex(a => a.isCorrect);

  useEffect(() => {
    if (gameStore.gameOver) {
      gameStore.resetGame();
    }
  }, []);

  const handleGoHome = () => {
    gameStore.resetGame();
    router.push('/');
  };

  const handleRevealQuestion = () => {
    getSocket().emit('revealQuestion');
    gameStore.revealQuestion();
  };

  const handleRevealAnswers = () => {
    getSocket().emit('revealAnswers');
    gameStore.revealAnswers();
  };

  const handleSelectAnswer = (index: number) => {
    getSocket().emit('selectAnswer', index);
    gameStore.selectAnswer(index);
  };

  const handleRevealCorrectAnswer = () => {
    getSocket().emit('revealCorrectAnswer');
    gameStore.revealCorrectAnswer();
  };

  const handleNextQuestion = () => {
    getSocket().emit('nextQuestion');
    gameStore.nextQuestion();
  };

  const handleEndGame = (won: boolean) => {
    getSocket().emit('gameOver', won);
    gameStore.endGame(won);
  };

  const handleUseLifeline = (type: string) => {
    getSocket().emit('useLifeline', { type });
    switch (type) {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Host View</h1>
          <Button variant="outline" onClick={handleGoHome}>
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <Card className="bg-gray-800 border-gray-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-xl font-semibold">
                  Question {gameStore.currentQuestionIndex + 1} of {questions.length}
                </h2>
                <div className="text-green-400 text-lg font-semibold">
                  ${currentQuestion.value.toLocaleString()}
                </div>
              </div>
              
              <QuestionDisplay 
                question={currentQuestion} 
                revealed={true} 
                currentValue={currentQuestion.value}
                isHost={true}
              />

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
                    onClick={() => handleSelectAnswer(index)}
                    disabled={gameStore.correctAnswerRevealed}
                  />
                ))}
              </div>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 p-4">
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleRevealQuestion}
                  disabled={gameStore.revealedQuestion}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Reveal Question
                </Button>
                
                <Button
                  onClick={handleRevealAnswers}
                  disabled={!gameStore.revealedQuestion || gameStore.revealedAnswers}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Reveal Answers
                </Button>
                
                <Button
                  onClick={handleRevealCorrectAnswer}
                  disabled={!gameStore.revealedAnswers || gameStore.correctAnswerRevealed || gameStore.selectedAnswer === null}
                  className={
                    gameStore.selectedAnswer === correctAnswerIndex
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-red-600 hover:bg-red-700"
                  }
                >
                  {gameStore.selectedAnswer === correctAnswerIndex ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : (
                    <X className="mr-2 h-4 w-4" />
                  )}
                  Reveal Correct Answer
                </Button>
                
                <Button
                  onClick={handleNextQuestion}
                  disabled={!gameStore.correctAnswerRevealed}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Next Question
                </Button>
                
                <Button
                  onClick={() => handleEndGame(gameStore.selectedAnswer === correctAnswerIndex)}
                  disabled={!gameStore.correctAnswerRevealed}
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-900 hover:text-white ml-auto"
                >
                  End Game
                </Button>
              </div>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 p-4">
              <h3 className="text-white text-lg font-semibold mb-3">Lifelines</h3>
              <Lifelines
                lifelines={gameStore.lifelines}
                onUseFiftyFifty={() => handleUseLifeline('fifty')}
                onUsePhoneFriend={() => handleUseLifeline('phone')}
                onUseAskAudience={() => handleUseLifeline('audience')}
                activeLifeline={gameStore.activeLifeline}
                disabled={!gameStore.revealedAnswers || gameStore.correctAnswerRevealed}
              />
              
              {gameStore.activeLifeline && (
                <Button 
                  onClick={() => gameStore.setActiveLifeline(null)}
                  className="mt-4 bg-gray-700 hover:bg-gray-600"
                >
                  <EyeOff className="mr-2 h-4 w-4" />
                  Hide Lifeline Result
                </Button>
              )}
            </Card>
          </div>
          
          <div className="md:col-span-1">
            <Card className="bg-gray-800 border-gray-700 h-full">
              <MoneyLadder currentQuestionIndex={gameStore.currentQuestionIndex} />
            </Card>
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