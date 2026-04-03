import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { quizzes, themes } from "@/lib/quizData";
import { CheckCircle2, ChevronLeft, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useRoute } from "wouter";

interface QuizState {
  currentQuestion: number;
  answers: (number | null)[];
  showResults: boolean;
}

export default function Quiz() {
  const [match, params] = useRoute("/quiz/:themeId");
  const [, setLocation] = useLocation();
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    showResults: false,
  });

  const themeId = params?.themeId as string;
  const theme = themes.find((t) => t.id === themeId);
  const questions = quizzes[themeId] || [];

  useEffect(() => {
    if (questions.length > 0 && quizState.answers.length === 0) {
      setQuizState((prev) => ({
        ...prev,
        answers: new Array(questions.length).fill(null),
      }));
    }
  }, [questions, quizState.answers.length]);

  if (!match || !theme) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Tema não encontrado
          </h1>
          <Button onClick={() => setLocation("/")} variant="default">
            Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  const handleAnswer = (optionIndex: number) => {
    if (!quizState.showResults) {
      const newAnswers = [...quizState.answers];
      newAnswers[quizState.currentQuestion] = optionIndex;
      setQuizState((prev) => ({
        ...prev,
        answers: newAnswers,
      }));
    }
  };

  const handleNext = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
    } else {
      setQuizState((prev) => ({
        ...prev,
        showResults: true,
      }));
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1,
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestion: 0,
      answers: new Array(questions.length).fill(null),
      showResults: false,
    });
  };

  const correctCount = quizState.answers.filter(
    (answer, index) => answer === questions[index].correct
  ).length;

  const percentage = Math.round((correctCount / questions.length) * 100);

  if (quizState.showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 shadow-sm">
          <div className="container py-4">
            <Button
              variant="ghost"
              className="gap-2"
              onClick={() => setLocation("/")}
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="container py-12">
          <Card className="max-w-2xl mx-auto border-2 border-slate-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Resultados</CardTitle>
              <CardDescription>{theme.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Score Display */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 mb-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-slate-900">
                      {percentage}%
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      {correctCount}/{questions.length}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-slate-600">
                  Você acertou {correctCount} de {questions.length} questões
                </p>
              </div>

              {/* Performance Message */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                {percentage >= 80 && (
                  <p className="text-slate-900 font-semibold">
                    🎉 Excelente desempenho! Você domina este tema.
                  </p>
                )}
                {percentage >= 60 && percentage < 80 && (
                  <p className="text-slate-900 font-semibold">
                    👏 Bom trabalho! Continue estudando para melhorar.
                  </p>
                )}
                {percentage < 60 && (
                  <p className="text-slate-900 font-semibold">
                    💪 Continue praticando! Você está no caminho certo.
                  </p>
                )}
              </div>

              {/* Detailed Results */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Revisão das Respostas
                </h3>
                {questions.map((question, index) => {
                  const isCorrect = quizState.answers[index] === question.correct;
                  return (
                    <div
                      key={question.id}
                      className="p-3 rounded-lg border border-slate-200 bg-white"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">
                            Q{index + 1}: {question.question}
                          </p>
                          <p className="text-xs text-slate-600 mt-1">
                            Sua resposta:{" "}
                            <span
                              className={
                                isCorrect
                                  ? "text-green-600 font-semibold"
                                  : "text-red-600 font-semibold"
                              }
                            >
                              {question.options[quizState.answers[index] || 0]}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-xs text-slate-600 mt-1">
                              Resposta correta:{" "}
                              <span className="text-green-600 font-semibold">
                                {question.options[question.correct]}
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setLocation("/")}
                >
                  Voltar para Home
                </Button>
                <Button className="flex-1 bg-slate-900 hover:bg-slate-800" onClick={handleRestart}>
                  Refazer Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[quizState.currentQuestion];
  const currentAnswer = quizState.answers[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              className="gap-2"
              onClick={() => setLocation("/")}
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div className="text-sm font-medium text-slate-600">
              Questão {quizState.currentQuestion + 1} de {questions.length}
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-slate-900 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((quizState.currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <Card className="max-w-2xl mx-auto border-2 border-slate-200">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{theme.icon}</span>
              <div>
                <CardTitle className="text-xl">{theme.name}</CardTitle>
                <CardDescription>{theme.description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Question */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      currentAnswer === index
                        ? "border-slate-900 bg-slate-50"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          currentAnswer === index
                            ? "border-slate-900 bg-slate-900"
                            : "border-slate-300"
                        }`}
                      >
                        {currentAnswer === index && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-slate-900 font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-6 border-t border-slate-200">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={quizState.currentQuestion === 0}
                className="flex-1"
              >
                Anterior
              </Button>
              <Button
                className="flex-1 bg-slate-900 hover:bg-slate-800"
                onClick={handleNext}
                disabled={currentAnswer === null}
              >
                {quizState.currentQuestion === questions.length - 1
                  ? "Finalizar"
                  : "Próxima"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
