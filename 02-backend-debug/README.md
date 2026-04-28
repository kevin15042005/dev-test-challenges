# Challenge 02 — Backend Debug

**Module weight:** 20% of total score  
**Estimated time:** 60–90 min

## Context

A small Express API has been deployed. QA reports that `GET /data` always returns `undefined`, and `POST /save` is causing a gradual memory increase in production. There are also inconsistent HTTP status codes.

## Your Task

1. Clone this repository
2. Create a branch named `dev`
3. Find and fix **all** bugs
4. Add basic input validation to `POST /save`
5. Create a Pull Request from `dev` → `main`
6. Document every bug in your PR description

## What to Submit

- Your **forked repo URL**
- Optional: Postman collection or screenshot showing the fixed endpoints working
- Written explanation of each bug and the fix

## Evaluation Criteria

| Criterion | Weight |
|-----------|--------|
| Missing `await` identified and fixed | 20% |
| Correct HTTP status codes | 15% |
| Input validation added to POST /save | 25% |
| Memory leak identified and addressed | 25% |
| Error handling middleware added | 15% |

> A **good** fix addresses the root cause. A **bad** fix only adds `await` without understanding why it was missing.


## Error de express
## 1 missing await in async DB simulation — always returns undefined
 ## 2: 200 status returned on error — misleads client
  ## 3: no input validation on POST /save
## 4: memory leak — global array grows without limit
## 5: no error handling middleware
## 6: GET /data returns wrong field (undefined)


## A. Manejo de Asincronía y Flujo de Datos (Bugs #1 y #6)
** Problema: El endpoint GET /data retornaba undefined debido a que la llamada a la base de datos simulada no era esperada, y se intentaba acceder a un campo de datos incorrecto.
** Solución: Se añadió la palabra clave await para asegurar que la promesa de la base de datos se resuelva antes de continuar. Asimismo, se corrigió el mapeo de la respuesta para devolver data.value, garantizando que el cliente reciba la información esperada.
## B  Gestión de Memoria y Rotación de Logs (Bug #4 - Memory Leak)
** Problema: El uso de un array global requestLog sin límites provocaba un crecimiento finito por cada petición, lo que causaría el colapso del servidor en producción.
** Solución: Se implementó una lógica de control de capacidad. Ahora, el array está limitado a un máximo de 100 entradas. Al alcanzar este límite, se utiliza el método .shift() para eliminar el registro más antiguo antes de añadir uno nuevo, manteniendo el consumo de memoria constante y controlado.

## C Validación de Entradas y Seguridad (Bug #3)
** Problema: El endpoint POST /save carecía de filtros, aceptando cualquier tipo de nulos, vacíos o tipos de datos incorrectos.
** Solución: Se integró una validación de esquema que verifica la presencia de los campos name y value. Además, se validó mediante typeof que ambos sean estrictamente cadenas de texto (string). Si la entrada es inválida, el servidor responde con un 400 .

## D. Estandarización de Códigos HTTP y Middleware (Bugs #2 y #5)
** Problema: La API entregaba códigos 200 (OK) incluso en situaciones de error y no contaba con un manejador de excepciones global, lo que ponía en riesgo la estabilidad del proceso.
** Solución: * Se ajustaron los códigos de respuesta: 404 para recursos no encontrados y 500 para fallos internos.

