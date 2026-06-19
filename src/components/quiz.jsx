import { useState, useEffect } from "react";

export default function Quiz({ questions, initialState, onSave, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(initialState.index);
  const [score, setScore] = useState(initialState.score);

  // Timer
  const [seconds, setSeconds] = useState(initialState.time);

  // timer logic
  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => setSeconds((s) => s - 1), 1000);
      return () => clearInterval(interval);
    } else {
      onFinish(score, 0, currentIndex);
    }
  }, [seconds, score, currentIndex, onFinish]);

  // autosave logic
  useEffect(() => {
    onSave(currentIndex, score, seconds, currentIndex);
  }, [currentIndex, score, seconds, onSave]);

  const handleAnswer = (selected) => {
    const isCorrect = selected === questions[currentIndex].correct_answer;
    const newScore = isCorrect ? score + 1 : score;

    if (currentIndex + 1 < questions.length) {
      setScore(newScore);
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(newScore, seconds, currentIndex + 1);
    }
  };

  const currentQ = questions[currentIndex];
  const options = [
    ...currentQ.incorrect_answers,
    currentQ.correct_answer,
  ].sort();

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl min-h-96 flex flex-col gap-6 rounded-lg bg-[#171717] p-8 text-white">
        <div className="flex justify-between items-center border-b border-neutral-700 pb-4 text-sm text-neutral-400">
          <span>
            Soal {currentIndex + 1} dari {questions.length}
          </span>

          <span
            className={`px-3 py-1 rounded-md font-mono text-neutral-200 ${
              seconds <= 60 ? "bg-red-900" : "bg-neutral-800"
            }`}
          >
            {mins}m {secs}s
          </span>
        </div>

        {/* question */}
        <h2
          className="text-xl font-medium leading-relaxed"
          dangerouslySetInnerHTML={{ __html: currentQ.question }}
        />

        {/* answer */}
        <div className="grid gap-4 mt-auto">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className="text-left w-full p-4 rounded-md border border-neutral-700 bg-transparent hover:bg-neutral-800 hover:border-neutral-500 transition-all text-neutral-200"
              dangerouslySetInnerHTML={{ __html: opt }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
