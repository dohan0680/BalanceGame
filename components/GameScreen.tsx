import React from 'react';
import { Question } from '../types';

interface GameScreenProps {
  question: Question;
  onAnswer: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const GameScreen: React.FC<GameScreenProps> = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full bg-white p-6 md:p-10 rounded-lg shadow-md">
      <div className="w-full">
        <div className="mb-6 text-sm font-semibold text-gray-500 tracking-wider">
          QUESTION {questionNumber} / {totalQuestions}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-10 min-h-[100px] flex items-center justify-center">
          {question.question}
        </h2>
      </div>

      <div className="w-full flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0 items-stretch">
        <button
          onClick={onAnswer}
          className="w-full md:flex-1 p-6 border border-gray-300 text-gray-700 rounded-lg text-lg font-semibold hover:border-rose-500 hover:text-rose-500 hover:bg-rose-50 transform transition-colors duration-200"
        >
          {question.optionA}
        </button>
        <div className="flex items-center justify-center my-2 md:my-0 text-gray-400 font-bold text-xl">
            VS
        </div>
        <button
          onClick={onAnswer}
          className="w-full md:flex-1 p-6 border border-gray-300 text-gray-700 rounded-lg text-lg font-semibold hover:border-rose-500 hover:text-rose-500 hover:bg-rose-50 transform transition-colors duration-200"
        >
          {question.optionB}
        </button>
      </div>
    </div>
  );
};

export default GameScreen;