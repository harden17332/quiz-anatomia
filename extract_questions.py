import re
import json

# Ler o arquivo notes.txt
with open('/home/ubuntu/quiz-anatomia/notes.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Função para extrair questões
def extract_questions(text, start_marker, end_marker, theme):
    start = text.find(start_marker)
    end = text.find(end_marker, start) if end_marker else len(text)
    
    if start == -1:
        return []
    
    section = text[start:end]
    
    # Padrão para questões
    pattern = r'\*\*(\d+)\.\s*(.+?)\*\*\s*\n(A\).*?)\n(B\).*?)\n(C\).*?)\n(D\).*?)(?=\n\n\*\*\d+\.|###|$)'
    
    matches = re.findall(pattern, section, re.DOTALL)
    questions = []
    
    for match in matches:
        num, question, opt_a, opt_b, opt_c, opt_d = match
        questions.append({
            'number': int(num),
            'question': question.strip(),
            'options': [
                opt_a.replace('A) ', '').strip(),
                opt_b.replace('B) ', '').strip(),
                opt_c.replace('C) ', '').strip(),
                opt_d.replace('D) ', '').strip()
            ],
            'theme': theme
        })
    
    return questions

# Extrair questões de Coração
coracao_start = "### **QUESTÕES DE ANATOMIA CARDÍACA E GRANDES VASOS**"
coracao_end = "---"
coracao_questions = extract_questions(content, coracao_start, coracao_end, "Coração")

# Extrair questões de Vascularização (primeiras 10)
vasc_start1 = "### Questões de Anatomia: Vascularização do Viscerocrânio e Pescoço"
vasc_end1 = "### Gabarito Comentado"
vasc_questions1 = extract_questions(content, vasc_start1, vasc_end1, "Vascularização")

# Extrair questões de Vascularização (segundas 10)
vasc_start2 = "ESSAS DE VISCEROCRÂNIO VOCE PODE MISTURAR AS 20 COM AS 10"
vasc_end2 = "Aqui está um simulado com 30 questões"
vasc_questions2 = extract_questions(content, vasc_start2, vasc_end2, "Vascularização")

# Extrair questões de Cavidade Oral
oral_start = "### **Simulado de Anatomia: Cavidade Oral**"
oral_end = "### **Gabarito Comentado**"
oral_questions = extract_questions(content, oral_start, oral_end, "Cavidade Oral")

print(f"Coração: {len(coracao_questions)} questões")
print(f"Vascularização (parte 1): {len(vasc_questions1)} questões")
print(f"Vascularização (parte 2): {len(vasc_questions2)} questões")
print(f"Cavidade Oral: {len(oral_questions)} questões")

