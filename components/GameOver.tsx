"use client";

import { Button } from "@/components/ui/button";
import { Home, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";

interface GameOverProps {
  amount: number;
  onRestart: () => void;
}

export default function GameOver({ amount, onRestart }: GameOverProps) {
  const router = useRouter();
  
  const handleHome = () => {
    router.push('/');
  };
  
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-10">
      <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full mx-4 border border-blue-600 shadow-lg shadow-blue-500/20">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Game Over</h2>
        
        {amount === 1000000 ? (
          <div className="text-center mb-8 space-y-3">
            <p className="text-yellow-400 text-xl font-semibold">Congratulations!</p>
            <p className="text-white text-4xl font-bold animate-pulse">
              You won $1,000,000!
            </p>
            <p className="text-blue-400">You've reached the top of the money ladder!</p>
          </div>
        ) : (
          <div className="text-center mb-8 space-y-3">
            <p className="text-white text-xl">You won</p>
            <p className="text-green-400 text-4xl font-bold">${amount.toLocaleString()}</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={onRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Play Again
          </Button>
          
          <Button
            variant="outline"
            onClick={handleHome}
            className="border-blue-500 text-blue-400 hover:bg-blue-900 hover:text-white"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}