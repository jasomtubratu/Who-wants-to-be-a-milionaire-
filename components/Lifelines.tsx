"use client";

import { Button } from "@/components/ui/button";
import { 
  Scissors, 
  Phone, 
  Users, 
  HelpCircle,
  BarChart 
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Lifeline } from "@/lib/types";
import { useState, useEffect } from "react";

interface LifelineProps {
  lifelines: Lifeline[];
  onUseFiftyFifty: () => void;
  onUsePhoneFriend: () => void;
  onUseAskAudience: () => void;
  activeLifeline: string | null;
  disabled?: boolean;
  isPresentation?: boolean;
  audienceVotes?: { [key: string]: number };
  getTotalVotes?: () => number;
  getVotePercentage?: (letter: string) => number;
}

export default function Lifelines({
  lifelines,
  onUseFiftyFifty,
  onUsePhoneFriend,
  onUseAskAudience,
  activeLifeline,
  disabled = false,
  isPresentation = false,
  audienceVotes = {},
  getTotalVotes = () => 0,
  getVotePercentage = () => 0
}: LifelineProps) {
  const [audienceVotesDisplay, setAudienceVotesDisplay] = useState<number[]>([]);
  
  useEffect(() => {
    if (activeLifeline === "audience" && isPresentation) {
      // Use real votes if available, otherwise generate random ones
      const totalVotes = getTotalVotes();
      if (totalVotes > 0) {
        const votes = ['A', 'B', 'C', 'D'].map(letter => getVotePercentage(letter));
        setAudienceVotesDisplay(votes);
      } else {
        // Generate random audience votes, with higher probability for correct answer
        const votes = [
          Math.floor(Math.random() * 20) + 10,  // A: 10-30%
          Math.floor(Math.random() * 20) + 40,  // B: 40-60% (typically correct)
          Math.floor(Math.random() * 20) + 5,   // C: 5-25%
          Math.floor(Math.random() * 15) + 5    // D: 5-20%
        ];
        
        // Normalize to 100%
        const total = votes.reduce((sum, v) => sum + v, 0);
        const normalized = votes.map(v => Math.round((v / total) * 100));
        
        // Adjust to make sure it's exactly 100%
        const diff = 100 - normalized.reduce((sum, v) => sum + v, 0);
        normalized[0] += diff;
        
        setAudienceVotesDisplay(normalized);
      }
    } else {
      setAudienceVotesDisplay([]);
    }
  }, [activeLifeline, audienceVotes, getTotalVotes, getVotePercentage, isPresentation]);

  const renderLifelineIcon = (id: string, used: boolean) => {
    const commonClass = cn(
      "h-6 w-6",
      used && "opacity-50"
    );
    
    switch (id) {
      case "fifty":
        return <Scissors className={commonClass} />;
      case "phone":
        return <Phone className={commonClass} />;
      case "audience":
        return <Users className={commonClass} />;
      default:
        return <HelpCircle className={commonClass} />;
    }
  };
  
  const getLifelineAction = (id: string) => {
    switch (id) {
      case "fifty":
        return onUseFiftyFifty;
      case "phone":
        return onUsePhoneFriend;
      case "audience":
        return onUseAskAudience;
      default:
        return () => {};
    }
  };

  const renderAudienceResults = () => {
    if (activeLifeline !== "audience" || audienceVotesDisplay.length === 0) return null;
    
    const letters = ["A", "B", "C", "D"];
    
    return (
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h3 className="text-white text-center mb-3 font-semibold">Audience Results</h3>
        <div className="space-y-3">
          {audienceVotesDisplay.map((vote, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="text-white w-6">{letters[idx]}</span>
              <div className="flex-1 bg-gray-700 h-5 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${vote}%` }}
                />
              </div>
              <span className="text-white w-10 text-right">{vote}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const renderPhoneFriend = () => {
    if (activeLifeline !== "phone") return null;
    
    return (
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <Phone className="h-5 w-5 text-blue-400 mr-2" />
          <h3 className="text-white font-semibold">Your friend says:</h3>
        </div>
        <p className="text-white italic">
          "I'm not 100% sure, but I think the answer is B. It sounds the most reasonable to me."
        </p>
      </div>
    );
  };

  return (
    <div className={cn("w-full", isPresentation && "mb-4")}>
      <div className="flex justify-center space-x-4">
        {lifelines.map((lifeline) => (
          <TooltipProvider key={lifeline.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  disabled={disabled || lifeline.used || isPresentation}
                  onClick={getLifelineAction(lifeline.id)}
                  className={cn(
                    "h-12 w-12 border-2",
                    lifeline.used 
                      ? "border-gray-700 bg-gray-800 opacity-50" 
                      : "border-blue-500 bg-gray-800 hover:bg-gray-700",
                    activeLifeline === lifeline.id && "ring-2 ring-yellow-500 animate-pulse"
                  )}
                >
                  {renderLifelineIcon(lifeline.id, lifeline.used)}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{lifeline.name} - {lifeline.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      
      {isPresentation && renderAudienceResults()}
      {isPresentation && renderPhoneFriend()}
    </div>
  );
}