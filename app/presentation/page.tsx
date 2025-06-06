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
import VideoModal from "@/components/VideoModal";
import ExplanationModal from "@/components/ExplanationModal";
import { useGameStore } from "@/lib/gameStore";
import { questions } from "@/lib/questions";
import { initSocket } from "@/lib/socket";
import { audioManager } from "@/lib/audio";

export default function PresentationPage() {
  const router = useRouter();
  const gameStore = useGameStore();

  useEffect(() => {
    const socket = initSocket();

    socket.on('introShown', () => {
      gameStore.setShowIntro(true);
    });

    socket.on('questionRevealed', (questionIndex: number) => {
      gameStore.revealQuestion();
      audioManager.playQuestionReveal(questionIndex);
    });

    socket.on('answersRevealed', () => {
      gameStore.revealAnswers();
    });

    socket.on('answerSelected', (index: number) => {
      gameStore.selectAnswer(index);
      audioManager.playFinalAnswer();
    });

    socket.on('correctAnswerRevealed', (data: { isCorrect: boolean }) => {
      gameStore.revealCorrectAnswer();
      
      if (data.isCorrect) {
        audioManager.playCorrectAnswer();
      } else {
        audioManager.playIncorrectAnswer();
      }
    });

    socket.on('lifelineUsed', (data: { type: string; eliminatedAnswers?: number[] }) => {
      switch (data.type) {
        case 'fifty':
          if (data.eliminatedAnswers) {
            gameStore.setEliminatedAnswers(data.eliminatedAnswers);
          }
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

    socket.on('explanationShown', () => {
      gameStore.setShowExplanation(true);
    });

    socket.on('phonePickedUp', () => {
      gameStore.setShowCalling(false);
      gameStore.setShowCountdown(true);
    });

    socket.on('phoneCallEnded', () => {
      gameStore.setShowCountdown(false);
    });

    socket.on('votingEnded', () => {
      gameStore.setVotingActive(false);
    });

    socket.on('voteReceived', (data: { answer: string }) => {
      gameStore.addVote(data.answer);
    });

    return () => {
      socket.off('introShown');
      socket.off('questionRevealed');
      socket.off('answersRevealed');
      socket.off('answerSelected');
      socket.off('correctAnswerRevealed');
      socket.off('lifelineUsed');
      socket.off('questionAdvanced');
      socket.off('gameEnded');
      socket.off('explanationShown');
      socket.off('phonePickedUp');
      socket.off('phoneCallEnded');
      socket.off('votingEnded');
      socket.off('voteReceived');
    };
  }, []);

  const currentQuestion = questions[gameStore.currentQuestionIndex];

  const handleGoHome = () => {
    router.push('/');
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
              audienceVotes={gameStore.audienceVotes}
              getTotalVotes={getTotalVotes}
              getVotePercentage={getVotePercentage}
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

      <VideoModal
        src="/assets/intro.mp4"
        isOpen={gameStore.showIntro}
        onClose={() => gameStore.setShowIntro(false)}
        autoClose={true}
      />

      <VideoModal
        src="/assets/calling-480p.mp4"
        isOpen={gameStore.showCalling}
        onClose={() => gameStore.setShowCalling(false)}
        loop={true}
      />

      <VideoModal
        src="/assets/countdown.mp4"
        isOpen={gameStore.showCountdown}
        onClose={() => gameStore.setShowCountdown(false)}
        autoClose={true}
      />

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