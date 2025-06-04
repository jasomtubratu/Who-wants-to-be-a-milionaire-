"use client";

import { useState, useEffect } from "react";
import { Question } from "@/lib/types";
import { cn } from "@/lib/utils";

interface QuestionDisplayProps {
  question: Question;
  revealed: boolean;
  currentValue: number;
  isHost?: boolean;
}

export default function QuestionDisplay({ 
  question, 
  revealed, 
  currentValue,
  isHost = false
}: QuestionDisplayProps) {
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    if (revealed) {
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [revealed]);
  
  if (!revealed && !isHost) {
    return (
      <div className="w-full bg-gray-800 bg-opacity-60 rounded-lg p-8 flex items-center justify-center mb-6 min-h-[120px]">
        <div className="text-center animate-pulse">
          <p className="text-blue-400 text-lg font-semibold">Next Question</p>
          <p className="text-white text-3xl font-bold mt-2">
            ${currentValue.toLocaleString()}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "w-full bg-gray-800 bg-opacity-80 rounded-lg p-6 md:p-8 mb-6 shadow-lg border border-gray-700 transition-all duration-500",
      animateIn ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
    )}>
      <div className="flex justify-between items-center mb-3">
        <span className="text-blue-400 text-sm font-semibold">{question.category}</span>
        <span className="text-green-400 text-sm font-semibold">${question.value.toLocaleString()}</span>
      </div>
      <h2 className="text-white text-xl md:text-2xl font-semibold text-center">
        {question.text}
      </h2>
    </div>
  );
}