#!/usr/bin/env python3
import re

# Ler o arquivo
with open('/home/ubuntu/quiz-anatomia/notes.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Extrair seções por tema
coracao_match = re.search(r'### \*\*QUESTÕES DE ANATOMIA CARDÍACA.*?\n(.*?)(?=###|$)', content, re.DOTALL)
vascularizacao_match = re.search(r'### \*\*QUESTÕES DE VASCULARIZAÇÃO.*?\n(.*?)(?=###|$)', content, re.DOTALL)
cavidade_oral_match = re.search(r'### \*\*Simulado de Anatomia: Cavidade Oral.*?\n(.*?)(?=###|$)', content, re.DOTALL)
orelha_match = re.search(r'### \*\*QUESTÕES.*?ORELHA.*?\n(.*?)(?=###|$)', content, re.DOTALL)
olho_match = re.search(r'### \*\*QUESTÕES.*?OLHO.*?\n(.*?)(?=###|$)', content, re.DOTALL)

def extract_questions(text):
    """Extrai questões de um bloco de texto"""
    questions = []
    
    # Padrão: **1. Pergunta...** seguido de A) B) C) D)
    pattern = r'\*\*(\d+)[.\)]*\s*(.+?)\*\*\s*\n((?:A\).*?\nB\).*?\nC\).*?\nD\).*?)(?=\n\n|\*\*\d|\Z)'
    
    matches = re.finditer(pattern, text, re.DOTALL)
    
    for match in matches:
        q_num = int(match.group(1))
        question = match.group(2).strip()
        options_text = match.group(3).strip()
        
        # Extrair opções
        options = []
        for line in options_text.split('\n'):
            line = line.strip()
            if line and line[0] in 'ABCD' and line[1] == ')':
                option = line[2:].strip()
                options.append(option)
        
        if len(options) == 4:
            questions.append({
                'id': q_num,
                'question': question,
                'options': options,
                'correct': None  # Será preenchido pelo gabarito
            })
    
    return questions

# Extrair questões de cada seção
print("Extraindo questões...")

if coracao_match:
    coracao_text = coracao_match.group(1)
    coracao_questions = extract_questions(coracao_text)
    print(f"Coração: {len(coracao_questions)} questões")

if vascularizacao_match:
    vascularizacao_text = vascularizacao_match.group(1)
    vascularizacao_questions = extract_questions(vascularizacao_text)
    print(f"Vascularização: {len(vascularizacao_questions)} questões")

if cavidade_oral_match:
    cavidade_oral_text = cavidade_oral_match.group(1)
    cavidade_oral_questions = extract_questions(cavidade_oral_text)
    print(f"Cavidade Oral: {len(cavidade_oral_questions)} questões")

# Imprimir primeira questão como teste
if coracao_questions:
    print("\nPrimeira questão de Coração:")
    print(coracao_questions[0])
