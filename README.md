# 📸 ImageLite Front — Galeria e Upload Inteligente de Imagens

Um front-end moderno desenvolvido com Next.js 15, React 19 e TypeScript, criado para oferecer uma experiência rápida, fluida e intuitiva para visualização, upload e catalogação de imagens.

Este projeto faz parte do [curso](https://wipro.udemy.com/course/fullstack-spring-boot-reactjs-do-zero-ao-deploy-no-docker/) de Java com React do professsor Dougllas Santos na Udemy, mas foi evoluído com tecnologias mais recentes e uma arquitetura mais robusta.

## 🚀 Tecnologias Utilizadas

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Turbopack (build ultra rápido)
- Formik + Yup (formulários e validação)
- browser-image-compression (compressão client-side)
- Sonner (toasts modernos)

## 📋 Funcionalidades Principais

### 🖼️ Galeria de Imagens

- Grid responsivo em 4 colunas
- Busca por nome da imagem
- Filtro por extensão (PNG, JPEG, GIF)
- Feedback instantâneo com toasts
- Renderização otimizada

<img width="2530" height="948" alt="image" src="https://github.com/user-attachments/assets/708ecec7-2de6-4fb8-9d3d-7aca9e274e42" />

---

### 📤 Upload de Imagens

- Formulário com validação avançada (Formik + Yup)
- Compressão automática:
- Máx 1MB
- Máx 800×800px
- Suporte a JPEG, PNG e GIF
- Limite de 5MB por arquivo
- Preview antes do envio
- Tags obrigatórias para catalogação
- Espaço para screenshot do formulário:

<img width="2537" height="948" alt="image" src="https://github.com/user-attachments/assets/ef1ef0a4-0bd3-4fe3-a696-1ce7b94bd336" />

---

### 🔒 Validações Implementadas

- Nome obrigatório (máx 50 caracteres)
- Tags obrigatórias
- Verificação de tipo e tamanho do arquivo
- Testes customizados com Yup
- Prevenção de uploads inválidos com feedback visual

## 📦 Estrutura do Projeto

```
src/
 ├─ app/
 │   ├─ gallery/
 │   ├─ upload/
 │   └─ layout.tsx
 ├─ components/
 ├─ hooks/
 ├─ utils/
 └─ types/
```

## 🧪 Bibliotecas Importantes

- formik — gerenciamento de formulários
- yup — schema validation
- browser-image-compression — compressão client-side
- sonner — sistema de notificações

## ▶️ Como Rodar o Projeto

Este projeto tem como API o repositório neste [link](https://github.com/fhellipevalentin/imageliteapi) que conterá as instruções de instalação. 

Rode estes comandos ao clonar o projeto: 

```
npm install
npm run dev
```
O projeto ficará disponível em:

`http://localhost:3000`

## 📌 Roadmap

- [ ] Paginação da galeria, ou, carregamento dinamizado por botão ou rolagem na tela

- [ ] Tema dark/light

- [ ] Upload múltiplo

## 👨‍💻 Autor

Fhellipe Reis ValentinRepositório: https://github.com/fhellipevalentin/imageliteapi-front

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
