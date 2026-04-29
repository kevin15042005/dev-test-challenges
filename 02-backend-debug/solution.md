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

