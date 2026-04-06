import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { quizzes, Question } from "@/lib/quizData";
import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";

export default function Quiz() {
  const [match, params] = useRoute("/quiz/:themeId");
  const [, setLocation] = useLocation();
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [expandedExplanation, setExpandedExplanation] = useState<number | null>(null);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const themeId = params?.themeId as string;
  const quiz = quizzes.find((q) => q.id === themeId);

  // Resetar estado ao mudar de tema
  useEffect(() => {
    setAnswers([]);
    setShowResults(false);
    setExpandedExplanation(null);
    setSelectedBlockId(null);
  }, [themeId]);

  if (!match || !quiz) {
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

  // Determinar quais questões mostrar
  const hasBlocks = quiz.blocks && quiz.blocks.length > 0;
  const selectedBlock = hasBlocks ? quiz.blocks?.find(b => b.id === selectedBlockId) : null;
  const questions = hasBlocks ? (selectedBlock?.questions || []) : quiz.questions;

  // Inicializar respostas quando o bloco é selecionado ou se não houver blocos
  useEffect(() => {
    if (questions.length > 0 && (answers.length !== questions.length)) {
      setAnswers(new Array(questions.length).fill(null));
    }
  }, [questions, answers.length]);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleRestart = () => {
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setExpandedExplanation(null);
  };

  const correctCount = answers.filter(
    (answer, index) => answer === questions[index]?.correctAnswer
  ).length;

  const percentage = Math.round((correctCount / questions.length) * 100);
  const allAnswered = answers.length > 0 && answers.every((answer) => answer !== null);
  const answeredCount = answers.filter((answer) => answer !== null).length;

  // Mostrar resultados automaticamente quando todas as questões forem respondidas
  if (allAnswered && !showResults && answers.length > 0) {
    setShowResults(true);
  }

  // Tela de seleção de bloco
  if (hasBlocks && !selectedBlockId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center">
        <Card className="w-full max-w-md border-2 border-slate-700 bg-slate-800">
          <CardHeader className="text-center">
            <div className="text-4xl mb-4">{quiz.emoji}</div>
            <CardTitle className="text-2xl text-white">{quiz.title}</CardTitle>
            <CardDescription className="text-slate-400">
              Escolha um bloco de questões para começar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {quiz.blocks?.map((block) => (
              <Button
                key={block.id}
                className="w-full h-16 text-lg bg-slate-700 hover:bg-slate-600 border-slate-600"
                onClick={() => setSelectedBlockId(block.id)}
              >
                {block.title} ({block.questions.length} questões)
              </Button>
            ))}
            <Button
              variant="ghost"
              className="w-full text-slate-400 hover:text-white"
              onClick={() => setLocation("/")}
            >
              Voltar para o Início
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 shadow-sm sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="gap-2 text-white hover:bg-slate-700"
              onClick={() => hasBlocks ? setSelectedBlockId(null) : setLocation("/")}
            >
              <ChevronLeft className="w-4 h-4" />
              {hasBlocks ? "Mudar Bloco" : "Voltar"}
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{quiz.emoji}</span>
              <div>
                <h1 className="text-xl font-bold text-white">
                  {quiz.title} {selectedBlock ? `- ${selectedBlock.title}` : ""}
                </h1>
                <p className="text-sm text-slate-400">{quiz.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Progresso</div>
              <div className="text-xl font-bold text-white">
                {answeredCount}/{questions.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        {!showResults ? (
          <div className="space-y-6">
            {/* Questões */}
            {questions.map((question: Question, qIndex: number) => {
              const isAnswered = answers[qIndex] !== null;
              const isCorrect = answers[qIndex] === question.correctAnswer;
              const showExplanation = expandedExplanation === qIndex;

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
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {question.options.map((option: string, oIndex: number) => {
                        const isSelected = answers[qIndex] === oIndex;
                        const isCorrectOption = oIndex === question.correctAnswer;
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

                    {/* Botão Ver Explicação (mostrado se respondida) */}
                    {isAnswered && (
                      <div className="mt-4">
                        <button
                          onClick={() =>
                            setExpandedExplanation(
                              showExplanation ? null : qIndex
                            )
                          }
                          className="text-sm text-blue-400 hover:text-blue-300 underline"
                        >
                          {showExplanation ? "Ocultar" : "Ver"} explicação
                        </button>
                      </div>
                    )}

                    {/* Explicação (mostrada se clicada) */}
                    {showExplanation && (
                      <div
                        className={`mt-4 p-3 rounded-lg ${
                          isCorrect
                            ? "bg-green-500/10 border border-green-500/30"
                            : "bg-red-500/10 border border-red-500/30"
                        }`}
                      >
                        <p
                          className={`text-sm ${
                            isCorrect
                              ? "text-green-300"
                              : "text-red-300"
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
          </div>
        ) : (
          /* Resultados */
          <Card className="max-w-2xl mx-auto border-2 border-slate-700 bg-slate-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2 text-white">
                Resultados
              </CardTitle>
              <CardDescription className="text-slate-400">
                {quiz.title} {selectedBlock ? `- ${selectedBlock.title}` : ""}
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
                  onClick={() => hasBlocks ? setSelectedBlockId(null) : setLocation("/")}
                >
                  {hasBlocks ? "Mudar Bloco" : "Voltar para Home"}
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
