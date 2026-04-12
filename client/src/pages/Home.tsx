import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { quizzes } from "@/lib/quizData";
import { useLocation } from "wouter";
import { useState } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"Anatomia" | "Fisiologia">("Anatomia");

  const handleThemeSelect = (themeId: string) => {
    setLocation(`/quiz/${themeId}`);
  };

  const filteredQuizzes = quizzes.filter(
    (quiz) => quiz.category === activeTab
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="bg-slate-800 border-b border-slate-700 shadow-sm">
        <div className="container py-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🧬</span>
            <h1 className="text-3xl font-bold text-white">Quiz Interativo</h1>
          </div>
          <p className="text-slate-300">Teste seus conhecimentos em Anatomia e Fisiologia</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Escolha uma Categoria
          </h2>
          
          <div className="flex gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("Anatomia")}
              className={`px-8 py-6 text-lg font-bold transition-all ${
                activeTab === "Anatomia"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-400 border-2 border-slate-700"
              }`}
            >
              🦴 Anatomia
            </Button>
            <Button
              onClick={() => setActiveTab("Fisiologia")}
              className={`px-8 py-6 text-lg font-bold transition-all ${
                activeTab === "Fisiologia"
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-900/20"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-400 border-2 border-slate-700"
              }`}
            >
              ⚡ Fisiologia
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <Card
              key={quiz.id}
              className={`hover:shadow-lg transition-all duration-300 cursor-pointer border-2 bg-slate-800 ${
                activeTab === "Anatomia" ? "border-slate-700 hover:border-blue-500/50" : "border-slate-700 hover:border-purple-500/50"
              }`}
              onClick={() => handleThemeSelect(quiz.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-5xl">{quiz.emoji}</span>
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                    activeTab === "Anatomia" ? "bg-blue-900/30 text-blue-300" : "bg-purple-900/30 text-purple-300"
                  }`}>
                    {quiz.questions.length} questões
                  </span>
                </div>
                <CardTitle className="text-xl text-white">
                  {quiz.title}
                </CardTitle>
                <CardDescription className="text-slate-400">
                  {quiz.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className={`w-full font-bold ${
                    activeTab === "Anatomia" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleThemeSelect(quiz.id);
                  }}
                >
                  Começar Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
