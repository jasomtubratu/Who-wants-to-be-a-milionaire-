"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, BookOpen } from "lucide-react";

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  explanation: string;
  questionText: string;
}

export default function ExplanationModal({ isOpen, onClose, explanation, questionText }: ExplanationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <Card className="bg-gray-800 border-gray-700 max-w-2xl w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-xl font-semibold text-white">Explanation</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5 text-white" />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-blue-400 font-medium mb-2">Question:</h3>
            <p className="text-white">{questionText}</p>
          </div>
          
          <div>
            <h3 className="text-green-400 font-medium mb-2">Explanation:</h3>
            <p className="text-white leading-relaxed">{explanation}</p>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
            Got it!
          </Button>
        </div>
      </Card>
    </div>
  );
}