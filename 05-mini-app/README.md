# Challenge 05 — Mini App

**Module weight:** 10% of total score  
**Estimated time:** 90–120 min

## What to Build

A simple fullstack mini app that:

1. Accepts a **text input** from the user (a search term or username)
2. Calls a **real external API** with that input
3. **Stores** the response (in-memory, localStorage, or a simple DB)
4. **Displays** a list of past results

## Constraints

- Use any stack you want (React, Vue, plain JS, Python + Flask, etc.)
- Keep it simple — no overengineering
- Must be functional and runnable locally

## Suggested APIs (free, no auth required)

- `https://api.github.com/users/{username}` — GitHub user info
- `https://api.thecatapi.com/v1/images/search` — random cat image
- `https://jsonplaceholder.typicode.com/posts` — fake posts
- Or any other public API you prefer

## Critical Requirement — AI Transparency Section

Your README **must** include a section called `## AI Usage` that answers:

1. What parts of this app were generated using AI tools?
2. What parts did you write manually?
3. What do you fully understand in this code?
4. What parts are you uncertain about?

**This section is mandatory. Missing it = automatic rejection of this module.**

## What to Submit

- Your **repo URL**
- Optional: demo link (Vercel, Netlify, Replit, etc.)

## Evaluation Criteria

| Criterion | Weight |
|-----------|--------|
| App works as described | 40% |
| AI Transparency section present and honest | 30% |
| Code is simple and not over-engineered | 15% |
| Candidate can explain their own decisions | 15% |

> Simple code + clear reasoning = HIGH SCORE  
> Perfect code + poor explanation = PENALTY

## A. Instalacion

**Instalacion de react vite : npm create vite@latest mini-app -- --template react
**Dependencias node modules y package json: npm install
**Configuración de .env: Creación de .env para la URL de la API (https://jsonplaceholder.typicode.com/users)

## B.  Componentes 

    **Se crea una carpeta el cual contendra los componentes para el historial la buscqueda y la vista de los Card
    **Uso de useState para manejar el resultado de la API y un array para el historial. Se aplicaron condicionales (Renderizado condicional) para mostrar la Card solo cuando hay datos.

## C. Union Componentes con App
    **Se trae los prop de padre a el hijo
    ** Se  comunican para pasar funciones como props del Padre al Hijo para capturar la entrada del usuario.
    **Implementación de async/await para el consumo de la API pública.
    **Se hace la importacion de cada uno de los componentes y se adiciona con el page padre 
    **Se inserta el componentes de esta forma : <Card/> solo con uno 


## D. Correr en la Web 

    **Escribimos npm run dev para corra en el la web  en local
