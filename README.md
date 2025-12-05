# Aquário Vagas

Este repositório contém os dados das vagas exibidas na plataforma Aquário.

## Estrutura

O repositório está organizado por centro/unidade acadêmica. Atualmente, contém:

- `centro-de-informatica/` - Vagas para o Centro de Informática da UFPB

Cada pasta de centro contém:

- Arquivos JSON individuais para cada vaga (um arquivo por vaga)
- Pasta `assets/` com as imagens/logos das empresas/entidades

## Como Adicionar uma Nova Vaga

### 1. Criar o arquivo JSON

Crie um novo arquivo JSON na pasta do centro correspondente (ex: `centro-de-informatica/`). O nome do arquivo deve ser um slug (letras minúsculas, hífens para espaços). Exemplos:

- `laboratorio-inteligencia-artificial.json`
- `grupo-pesquisa-redes.json`
- `liga-academica-software.json`

### 2. Estrutura do JSON

O arquivo JSON deve seguir esta estrutura:

```json
{
  "id": "Identificador único da vaga (não deve haver duas ou mais vagas com o mesmo)",
  "titulo": "Título da vaga",
  "descricao": "Descrição da vaga. Pode usar quebra de linha \\n",
  "tipoVaga": "VOLUNTARIO",
  "criadoEm": "02/12/2025",
  "entidade": "laboratorios",
  "publicador": {
    "nome": "Nome de quem publicou (empresa, entidade)",
    "urlFotoPerfil": "./assets/NomeDoArquivo.png"
  },
  "areas": "Áreas que a vaga abrange",
  "prazo": "31/12/2025",
  "salario": "Salário da vaga",
  "sobreEmpresa": "Descrição da empresa",
  "responsabilidades": "Responsabilidades da vaga. Pode ser preenchido em formato de lista",
  "requisitos": "Requisitos para concorrer a vaga",
  "informacoesAdicionais": "Informações adicionais sobre a vaga",
  "etapasProcesso": "Etapas do processo de seleção",
  "linkVaga": "Link para se inscrever e concorrer a vaga"
}
```

### 3. Propriedades Obrigatórias

- **`id`** (string): Identificador da vaga
- **`titulo`** (string): Titulo da vaga
- **`publicador`** (objeto): Quem publicou a vaga
- **`linkVaga`** (string): Link para se inscrever na vaga
- **`criadoEm`** (string): Data de publicação. Data no formato `DD-MM-YYYY`
- **`prazo`** (string): Quando se encerra as inscrições para vaga. Data no formato `DD-MM-YYYY`
- **`tipoVaga`** (string): O tipo da vaga
- **`areas`** (array): Aréas da vaga
- **`entidade`**(string): Entidade da vaga

### 4. Propriedades Opcionais

- **`descricao`** (string): Descrição detalhada
- **`salario`** (string): Salário
- **`sobreEmpresa`** (string): Sobre a empresa
- **`responsabilidades`** (string): Responsabilidades da vaga
- **`requisitos`** (string): Requisitos para a vaga
- **`informacoesAdicionais`** (string): Informações adicionais sobre a vaga

### 5. Valores Válidos para `tipoVaga`

Os seguintes valores são aceitos para a propriedade `tipoVaga`:

- `"VOLUNTARIO"` - Voluntário
- `"ESTAGIO"` - Estágio
- `"TRAINEE"` - Trainee
- `"PESQUISA"` - Pesquisa
- `"CLT"` - CLT
- `"PJ"` - PJ

### 6. Valores Válidos para `entidade`

Os seguintes valores são aceitos para a propriedade `entidade`:

- `"laboratorios"` - Laboratórios
- `"grupos"` - Grupos
- `"ufpb"` - UFPB
- `"pessoa"` - Pessoa
- `"externo"` - Externo
- `"ligas"` - Ligas

### 7. Adicionar a Imagem

1. Adicione a imagem na pasta `assets/` do centro correspondente
2. Use um nome descritivo e consistente (ex: `TRIL.png`, `Aquario.png`)
3. No JSON, referencie com `./assets/NomeArquivo.png`

### 8. Formato do objeto `publicador`

Cada publicador deve ter:

- **`nome`** (string): Nome completo
- **`urlFotoPerfil`** (string): Imagem de quem publicou

### Exemplo Completo

```json
{
  "id": "1",
  "titulo": "UX/UI Designer",
  "descricao": "Destinado a estudantes que desejam se desenvolver em projetos de design de interfaces digitais, atuando desde a pesquisa com usuários até a prototipação de interfaces de alta fidelidade.",
  "tipoVaga": "VOLUNTARIO",
  "criadoEm": "02/12/2025",
  "entidade": "laboratorios",
  "publicador": {
    "nome": "TRIL",
    "urlFotoPerfil": "./assets/Aquario.png"
  },
  "areas": ["Design", "FrontEnd"],
  "prazo": "31/12/2025",
  "salario": "A combinar",
  "sobreEmpresa": "Somos um grupo do CI voltado a desenvolver soluções digitais de alto impacto que transformam e evoluem a experiência dos nossos usuários. Valorizamos diversidade, colaboração e aprendizado contínuo.",
  "responsabilidades": [
    "Desenvolver telas e fluxos de interface em conjunto com o time de produto.",
    "Conduzir pesquisas rápidas com usuários e testes de usabilidade.",
    "Criar protótipos em baixa e alta fidelidade.",
    "Colaborar com desenvolvedores para garantir a boa implementação das interfaces."
  ],
  "requisitos": [
    "Estar matriculado em curso de graduação (qualquer área, com interesse em design).",
    "Noções básicas de UX/UI ou interesse em aprender.",
    "Capacidade de trabalhar em equipe e se comunicar bem.",
    "Disponibilidade mínima de 10h semanais."
  ],
  "informacoesAdicionais": "Algumas etapas do processo podem ser adaptadas conforme a necessidade e disponibilidade das pessoas candidatas. A participação é voluntária, com foco em aprendizado prático e portfólio.",
  "etapasProcesso": [
    "Cadastro",
    "Análise de perfil",
    "Teste prático de UX/UI",
    "Entrevista com o time",
    "Retorno e onboarding"
  ],
  "linkVaga": "#"
}
```

## Adicionar um Novo Centro

Para adicionar entidades de um novo centro/unidade:

1. Crie uma nova pasta com o nome do centro (ex: `centro-de-ciencias-exatas/`)
2. Crie a estrutura de arquivos JSON e pasta `assets/` dentro dela
3. Os arquivos serão automaticamente detectados pelo sistema

## Validação

Após criar ou modificar um arquivo JSON, certifique-se de:

- O JSON está válido (sem erros de sintaxe)
- O arquivo de imagem existe na pasta `assets/`
- O `urlFotoPerfil` aponta corretamente para a imagem
- O `tipoVaga` e `entidade` usam valores válidos
- As propriedades obrigatórias estão presentes
