import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white p-8 rounded-lg shadow-md">
      <img src="https://i.ytimg.com/vi/VxqYOb-a-q8/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB4_CJvEfUHBJiTl-No9bjeHjdRjw" alt="십이층 영업중 썸네일" className="w-full max-w-md rounded-lg shadow-md mb-8" />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        십이층 밸런스 게임
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        다양한 딜레마 질문에 답하며 당신의 선택을 알아보세요.
      </p>
      <button
        onClick={onStart}
        className="px-8 py-3 bg-rose-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-rose-600 active:scale-95 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
      >
        게임 시작
      </button>
    </div>
  );
};

export default StartScreen;