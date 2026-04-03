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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container py-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🧬</span>
            <h1 className="text-3xl font-bold text-slate-900">Quiz Interativo</h1>
          </div>
          <p className="text-slate-600">Estimulador de Anatomia</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Escolha um Tema
          </h2>
          <p className="text-slate-600">
            Teste seus conhecimentos sobre anatomia com questões desafiadoras
          </p>
        </div>

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Card
              key={theme.id}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-slate-200 hover:border-slate-300"
              onClick={() => handleThemeSelect(theme.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-5xl">{theme.icon}</span>
                  <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {theme.totalQuestions} questões
                  </span>
                </div>
                <CardTitle className="text-xl text-slate-900">
                  {theme.name}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {theme.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white"
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

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg border border-slate-200 p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Como funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100">
                  <span className="text-lg font-bold text-slate-900">1</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Escolha um Tema</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Selecione uma das áreas de anatomia disponíveis
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100">
                  <span className="text-lg font-bold text-slate-900">2</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Responda as Questões</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Teste seus conhecimentos com perguntas desafiadoras
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-slate-100">
                  <span className="text-lg font-bold text-slate-900">3</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Veja Resultados</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Receba feedback detalhado sobre seu desempenho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
