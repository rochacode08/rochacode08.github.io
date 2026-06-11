# 🗂️ Portfólio — Gabriel Rocha

Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades e formas de contato. A página é dividida em quatro seções principais: apresentação com stack de tecnologias, galeria de projetos com filtros e sistema "mostrar mais/menos", serviços oferecidos e seção de contato com formulário funcional.

## 📸 Preview

![Preview do projeto](./assets/images/preview.webp)

## 🚀 Demonstração

🔗 **[Ver portfólio online](https://rochacode08.github.io)**

## 🛠️ Tecnologias utilizadas

- **HTML5** — estruturação semântica com `<header>`, `<main>`, `<section>` e meta tags Open Graph
- **CSS3** — estilização com animações, CSS Grid, Flexbox, CSS Nesting e variáveis
- **JavaScript (vanilla)** — lógica de tema, idioma, animações, formulário e partículas
- **particles.js** — background animado com partículas (modo claro)
- **FormSubmit** — envio de formulário de contato sem back-end
- **Google Fonts** — tipografia com as fontes *Asap* (títulos), *Maven Pro* (texto) e *Inconsolata* (subtítulos)
- **WebP** — formato moderno de imagens para melhor performance

## ✨ Funcionalidades

### 🎭 Seção Apresentação
- ✅ Foto de perfil com ícone de código sobreposto
- ✅ Texto de apresentação com **animações sequenciais de entrada** (fadeIn com delays)
- ✅ **Stack de tecnologias** em formato de tags (React, TypeScript, JavaScript, Node.js, Tailwind, HTML, CSS, MySQL, GitHub, Git Bash)
- ✅ Tags com animação de entrada deslizante (slide-in) em cascata
- ✅ Botão de seta com **animação de bounce** indicando scroll para projetos
- ✅ Scroll suave com easing personalizado ao clicar na seta

### 📁 Seção Projetos
- ✅ Galeria de **16 projetos** com thumbnails coloridos e links externos
- ✅ **Filtros por categoria**: Todos / HTML & CSS / JavaScript / Fullstack & IA
- ✅ **Sistema "Mostrar mais/menos"** que calcula automaticamente quantos cards cabem em 2 linhas
- ✅ Recalculo automático da quantidade visível ao **redimensionar a tela** (via `ResizeObserver`)
- ✅ Cards aparecem progressivamente com `IntersectionObserver` (animação ao entrar na viewport)
- ✅ Efeito hover nos cards com outline colorido
- ✅ Bordas superiores coloridas em cards específicos para destaque visual
- ✅ Botão "Mostrar mais" com **animação de pulse** para chamar atenção

### 💼 Seção Serviços
- ✅ **3 cards** apresentando serviços oferecidos (Websites, API/Banco de dados, DevOps)
- ✅ Animação de entrada sequencial nos cards ao entrar na viewport
- ✅ Efeito hover com **shine sweep** (gradiente passando pelo card)
- ✅ Rotação do ícone no hover

### 📬 Seção Contato
- ✅ 4 links para redes sociais e contato (LinkedIn, Instagram, GitHub, E-mail)
- ✅ Efeito hover com deslocamento horizontal e mudança de cor nos ícones
- ✅ Sublinhado animado na parte inferior do link
- ✅ **Formulário de contato funcional** via FormSubmit (sem back-end)

### 🌗 Tema claro / escuro
- ✅ **Toggle entre dark mode e light mode** com salvamento no `localStorage`
- ✅ Background animado com **particles.js** no modo claro (partículas azuis em movimento)
- ✅ Lógica de elevação: cards brancos sobre superfícies cinzas no modo claro
- ✅ `theme-color` meta dinâmico para a barra do browser em mobile
- ✅ Transições suaves entre os temas

### 🌐 Internacionalização
- ✅ Suporte a **PT-BR e EN** com toggle e salvamento no `localStorage`
- ✅ Todos os textos, placeholders e labels do formulário traduzidos
- ✅ Atributo `lang` do HTML atualizado dinamicamente para leitores de tela

### ♿ Acessibilidade
- ✅ `prefers-reduced-motion` — animações desativadas para quem usa essa preferência no sistema
- ✅ `aria-label` em todos os elementos interativos sem texto visível
- ✅ Foco visível via teclado (`:focus-visible`) em links e botões
- ✅ `aria-pressed` e `role="group"` nos filtros de projeto
- ✅ `aria-live="polite"` no status do formulário de contato

## 🎨 Paleta de cores

### 🌑 Dark mode (padrão)

| Cor                 | Hex       |
| ------------------- | --------- |
| ⬛ Base 100 (bg)     | `#0D0E11` |
| ⬛ Base 200          | `#16181D` |
| 🔲 Base 300          | `#292C34` |
| 🔘 Base 400          | `#878EA1` |
| ⚪ Base 500          | `#C0C4CE` |
| ⚪ Base 600          | `#E2E4E9` |
| 🔴 Red              | `#E3646E` |
| 🟣 Purple           | `#7C3AED` |
| 🔵 Blue             | `#3996DB` |
| 🟢 Green            | `#82BC4F` |
| 🟡 Yellow           | `#EABD5F` |

### ☀️ Light mode

| Cor                 | Hex       |
| ------------------- | --------- |
| 🔘 Base 100 (fundo) | `#E8EAEE` |
| ⚪ Base 200          | `#F1F3F6` |
| ⚪ Base 300 (cards)  | `#FFFFFF` |
| 🔘 Base 400          | `#6B7079` |
| ⬛ Base 500          | `#3C414A` |
| ⬛ Base 600          | `#16181D` |
| 🔴 Red              | `#D24C5A` |
| 🟣 Purple           | `#7C3AED` |
| 🔵 Blue             | `#2C7FC4` |
| 🟢 Green            | `#6FAE3E` |
| 🟡 Yellow           | `#D29A33` |

## 📂 Estrutura do projeto

```
📦 rochacode08.github.io
 ┣ 📂 assets
 ┃ ┣ 📂 icons                → Ícones SVG (tecnologias, redes sociais, UI)
 ┃ ┗ 📂 images               → Backgrounds, thumbnails e foto de perfil (WebP)
 ┣ 📂 style
 ┃ ┣ 📜 global.css           → Reset, variáveis e estilos globais
 ┃ ┣ 📜 themes.css           → Tema claro/escuro + controles de tema/idioma
 ┃ ┣ 📜 header.css           → Seção de apresentação
 ┃ ┣ 📜 main.css             → Galeria de projetos e botão mostrar mais
 ┃ ┣ 📜 section-services.css → Seção de serviços
 ┃ ┣ 📜 section-links.css    → Seção de contato e formulário
 ┃ ┣ 📜 animations.css       → Animações e keyframes
 ┃ ┗ 📜 responsive.css       → Media queries (6 breakpoints)
 ┣ 📂 js
 ┃ ┣ 📜 i18n.js              → Sistema de internacionalização PT-BR / EN
 ┃ ┣ 📜 theme.js             → Toggle de tema claro/escuro
 ┃ ┣ 📜 particles.js         → Background de partículas (modo claro)
 ┃ ┣ 📜 animations.js        → IntersectionObserver + scroll suave
 ┃ ┣ 📜 viewMore.js          → Lógica do "mostrar mais/menos" e filtros
 ┃ ┗ 📜 contactForm.js       → Envio do formulário via FormSubmit
 ┗ 📜 index.html              → Página principal
```

## 📱 Responsividade

O projeto conta com **6 breakpoints** para suporte a múltiplos tamanhos de tela:

| Dispositivo         | Largura          | Principais ajustes                                  |
| ------------------- | ---------------- | --------------------------------------------------- |
| 💻 Desktop / Tablet | até 1024px       | Ajustes no container, tags e grid de projetos       |
| 📱 Tablet           | até 768px        | Tipografia reduzida, cards em colunas menores       |
| 📱 Mobile           | até 425px        | Links compactos, tipografia fluida com `clamp()`    |
| 📱 Mobile S         | até 375px        | Cards em coluna única, avatar menor                 |
| 📱 Mobile XS        | até 320px        | Títulos menores, tags compactas                     |

## ⚡ Performance

O projeto foi otimizado com foco em Core Web Vitals e auditado pelo **Google Lighthouse**:

### 🖥️ Desktop

![Lighthouse Desktop](./assets/images/lighthouse-desktop.webp)

### 📱 Mobile

![Lighthouse Mobile](./assets/images/lighthouse-mobile.webp)

### 🎯 Otimizações aplicadas

- ✅ **Preload + `fetchpriority="high"`** na foto de perfil (Largest Contentful Paint)
- ✅ Conversão de imagens **PNG → WebP** (redução significativa no tamanho dos arquivos)
- ✅ `width` e `height` **explícitos** em todas as imagens (evita Cumulative Layout Shift)
- ✅ `loading="lazy"` em imagens abaixo do fold (carregamento sob demanda)
- ✅ Scripts com **`defer`** (carregam em paralelo, não bloqueiam o render)
- ✅ CSS carregado em **paralelo** (substituindo `@import` em cascata)
- ✅ Fontes do Google **otimizadas** (apenas os pesos realmente utilizados)
- ✅ Tema aplicado antes do primeiro render (sem flash de tema errado)

## 💻 Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/rochacode08/rochacode08.github.io.git
```

Acesse a pasta do projeto:

```bash
cd rochacode08.github.io
```

Abra o arquivo `index.html` no navegador — ou utilize a extensão **Live Server** do VS Code para recarregamento automático.

## 📚 O que foi trabalhado

### ⚡ JavaScript
- **IntersectionObserver API** para animar elementos ao entrarem na viewport
- **ResizeObserver API** para recalcular layouts dinamicamente
- **MutationObserver** para detectar mudanças de tema e sincronizar o particles.js
- **Scroll suave customizado** com `requestAnimationFrame` e easing `easeInOutCubic`
- Sistema de internacionalização com dicionário e `localStorage`
- Toggle de tema com persistência e atualização de `theme-color` meta
- Cálculo dinâmico de quantos cards cabem em 2 linhas do grid
- Filtros de categoria com controle de estado e animação de entrada

### 🎨 CSS
- **CSS Nesting** nativo em todos os arquivos
- **Dual theming** com CSS Custom Properties e seletor `[data-theme="light"]`
- Lógica de elevação: superfícies mais claras que o fundo no tema claro
- **Animações complexas** com `@keyframes` (fadeIn, slideIn, bounce, pulse, shine)
- Animações com **delays em cascata** usando `nth-child`
- Efeito shine com pseudo-elemento e `background: linear-gradient`
- Filtros CSS (`filter: invert sepia saturate hue-rotate`) para colorir SVGs dinamicamente
- `prefers-reduced-motion` para desativar animações via preferência do sistema
- Uso de `clamp()` para tipografia fluida em mobile

### 🌐 HTML
- Estruturação semântica com `<header>`, `<main>`, `<section>`
- Meta tags **Open Graph** para compartilhamento em redes sociais
- Atributos `data-i18n` e `data-i18n-placeholder` para internacionalização
- `aria-label`, `aria-pressed`, `aria-live`, `role` para acessibilidade
- `rel="noopener noreferrer"` em links externos (segurança)
- Favicon com múltiplos tamanhos (32x32 e Apple Touch Icon)

## 🔮 Melhorias futuras

- [x] Adicionar modo **light mode** com toggle
- [x] Implementar suporte a múltiplos idiomas (PT-BR / EN)
- [x] Adicionar filtro/categorias na seção de projetos (HTML/CSS, JS, Fullstack & IA)
- [x] Integrar formulário de contato funcional
- [x] Adicionar `prefers-reduced-motion` para acessibilidade
- [ ] Adicionar página individual para cada projeto com case study
- [ ] Implementar blog/artigos sobre desenvolvimento
- [ ] Alcançar **100/100** no Lighthouse mobile

## 📝 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usá-lo como inspiração!

---

## 👨‍💻 Autor
Desenvolvido com 💙 por **[Gabriel Rocha Lopes](https://github.com/rochacode08)**

<a href="mailto:gabrielrocha.devstack@gmail.com">
    <img 
        alt="Email" 
        title="Me envie um email" 
        src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
    />
</a>
<a href="https://www.linkedin.com/in/gabriel-rocha-devstack">
    <img 
        alt="LinkedIn" 
        title="Me adicione no LinkedIn" 
        src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
    />
</a>
<a href="https://www.instagram.com/gabriel_lopess15/">
    <img 
        alt="Instagram" 
        title="Me siga no Instagram" 
        src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
    />
</a>

---
