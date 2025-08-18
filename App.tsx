import React, { useState, useCallback } from 'react';
import { GameState, Question } from './types';
import { QUESTIONS } from './constants';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const shuffleArray = (array: Question[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const handleStart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setShuffledQuestions(shuffleArray(QUESTIONS));
    setGameState(GameState.Playing);
  }, []);

  const handleAnswer = useCallback(() => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setGameState(GameState.End);
    }
  }, [currentQuestionIndex]);

  const handleRestart = useCallback(() => {
    setGameState(GameState.Start);
  }, []);

  const renderGameContent = () => {
    switch (gameState) {
      case GameState.Playing:
        return (
          <GameScreen
            question={shuffledQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
          />
        );
      case GameState.End:
        return <EndScreen onRestart={handleRestart} />;
      case GameState.Start:
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="text-gray-800 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-3xl mx-auto">
        {renderGameContent()}
      </div>
    </div>
  );
};

export default App;