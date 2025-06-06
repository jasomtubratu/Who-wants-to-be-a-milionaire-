"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Vote, CheckCircle } from "lucide-react";
import { useGameStore } from "@/lib/gameStore";
import { questions } from "@/lib/questions";
import { initSocket, getSocket } from "@/lib/socket";

export default function VotePage() {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const gameStore = useGameStore();

  useEffect(() => {
    // Check if user has already voted (using localStorage as cookie alternative)
    const voted = localStorage.getItem('hasVoted');
    if (voted === 'true') {
      setHasVoted(true);
    }

    initSocket();
  }, []);

  const currentQuestion = questions[gameStore.currentQuestionIndex];

  const handleVote = (answer: string) => {
    if (hasVoted || !gameStore.votingActive) return;

    setSelectedAnswer(answer);
    setHasVoted(true);
    localStorage.setItem('hasVoted', 'true');
    
    // Send vote to server
    getSocket().emit('vote', { answer, questionIndex: gameStore.currentQuestionIndex });
    gameStore.addVote(answer);
  };

  if (!gameStore.votingActive) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center p-4">
        <Card className="bg-gray-800 border-gray-700 p-8 text-center max-w-md">
          <Vote className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Voting Not Active</h1>
          <p className="text-gray-300">
            There is no active voting session at the moment. Please wait for the host to start audience voting.
          </p>
        </Card>
      </div>
    );
  }

  if (hasVoted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center p-4">
        <Card className="bg-gray-800 border-gray-700 p-8 text-center max-w-md">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Vote Submitted!</h1>
          <p className="text-gray-300 mb-4">
            Thank you for participating in the audience poll.
          </p>
          {selectedAnswer && (
            <p className="text-blue-400">
              Your vote: <span className="font-semibold">{selectedAnswer}</span>
            </p>
          )}
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Audience Vote</h1>
          <p className="text-blue-200">Help the contestant by voting for the correct answer!</p>
        </div>

        <Card className="bg-gray-800 border-gray-700 p-6 mb-6">
          <div className="text-center mb-6">
            <div className="text-green-400 text-lg font-semibold mb-2">
              ${currentQuestion.value.toLocaleString()}
            </div>
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              {currentQuestion.text}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.answers.map((answer, index) => {
              const letter = String.fromCharCode(65 + index);
              return (
                <Button
                  key={index}
                  onClick={() => handleVote(letter)}
                  className="w-full p-4 text-left bg-gray-700 hover:bg-blue-600 border border-gray-600 hover:border-blue-400 transition-all"
                >
                  <div className="flex items-center">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 mr-3 border border-gray-500">
                      <span className="text-white font-semibold">{letter}</span>
                    </div>
                    <span className="text-white text-lg">{answer.text}</span>
                  </div>
                </Button>
              );
            })}
          </div>
        </Card>

        <div className="text-center text-gray-400 text-sm">
          <p>You can only vote once per question. Choose carefully!</p>
        </div>
      </div>
    </div>
  );
}