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
  Home,
  Play,
  BookOpen,
  Phone,
  PhoneCall,
  Users,
  BarChart3
} from "lucide-react";
import QuestionDisplay from "@/components/QuestionDisplay";
import AnswerOption from "@/components/AnswerOption";
import MoneyLadder from "@/components/MoneyLadder";
import Lifelines from "@/components/Lifelines";
import GameOver from "@/components/GameOver";
import ExplanationModal from "@/components/ExplanationModal";
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

  const handleShowIntro = () => {
    getSocket().emit('showIntro');
    gameStore.setShowIntro(true);
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
    // Clear voting cookie for next question
    localStorage.removeItem('hasVoted');
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

  const handleShowExplanation = () => {
    getSocket().emit('showExplanation');
    gameStore.setShowExplanation(true);
  };

  const handlePhonePickedUp = () => {
    getSocket().emit('phonePickedUp');
    gameStore.setShowCalling(false);
    gameStore.setShowCountdown(true);
  };

  const handleEndPhoneCall = () => {
    getSocket().emit('endPhoneCall');
    gameStore.setShowCountdown(false);
  };

  const handleEndVoting = () => {
    getSocket().emit('endVoting');
    gameStore.setVotingActive(false);
  };

  const getTotalVotes = () => {
    return Object.values(gameStore.audienceVotes).reduce((sum, votes) => sum + votes, 0);
  };

  const getVotePercentage = (letter: string) => {
    const total = getTotalVotes();
    if (total === 0) return 0;
    return Math.round(((gameStore.audienceVotes[letter] || 0) / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Host View</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleShowIntro}>
              <Play className="mr-2 h-4 w-4" />
              Show Intro
            </Button>
            <Button variant="outline" onClick={handleGoHome}>
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </div>
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

              {currentQuestion.hostNotes && (
                <div className="mb-4 p-3 bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded-lg">
                  <h4 className="text-yellow-400 font-semibold mb-1">Host Notes:</h4>
                  <p className="text-yellow-200 text-sm">{currentQuestion.hostNotes}</p>
                </div>
              )}

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
                  onClick={handleShowExplanation}
                  disabled={!gameStore.correctAnswerRevealed}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Show Explanation
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
              
              {gameStore.activeLifeline === 'phone' && (
                <div className="mt-4 space-y-2">
                  {gameStore.showCalling && (
                    <Button 
                      onClick={handlePhonePickedUp}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Friend Picked Up
                    </Button>
                  )}
                  {gameStore.showCountdown && (
                    <Button 
                      onClick={handleEndPhoneCall}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      End Call
                    </Button>
                  )}
                </div>
              )}

              {gameStore.activeLifeline === 'audience' && (
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-white font-semibold">Audience Voting</h4>
                    <div className="flex gap-2">
                      <span className="text-blue-400">Total votes: {getTotalVotes()}</span>
                      <Button 
                        onClick={handleEndVoting}
                        size="sm"
                        className="bg-red-600 hover:bg-red-700"
                      >
                        End Voting
                      </Button>
                    </div>
                  </div>
                  
                  {getTotalVotes() > 0 && (
                    <div className="space-y-2">
                      {['A', 'B', 'C', 'D'].map(letter => (
                        <div key={letter} className="flex items-center space-x-2">
                          <span className="text-white w-6">{letter}</span>
                          <div className="flex-1 bg-gray-700 h-4 rounded-full overflow-hidden">
                            <div 
                              className="bg-blue-600 h-full rounded-full transition-all duration-500"
                              style={{ width: `${getVotePercentage(letter)}%` }}
                            />
                          </div>
                          <span className="text-white w-12 text-right">
                            {getVotePercentage(letter)}%
                          </span>
                          <span className="text-gray-400 w-8 text-right text-sm">
                            ({gameStore.audienceVotes[letter] || 0})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {gameStore.votingActive && (
                    <div className="mt-3 p-3 bg-blue-900 bg-opacity-30 border border-blue-600 rounded-lg">
                      <p className="text-blue-200 text-sm">
                        Voting is active! Share this link: <span className="font-mono">{window.location.origin}/vote</span>
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              {gameStore.activeLifeline && gameStore.activeLifeline !== 'audience' && gameStore.activeLifeline !== 'phone' && (
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
      
      <ExplanationModal
        isOpen={gameStore.showExplanation}
        onClose={() => gameStore.setShowExplanation(false)}
        explanation={currentQuestion.explanation}
        questionText={currentQuestion.text}
      />
      
      {gameStore.gameOver && (
        <GameOver 
          amount={gameStore.wonAmount} 
          onRestart={gameStore.resetGame}
        />
      )}
    </div>
  );
}