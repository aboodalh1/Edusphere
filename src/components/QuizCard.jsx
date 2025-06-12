import React from 'react';

const QuizCard = ({ questionData, answerState, onSelectOption, onSubmit }) => {
  console.log(`QuizCard for "${questionData.question}" received state:`, answerState);
  const { question, options, correctAnswerIndex } = questionData;
  const { selectedAnswer, isSubmitted } = answerState;

  return (
    <div className="w-full flex-shrink-0 px-2">
      <div className="bg-primary-light/80 backdrop-blur-sm rounded-2xl p-8 text-white">
        <p className="text-center text-lg mb-8 h-16">{question}</p>
        
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            {options.map((option, optionIndex) => {
              const isSelected = selectedAnswer === optionIndex;
              const isCorrect = correctAnswerIndex === optionIndex;
              
              let optionClass = 'border-white/20 hover:bg-white/10';
              if (isSubmitted) {
                if (isSelected) {
                  optionClass = isCorrect ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20';
                } else if (isCorrect) {
                  optionClass = 'border-green-500 bg-green-500/20';
                }
              } else if (isSelected) {
                 optionClass = 'border-orange-500 bg-orange-500/20';
              }

              let radioClass = 'border-white/50';
              if (isSubmitted) {
                 if (isSelected) {
                    radioClass = isCorrect ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500';
                 } else if (isCorrect) {
                    radioClass = 'bg-green-500 border-green-500';
                 }
              } else if (isSelected) {
                  radioClass = 'bg-orange-500 border-orange-500';
              }
              
              return (
                <div 
                  key={optionIndex} 
                  className={`option-wrapper p-4 border rounded-lg flex items-center gap-4 transition-all duration-300 ${optionClass} ${!isSubmitted ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={() => onSelectOption(optionIndex)}
                >
                  <span className={`custom-radio w-5 h-5 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${radioClass}`}></span>
                  <label className="flex-1 cursor-inherit">
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <button 
              type="submit" 
              className="bg-accent-teal text-primary-dark py-2 px-8 rounded-lg font-bold hover:bg-opacity-90 transition disabled:bg-gray-500 disabled:text-gray-700 disabled:cursor-not-allowed"
              disabled={isSubmitted || selectedAnswer === null}
            >
              تأكيد الإجابة
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizCard; 