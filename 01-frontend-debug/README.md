# Challenge 01 — Frontend Debug

**Module weight:** 15% of total score  
**Estimated time:** 45–60 min

## Context

A junior developer shipped this "User Profile Loader" app. Users report it never shows data, and there are security concerns flagged in a code review.

## Your Task

1. Clone this repository
2. Create a branch named `dev`
3. Find and fix **all** bugs
4. Create a Pull Request from `dev` → `main`
5. Document every bug you found in the PR description

## Files

| File | Description |
|------|-------------|
| `index.html` | App shell |
| `api.js` | Fetches user data from external API |
| `app.js` | UI logic and event handlers |

## What to Submit

- Your **forked repo URL** (must be under your registered GitHub username)
- A written explanation of each bug you found and how you fixed it

## Evaluation Criteria

| Criterion | Weight |
|-----------|--------|
| All bugs identified and fixed | 60% |
| Explanation demonstrates understanding (not just "I added await") | 30% |
| XSS vulnerability explicitly addressed | 10% |

> **Note:** Using AI tools is allowed. But if you cannot explain *why* each fix works, you will not pass this module.



## 1 Error  Identificados y Soluciones 

## A. Sicornizar 
    **Problema** La aplicacion no mostraba datos por falta de palabras de await cache el cual no almacena la informacion correctamente
    **Solucion** Se implemento la ayuda de await y se le agrega la excepciones para validar los errores, con la ayuda de una condicion para validar correctamente  la entrada de datos con json 


## 