#!/usr/bin/env python3
import re
import json

# Ler o arquivo de notas
with open('/home/ubuntu/quiz-anatomia/notes.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Separar por temas
themes_data = {
    'coracao': [],
    'vascularizacao': [],
    'cavidade-oral': [],
    'orelha': [],
    'olho': []
}

# Dividir o conteúdo em seções
sections = content.split('###')

current_theme = None
current_questions = []

for section in sections:
    if 'ANATOMIA CARDÍACA' in section or 'Coração' in section:
        current_theme = 'coracao'
    elif 'VASCULARIZAÇÃO' in section or 'VISCEROCRÂNIO' in section:
        current_theme = 'vascularizacao'
    elif 'CAVIDADE ORAL' in section or 'Cavidade Oral' in section:
        current_theme = 'cavidade-oral'
    elif 'ORELHA' in section or 'Audição' in section:
        current_theme = 'orelha'
    elif 'OLHO' in section or 'Visão' in section:
        current_theme = 'olho'
    
    # Extrair questões
    if current_theme:
        # Padrão para questões: **Questão XX** ou **XX.**
        questions = re.findall(r'\*\*(?:Questão\s+)?(\d+)[.\)]*\*\*\s*(.+?)(?=\*\*(?:Questão|\d+|Gabarito)|$)', section, re.DOTALL)
        
        for q_num, q_content in questions:
            # Extrair pergunta e opções
            lines = q_content.strip().split('\n')
            question_text = ""
            options = []
            correct_idx = None
            explanation = ""
            
            for i, line in enumerate(lines):
                line = line.strip()
                if not line:
                    continue
                
                # Detectar opções (A), B), C), D))
                if re.match(r'^[A-D]\)', line):
                    option_text = re.sub(r'^[A-D]\)\s*', '', line)
                    options.append(option_text)
                elif line.startswith('A)') or line.startswith('B)') or line.startswith('C)') or line.startswith('D)'):
                    option_text = re.sub(r'^[A-D]\)\s*', '', line)
                    options.append(option_text)
                elif question_text == "" and not re.match(r'^[A-D]\)', line):
                    question_text = line
                elif line.startswith('**') and 'Explicação' not in line and 'Resposta' not in line:
                    if question_text == "":
                        question_text = line.replace('**', '')
            
            # Encontrar a resposta correta no gabarito
            gabarito_section = re.search(rf'{q_num}\.\s*\*\*([A-D])\*\*', section)
            if gabarito_section:
                correct_letter = gabarito_section.group(1)
                correct_idx = ord(correct_letter) - ord('A')
            
            # Encontrar explicação
            explanation_match = re.search(rf'{q_num}\.\s*\*\*[A-D]\*\*\s*–\s*(.+?)(?=\d+\.|$)', section)
            if explanation_match:
                explanation = explanation_match.group(1).strip()
            
            if question_text and len(options) >= 4 and correct_idx is not None:
                question_obj = {
                    'id': len(themes_data[current_theme]) + 1,
                    'question': question_text,
                    'options': options[:4],
                    'correct': correct_idx,
                    'explanation': explanation if explanation else "Veja o material de referência."
                }
                themes_data[current_theme].append(question_obj)

# Imprimir estatísticas
print("Questões extraídas por tema:")
for theme, questions in themes_data.items():
    print(f"{theme}: {len(questions)} questões")

# Salvar como JSON para verificação
with open('/tmp/questions_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(themes_data, f, ensure_ascii=False, indent=2)

print("\nArquivo salvo em /tmp/questions_extracted.json")
