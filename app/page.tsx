import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MonitorPlay, Users, Gamepad2, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Who Wants to Be a <span className="text-blue-400">Millionaire</span>?
        </h1>
        <p className="text-lg text-blue-200 mb-10">
          Test your knowledge in this classic trivia game and see if you can win the million-dollar prize!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <Link href="/host" className="w-full">
            <Button 
              className="w-full py-8 text-lg bg-gray-800 hover:bg-gray-700 border border-blue-500 transition-all duration-300"
            >
              <MonitorPlay className="mr-3 h-6 w-6 text-blue-400" />
              Host Game
            </Button>
          </Link>
          
          <Link href="/presentation" className="w-full">
            <Button 
              className="w-full py-8 text-lg bg-blue-800 hover:bg-blue-700 border border-blue-400 transition-all duration-300"
            >
              <Users className="mr-3 h-6 w-6 text-blue-200" />
              Presentation View
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg border border-gray-700">
            <Gamepad2 className="h-10 w-10 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white text-xl font-semibold mb-2">Game Features</h3>
            <p className="text-gray-300">
              15 questions with increasing difficulty and prize money, just like the real show.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg border border-gray-700">
            <Users className="h-10 w-10 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white text-xl font-semibold mb-2">Lifelines</h3>
            <p className="text-gray-300">
              50:50, Phone a Friend, and Ask the Audience options to help when you're stuck.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg border border-gray-700">
            <TrendingUp className="h-10 w-10 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white text-xl font-semibold mb-2">Prize Ladder</h3>
            <p className="text-gray-300">
              Win increasing amounts as you progress, with guaranteed milestones along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}