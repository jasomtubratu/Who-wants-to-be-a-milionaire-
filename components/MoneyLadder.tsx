"use client";

import { moneyLadder } from "@/lib/questions";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/lib/gameStore";

interface MoneyLadderProps {
  currentQuestionIndex: number;
}

export default function MoneyLadder({ currentQuestionIndex }: MoneyLadderProps) {
  const questionResults = useGameStore(state => state.questionResults);

  const getQuestionResult = (questionIndex: number) => {
    return questionResults.find(result => result.questionIndex === questionIndex);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-3 md:p-4 h-full overflow-y-auto max-h-[500px]">
      <h3 className="text-white text-lg font-semibold mb-3 text-center">Prize Ladder</h3>
      <div className="space-y-1.5">
        {moneyLadder.slice().reverse().map((amount, idx) => {
          const reversedIndex = moneyLadder.length - 1 - idx;
          const isCurrent = reversedIndex === currentQuestionIndex;
          const isPast = reversedIndex < currentQuestionIndex;
          const isMilestone = amount === 1000 || amount === 32000 || amount === 1000000;
          const result = getQuestionResult(reversedIndex);

          let backgroundClass = "";
          if (result) {
            backgroundClass = result.correct ? "bg-green-700" : "bg-red-700";
          } else if (isCurrent) {
            backgroundClass = "bg-blue-700";
          }

          return (
            <div
              key={amount}
              className={cn(
                "p-2 rounded flex justify-between items-center transition-colors",
                backgroundClass,
                isCurrent && "font-bold",
                isPast && !result && "text-gray-400",
                !isCurrent && !isPast && !result && "text-white",
                isMilestone && !isCurrent && !result && "border-l-4 border-yellow-500 pl-3"
              )}
            >
              <span className="text-xs md:text-sm">{moneyLadder.length - idx}</span>
              <span className="text-sm md:text-base">${amount.toLocaleString('en-US')}</span>
              {result && (
                <span className="text-xs ml-2">
                  {result.correct ? "✓" : "✗"}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}