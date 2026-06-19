import { useState } from "react";
import Login from "./components/login";
import Quiz from "./components/quiz";
import Result from "./components/Result";

export default function App() {
  const [initialData] = useState(() => {
    const saved = localStorage.getItem("quiz_persistence");
    return saved ? JSON.parse(saved) : null;
  });

  const [user, setUser] = useState(
    initialData ? { name: initialData.name } : null,
  );
  const [questions, setQuestions] = useState(
    initialData ? initialData.questions : [],
  );

  const [quizState, setQuizState] = useState(
    initialData
      ? {
          index: initialData.index,
          score: initialData.score,
          time: initialData.time,
          answered: initialData.answered || 0,
        }
      : null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const startQuiz = async (formData) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple",
      );
      const data = await res.json();

      setUser({ name: formData.name });
      setQuestions(data.results);

      setQuizState({ index: 0, score: 0, time: 600, answered: 0 });
      setIsFinished(false);
    } catch (error) {
      console.error("Gagal mengambil soal:", error);
      alert("Gagal mengambil soal kuis. Pastikan koneksi internet lancar.");
    } finally {
      setIsLoading(false);
    }
  };

  const saveProgress = (index, score, time, answered) => {
    const dataToSave = {
      name: user.name,
      questions,
      index,
      score,
      time,
      answered,
    };
    localStorage.setItem("quiz_persistence", JSON.stringify(dataToSave));
  };

  const finishQuiz = (finalScore, finalTime, answeredTotal) => {
    setQuizState((prev) => ({
      ...prev,
      score: finalScore,
      time: finalTime,
      answered: answeredTotal,
    }));
    setIsFinished(true);
    localStorage.removeItem("quiz_persistence");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#171717] text-white">
        <h1 className="text-xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="font-sans bg-[#121212] min-h-screen">
      {!user && <Login onStart={startQuiz} />}

      {user && questions.length > 0 && !isFinished && (
        <Quiz
          questions={questions}
          initialState={quizState}
          onSave={saveProgress}
          onFinish={finishQuiz}
        />
      )}

      {isFinished && (
        <Result
          name={user.name}
          score={quizState.score}
          total={questions.length}
          time={quizState.time}
          answered={quizState.answered}
          onRestart={() => {
            setUser(null);
            setQuestions([]);
            setQuizState(null);
            setIsFinished(false);
          }}
        />
      )}
    </div>
  );
}
