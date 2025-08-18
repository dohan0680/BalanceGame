import React from 'react';

interface EndScreenProps {
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white p-8 rounded-lg shadow-md">
       <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        오늘 영업은 여기까지
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        모든 선택을 완료했습니다. 당신의 취향을 조금은 알 것 같네요.
      </p>
      <button
        onClick={onRestart}
        className="px-8 py-3 bg-rose-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-rose-600 active:scale-95 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
      >
        다시하기
      </button>
    </div>
  );
};

export default EndScreen;