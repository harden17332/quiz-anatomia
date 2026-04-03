import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { quizzes, themes } from "@/lib/quizData";
import { CheckCircle2, ChevronLeft, XCircle } from "lucide-react";
import { useState } from "react";
import { useLocation, useRoute } from "wouter";

export default function Quiz() {
  const [match, params] = useRoute("/quiz/:themeId");
  const [, setLocation] = useLocation();
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);

  const themeId = params?.themeId as string;
  const theme = themes.find((t) => t.id === themeId);
  const questions = quizzes[themeId] || [];

  if (!match || !theme) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Tema não encontrado
          </h1>
          <Button onClick={() => setLocation("/")} variant="default">
            Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  // Inicializar respostas
  if (answers.length === 0) {
    setAnswers(new Array(questions.length).fill(null));
  }

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleFinish = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  };

  const correctCount = answers.filter(
    (answer, index) => answer === questions[index].correct
  ).length;

  const percentage = Math.round((correctCount / questions.length) * 100);
  const allAnswered = answers.every((answer) => answer !== null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 shadow-sm sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="gap-2 text-white hover:bg-slate-700"
              onClick={() => setLocation("/")}
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{theme.icon}</span>
              <div>
                <h1 className="text-xl font-bold text-white">{theme.name}</h1>
                <p className="text-sm text-slate-400">{theme.description}</p>
              </div>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        {!showResults ? (
          <div className="space-y-6">
            {/* Questões */}
            {questions.map((question, qIndex) => {
              const isAnswered = answers[qIndex] !== null;
              const isCorrect = answers[qIndex] === question.correct;

              return (
                <Card
                  key={question.id}
                  className="border-2 border-slate-700 bg-slate-800"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-white mb-2">
                          Questão {qIndex + 1}
                        </CardTitle>
                        <CardDescription className="text-slate-300 text-base">
                          {question.question}
                        </CardDescription>
                      </div>
                      {isAnswered && (
                        <div className="ml-4">
                          {isCorrect ? (
                            <div className="flex flex-col items-center gap-1">
                              <CheckCircle2 className="w-8 h-8 text-green-500" />
                              <span className="text-xs text-green-500 font-semibold">
                                Correto
                              </span>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-1">
                              <XCircle className="w-8 h-8 text-red-500" />
                              <span className="text-xs text-red-500 font-semibold">
                                Errado
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {question.options.map((option, oIndex) => {
                        const isSelected = answers[qIndex] === oIndex;
                        const isCorrectOption = oIndex === question.correct;
                        const shouldHighlightCorrect =
                          isAnswered && isCorrectOption;
                        const shouldHighlightWrong =
                          isAnswered && isSelected && !isCorrect;

                        return (
                          <button
                            key={oIndex}
                            onClick={() => handleAnswer(qIndex, oIndex)}
                            disabled={isAnswered}
                            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                              shouldHighlightCorrect
                                ? "border-green-500 bg-green-500/10"
                                : shouldHighlightWrong
                                  ? "border-red-500 bg-red-500/10"
                                  : isSelected
                                    ? "border-blue-600 bg-slate-700"
                                    : "border-slate-700 hover:border-slate-600 bg-slate-800"
                            } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                  shouldHighlightCorrect
                                    ? "border-green-500 bg-green-500"
                                    : shouldHighlightWrong
                                      ? "border-red-500 bg-red-500"
                                      : isSelected
                                        ? "border-blue-600 bg-blue-600"
                                        : "border-slate-600"
                                }`}
                              >
                                {(shouldHighlightCorrect ||
                                  shouldHighlightWrong ||
                                  isSelected) && (
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                )}
                              </div>
                              <span
                                className={`font-medium ${
                                  shouldHighlightCorrect
                                    ? "text-green-400"
                                    : shouldHighlightWrong
                                      ? "text-red-400"
                                      : "text-white"
                                }`}
                              >
                                {option}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explicação (mostrada se respondida) */}
                    {isAnswered && (
                      <div
                        className={`mt-4 p-3 rounded-lg ${
                          isCorrect
                            ? "bg-green-500/10 border border-green-500/30"
                            : "bg-blue-500/10 border border-blue-500/30"
                        }`}
                      >
                        <p
                          className={`text-sm ${
                            isCorrect
                              ? "text-green-300"
                              : "text-blue-300"
                          }`}
                        >
                          <span className="font-semibold">Explicação:</span>{" "}
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}

            {/* Botão Finalizar */}
            <div className="flex gap-3 sticky bottom-4">
              <Button
                variant="outline"
                className="flex-1 border-slate-600 text-white hover:bg-slate-700"
                onClick={() => setLocation("/")}
              >
                Cancelar
              </Button>
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={handleFinish}
                disabled={!allAnswered}
              >
                {allAnswered ? "Ver Resultados" : "Responda todas as questões"}
              </Button>
            </div>
          </div>
        ) : (
          /* Resultados */
          <Card className="max-w-2xl mx-auto border-2 border-slate-700 bg-slate-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2 text-white">
                Resultados
              </CardTitle>
              <CardDescription className="text-slate-400">
                {theme.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Score Display */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 mb-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white">
                      {percentage}%
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {correctCount}/{questions.length}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-slate-300">
                  Você acertou {correctCount} de {questions.length} questões
                </p>
              </div>

              {/* Performance Message */}
              <div className="p-4 rounded-lg bg-slate-700 border border-slate-600">
                {percentage >= 80 && (
                  <p className="text-white font-semibold">
                    🎉 Excelente desempenho! Você domina este tema.
                  </p>
                )}
                {percentage >= 60 && percentage < 80 && (
                  <p className="text-white font-semibold">
                    👏 Bom trabalho! Continue estudando para melhorar.
                  </p>
                )}
                {percentage < 60 && (
                  <p className="text-white font-semibold">
                    💪 Continue praticando! Você está no caminho certo.
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 border-slate-600 text-white hover:bg-slate-700"
                  onClick={() => setLocation("/")}
                >
                  Voltar para Home
                </Button>
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={handleRestart}
                >
                  Refazer Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
