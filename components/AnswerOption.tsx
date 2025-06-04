"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface AnswerOptionProps {
  letter: string;
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isEliminated: boolean;
  correctRevealed: boolean;
  onClick: () => void;
  disabled: boolean;
}

export default function AnswerOption({
  letter,
  text,
  isSelected,
  isCorrect,
  isEliminated,
  correctRevealed,
  onClick,
  disabled
}: AnswerOptionProps) {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, []);
  
  const getBackgroundColor = () => {
    if (isEliminated) return "bg-gray-800 opacity-50";
    if (correctRevealed) {
      if (isCorrect) return "bg-green-700 animate-pulse";
      if (isSelected) return "bg-red-700";
      return "bg-gray-800";
    }
    if (isSelected) return "bg-blue-600";
    return "bg-gray-800 hover:bg-gray-700";
  };

  if (isEliminated) {
    return <div className="opacity-0 h-0 md:h-0 overflow-hidden transition-all"></div>;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || isEliminated}
      className={cn(
        "w-full p-3 md:p-4 mb-3 rounded-lg flex items-center transition-all transform",
        getBackgroundColor(),
        animated ? "translate-x-0 opacity-100" : "translate-x-[-20px] opacity-0",
        "border border-gray-600 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      )}
      style={{
        transitionDelay: `${letter.charCodeAt(0) - 65}00ms`
      }}
    >
      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-700 mr-3 border border-gray-500">
        <span className="text-white font-semibold">{letter}</span>
      </div>
      <span className="text-white text-lg font-medium">{text}</span>
    </button>
  );
}