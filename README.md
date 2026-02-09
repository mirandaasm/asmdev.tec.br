# asmdev.tec.br

Website de apresentação pessoal desenvolvido com Nuxt 3 (Vue 3 + SSR) e Bulma, seguindo o layout de cartão de visitas virtual e com efeito "Matrix" na página inicial.

## ✨ Stack tecnológica
- **Nuxt 3** (SSR)
- **Vue 3**
- **Bulma**
- **Node.js** + **npm**

## ✅ Requisitos
- Node.js (versão LTS mais recente)
- npm (versão mais recente)

## ✅ Como rodar localmente
```bash
npm install
npm run dev
```
A aplicação ficará disponível em `http://localhost:3000`.

## ✅ Build de produção
```bash
npm run build
npm run preview
```

## ✅ Lint (opcional)
```bash
npm run lint
```

## ✅ Configuração da foto
Coloque a imagem `eu.jpg` em:
```
public/images/profile.jpg
```

## 📂 Estrutura principal
```
app.vue
assets/
components/
pages/
public/
nuxt.config.ts
```

## 🧩 Extensões recomendadas (VS Code)
- Vue Language Features (Volar)
- ESLint
- Prettier
- EditorConfig

As extensões já estão listadas em `.vscode/extensions.json`.

## 🐞 Depuração no VS Code
Há configurações prontas em:
- `.vscode/launch.json`
- `.vscode/tasks.json`

### Fluxo de debug
1. Inicie a task **Nuxt: dev**.
2. Execute o launch **Chrome: localhost**.

## 📄 Licença
Este projeto está sob a licença MIT.