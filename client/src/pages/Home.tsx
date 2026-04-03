import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { themes } from "@/lib/quizData";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleThemeSelect = (themeId: string) => {
    setLocation(`/quiz/${themeId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 shadow-sm">
        <div className="container py-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🧬</span>
            <h1 className="text-3xl font-bold text-white">Quiz Interativo</h1>
          </div>
          <p className="text-slate-300">Teste seus conhecimentos em Anatomia</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Escolha um Tema
          </h2>
          <p className="text-slate-400">
            Teste seus conhecimentos sobre anatomia com questões desafiadoras
          </p>
        </div>

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-slate-700 hover:border-slate-600 bg-slate-800"
              onClick={() => handleThemeSelect(theme.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-5xl">{theme.icon}</span>
                  <span className="inline-block bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1 rounded-full">
                    {theme.totalQuestions} questões
                  </span>
                </div>
                <CardTitle className="text-xl text-white">
                  {theme.name}
                </CardTitle>
                <CardDescription className="text-slate-400">
                  {theme.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleThemeSelect(theme.id);
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
