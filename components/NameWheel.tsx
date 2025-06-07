"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { names } from "@/lib/names";

interface NameWheelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedName?: string;
  isSpinning?: boolean;
}

export default function NameWheel({ isOpen, onClose, selectedName, isSpinning = false }: NameWheelProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (isSpinning && !spinning) {
      setSpinning(true);
      
      // Spin animation
      let spinCount = 0;
      const maxSpins = 30 + Math.floor(Math.random() * 20); // 30-50 spins
      
      const spinInterval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % names.length);
        spinCount++;
        
        if (spinCount >= maxSpins) {
          clearInterval(spinInterval);
          setSpinning(false);
        }
      }, 100 - (spinCount * 2)); // Gradually slow down
      
      return () => clearInterval(spinInterval);
    }
  }, [isSpinning, spinning]);

  useEffect(() => {
    if (selectedName && !isSpinning) {
      const nameIndex = names.findIndex(name => name === selectedName);
      if (nameIndex !== -1) {
        setCurrentIndex(nameIndex);
      }
    }
  }, [selectedName, isSpinning]);

  if (!isOpen) return null;

  const displayNames = [];
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex + i + names.length) % names.length;
    displayNames.push({
      name: names[index],
      position: i,
      isCenter: i === 0
    });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <Card className="bg-gray-800 border-gray-700 p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Name Picker</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5 text-white" />
          </Button>
        </div>
        
        <div className="relative h-64 overflow-hidden bg-gray-900 rounded-lg border-2 border-blue-500">
          {/* Wheel container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {displayNames.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className={`
                  absolute transition-all duration-100 text-center px-4 py-2 rounded
                  ${item.isCenter 
                    ? 'text-2xl font-bold text-yellow-400 bg-blue-600 z-10 scale-110' 
                    : 'text-lg text-gray-300'
                  }
                `}
                style={{
                  transform: `translateY(${item.position * 50}px)`,
                  opacity: Math.max(0.3, 1 - Math.abs(item.position) * 0.3)
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
          
          {/* Center indicator */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-yellow-400 z-20"></div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-yellow-400 border-t-4 border-t-transparent border-b-4 border-b-transparent z-20"></div>
        </div>
        
        {selectedName && !isSpinning && (
          <div className="mt-6 text-center">
            <p className="text-green-400 text-lg font-semibold">Selected:</p>
            <p className="text-white text-2xl font-bold">{selectedName}</p>
          </div>
        )}
        
        {isSpinning && (
          <div className="mt-6 text-center">
            <p className="text-blue-400 text-lg font-semibold animate-pulse">Spinning...</p>
          </div>
        )}
      </Card>
    </div>
  );
}