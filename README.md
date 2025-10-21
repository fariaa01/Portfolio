<h1 align="center">Portfolio – Gustavo Faria | Full-Stack Developer</h1>

<p align="center">
  <img width="90%" alt="Preview do Portfolio" src="https://github.com/user-attachments/assets/your-portfolio-preview-image" />
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white&labelColor=0F172A" alt="Next.js"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&labelColor=0F172A" alt="TypeScript"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=0F172A" alt="TailwindCSS"/></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white&labelColor=0F172A" alt="Framer Motion"/></a>
  <a href="https://michalsnik.github.io/aos/"><img src="https://img.shields.io/badge/AOS-FF6B6B?style=for-the-badge&logo=css3&logoColor=white&labelColor=0F172A" alt="AOS"/></a>
</p>

---

## Sobre o Projeto

O **Portfolio** é meu **site pessoal profissional** desenvolvido para apresentar minhas **habilidades, experiências e projetos** como desenvolvedor full-stack, com **animações premium**, **design moderno** e **experiência de usuário excepcional**.

Criado com foco em **performance, acessibilidade e design responsivo**, oferece uma **navegação fluida** e **visual impactante** para destacar minha trajetória profissional de forma atrativa para recrutadores.

🔗 **Acesse online:** [portfolio-se8x.vercel.app](https://portfolio-xdad-7h7nd54tz-fariaa01s-projects.vercel.app)

---

## ✨ Principais Recursos

🎯 **Hero Dinâmico** com efeito de máquina de escrever e animações personalizadas  
⚡ **Navegação Suave** entre seções com scroll animado  
🎨 **Animações Premium** com Framer Motion e AOS em todos os elementos  
📱 **Design 100% Responsivo** (mobile, tablet e desktop)  
🌙 **Tema Escuro Moderno** elegante e profissional  
🔄 **Loading Screen** animado com logo personalizado  
📊 **Grade Interativa de Skills** com hover effects  
💼 **Showcase de Projetos** com preview de imagens e modal gallery  
📈 **Timeline Profissional** interativa com experiências e educação  
📧 **Formulário de Contato** funcional com EmailJS  
🖼️ **Preview de Projetos** com galeria modal e navegação  
⭐ **Projetos em Destaque** com badges especiais  

---

## 🛠️ Tecnologias Utilizadas

| Stack | Descrição |
|-------|------------|
| ⚛️ **Next.js 15** | Framework React com App Router e otimização automática |
| 🧩 **TypeScript** | Tipagem estática para desenvolvimento mais seguro |
| 🎨 **Tailwind CSS** | Estilização utilitária moderna e responsiva |
| 🎭 **Framer Motion** | Animações fluidas e micro-interações premium |
| 📜 **AOS** | Animações suaves ao fazer scroll |
| 🎯 **Lucide React** | Ícones modernos e consistentes |
| ⌨️ **React Simple Typewriter** | Efeito de máquina de escrever |
| 📧 **EmailJS** | Serviço de email para formulário de contato |
| 🖼️ **Next/Image** | Otimização automática de imagens |
| 🚀 **Vercel** | Deploy e hospedagem otimizada |

---

## 🚀 Funcionalidades Detalhadas

### 🎯 Hero Section
- **Efeito typewriter** com múltiplas profissões
- **Call-to-actions animados** (Download CV, Contact Me)
- **Micro-interações** em botões com scale effects
- **Gradiente personalizado** com cores brand

### 🔄 Loading Experience
- **Loading screen animado** com logo GF personalizado
- **Barra de progresso** com animação fluida
- **Transição suave** para conteúdo principal
- **Context API** para gerenciamento de estado

### 📈 Timeline Profissional
- **Linha do tempo interativa** com experiências
- **Seção educacional** com formação acadêmica
- **Animações ao scroll** para cada item
- **Tags de tecnologias** utilizadas em cada experiência
- **Design responsivo** adaptável a todos os dispositivos

### 🎨 Animações e Interações
- **Scroll animations** com AOS em todas as seções
- **Hover effects** em cards e botões
- **Smooth scrolling** para navegação entre seções
- **Loading states** otimizados
- **Framer Motion** para micro-interações premium

### 💼 Showcase de Projetos
- **Cards interativos** com preview de imagens
- **Modal gallery** com navegação entre screenshots
- **Hover animations** com transformações suaves
- **Badges para projetos em destaque** ⭐
- **Preview de imagens** com fallback para placeholders
- **Categorização** por tecnologias utilizadas
- **Links diretos** para repositórios GitHub e demos

### � Formulário de Contato
- **Integração com EmailJS** para envio real de emails
- **Validação de campos** em tempo real
- **Estados de loading** durante envio
- **Feedback visual** de sucesso/erro
- **Design responsivo** com informações de contato

### 🛠️ Skills Section
- **Grade responsiva** de tecnologias
- **Ícones animados** com Devicon e Lucide
- **Hover effects** com mudança de cor
- **Organização visual** por categorias
- **Tooltips informativos** para cada skill

### 🎭 About Me Enhanced
- **Seção pessoal** com história profissional
- **Estatísticas de carreira** (projetos, experiência, satisfação)
- **Cards informativos** sobre foco atual e diferenciais
- **Texto otimizado** para atrair recrutadores

---

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout raiz com metadados
│   ├── page.tsx           # Página principal integrada
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base (Button, etc.)
│   ├── AboutMe.tsx       # Seção sobre mim melhorada
│   ├── ClientOnly.tsx    # Wrapper para hidratação
│   ├── ContactForm.tsx   # Formulário funcional com EmailJS
│   ├── Footer.tsx        # Rodapé com links sociais
│   ├── Loading.tsx       # Tela de loading animada
│   ├── Navbar.tsx        # Menu de navegação
│   ├── ProjectCard.tsx   # Card de projeto com preview
│   ├── Skills.tsx        # Grid de habilidades
│   └── Timeline.tsx      # Timeline profissional
├── contexts/             # Context API
│   └── LoadingContext.tsx # Gerenciamento do estado de loading
├── lib/                  # Utilitários
│   ├── placeholder.ts    # Sistema de placeholders para imagens
│   └── utils.ts          # Funções auxiliares
├── types/                # Definições TypeScript
│   └── aos.d.ts          # Tipagem para AOS
└── public/               # Assets estáticos
    ├── projects/         # Imagens dos projetos
    │   ├── easybank-landing/
    │   ├── food-truck/
    │   ├── private-teachers/
    │   ├── financial-dashboard/
    │   ├── extensions-manager/
    │   └── README.md     # Guia para organização das imagens
    └── cv-gustavo-faria.pdf
```

---

## 📈 Performance e Otimização

- ✅ **Lighthouse Score 95+** em todas as métricas
- ✅ **Core Web Vitals** otimizados
- ✅ **SEO otimizado** com metadados dinâmicos
- ✅ **Imagens otimizadas** com Next.js Image
- ✅ **Lazy loading** em componentes pesados
- ✅ **Bundle size** otimizado com tree-shaking

---

## 🎨 Design System

### Cores Principais
- **Primary:** `#A855F7` (Purple 500)
- **Background:** `#09090B` (Zinc 950)
- **Cards:** `#18181B` (Zinc 900)
- **Text:** `#FAFAFA` (Zinc 50)
- **Muted:** `#A1A1AA` (Zinc 400)

### Tipografia
- **Heading:** Inter (Bold)
- **Body:** Inter (Regular)
- **Code:** JetBrains Mono

---

## 📱 Responsividade

| Breakpoint | Resolução | Layout |
|------------|-----------|---------|
| **Mobile** | < 768px | Stack vertical, menu hambúrguer |
| **Tablet** | 768px - 1024px | Grid 2 colunas, navegação completa |
| **Desktop** | > 1024px | Grid completo, todas as features |

---

## 🔧 Como Adicionar Imagens dos Projetos

Para adicionar imagens aos seus projetos:

1. **Navegue para** `public/projects/[nome-do-projeto]/`
2. **Adicione as imagens** com os nomes especificados no README da pasta
3. **Recomendações:**
   - Formato: PNG ou JPG
   - Resolução: 1200x800px (ratio 3:2)
   - Tamanho máximo: 500KB por imagem
4. **O sistema automaticamente** exibirá as imagens ou fallbacks elegantes

---

## 📋 Atualizações Recentes

### v2.0.0 - Portfolio Profissional Completo
- ✨ **Loading Screen** animado implementado
- 📈 **Timeline Profissional** com experiências e educação
- 🖼️ **Preview de Projetos** com modal gallery
- 📧 **Formulário de Contato** funcional com EmailJS
- 🎯 **About Me** otimizado para recrutadores
- 🔄 **Context API** para gerenciamento de estado
- 🎨 **Animações premium** em todos os componentes
- 📱 **Responsividade** aprimorada
- ⚡ **Performance** otimizada

### v1.0.0 - Base Inicial
- 🏗️ Estrutura inicial com Next.js 15
- 🎨 Design system com Tailwind CSS
- 💼 Showcase básico de projetos
- 📊 Grid de skills interativo

---

## 🤝 Contato

Desenvolvido por **Gustavo Faria**

- 📧 **Email:** [gustavofaria985@gmail.com](mailto:gustavofaria985@gmail.com)
- 📱 **Telefone:** +55 (19) 99838-9595
- 💼 **LinkedIn:** [linkedin.com/in/gustavo-faria](https://linkedin.com/in/gustavo-faria)
- 🐱 **GitHub:** [github.com/fariaa01](https://github.com/fariaa01)
- 🌐 **Portfolio:** [portfolio-se8x.vercel.app](https://portfolio-xdad-7h7nd54tz-fariaa01s-projects.vercel.app)

---

<p align="center">
  <a href="#top">🔝 Voltar ao topo</a>
</p>

