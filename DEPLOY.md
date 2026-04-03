# Guia de Deploy - Quiz de Anatomia

Este guia explica como fazer o deploy permanente do seu Quiz de Anatomia na **Vercel** para obter um link fixo que nunca adormece.

## Por que Vercel?

✅ **Link permanente** - Seu site terá um domínio único que nunca muda
✅ **Sempre online** - Sem adormecimento, sem timeout
✅ **Atualização automática** - Quando você fizer push no GitHub, o site atualiza automaticamente
✅ **Gratuito** - Plano gratuito é mais que suficiente para este projeto
✅ **Fácil de usar** - Integração direta com GitHub

## Passo 1: Criar uma Conta GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "Sign up" e crie uma conta
3. Confirme seu email

## Passo 2: Criar um Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `quiz-anatomia`
3. Descrição: "Quiz Interativo de Anatomia com 99 questões"
4. Escolha "Public" (para que a Vercel consiga acessar)
5. Clique em "Create repository"

## Passo 3: Fazer Push do Código para GitHub

Execute os seguintes comandos no terminal:

```bash
cd /home/ubuntu/quiz-anatomia

# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USERNAME/quiz-anatomia.git

# Fazer push do código
git branch -M main
git push -u origin main
```

Substitua `SEU_USERNAME` pelo seu nome de usuário do GitHub.

## Passo 4: Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign up" e escolha "Continue with GitHub"
3. Autorize a Vercel a acessar sua conta GitHub
4. Clique em "Import Project"
5. Selecione o repositório `quiz-anatomia`
6. Clique em "Deploy"

**Pronto!** 🎉 Sua aplicação está online!

Você receberá um link como: `https://quiz-anatomia.vercel.app`

## Passo 5: Adicionar um Domínio Personalizado (Opcional)

Se quiser um domínio personalizado (ex: `quiz.seusite.com`):

1. No dashboard da Vercel, vá para "Settings" → "Domains"
2. Adicione seu domínio personalizado
3. Siga as instruções para configurar os DNS records

## Como Atualizar o Site

Sempre que você quiser adicionar novos conteúdos ou fazer mudanças:

1. Edite os arquivos localmente
2. Faça commit e push para GitHub:

```bash
cd /home/ubuntu/quiz-anatomia
git add .
git commit -m "Descrição das mudanças"
git push
```

3. A Vercel detectará automaticamente o push e fará o deploy da nova versão em poucos segundos!

## Estrutura de Arquivos

- `client/src/lib/quizData.ts` - Dados das questões (edite aqui para adicionar novas questões)
- `client/src/pages/Home.tsx` - Página inicial
- `client/src/pages/Quiz.tsx` - Página do quiz
- `client/src/App.tsx` - Rotas da aplicação

## Adicionando Novas Questões

Para adicionar novas questões, edite o arquivo `client/src/lib/quizData.ts`:

```typescript
export const quizzes: Record<string, Question[]> = {
  vascularizacao: [
    // Adicione suas questões aqui
    {
      id: 11,
      question: "Sua pergunta aqui?",
      options: ["Opção A", "Opção B", "Opção C", "Opção D"],
      correct: 0, // Índice da resposta correta
      explanation: "Explicação da resposta correta"
    }
  ]
};
```

Depois faça push e o site atualiza automaticamente!

## Suporte

Se tiver dúvidas sobre o deploy, consulte:
- [Documentação Vercel](https://vercel.com/docs)
- [GitHub Docs](https://docs.github.com)
