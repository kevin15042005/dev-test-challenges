## 1 El await espera que la promesa se cumpla para pausar esa función específica, pero sin detener el renderizado de toda la página.Esto ayuda a que el código se vea más ordenado y sea más fácil de leer.
## 2 El innerHTML es peligroso porque permite insertar código malicioso al HTML desde afuera (ataques XSS). En cambio, con textContent no podrían hacerlo porque solo acepta texto plano.
## 3 El === es una comparación estricta que revisa el valor y también el tipo de dato, mientras que el == es más simple  y solo compara el valor, lo que puede causar errores si no tenemos cuidado.
## 4 Si no se valida, puede causar la caída de la API o incluso una inyección de datos que robe información de la base de datos. Por eso siempre hay que revisar lo que el usuario envía.
## 5
## 6 Ya que puede afetcar el depsliegue o la aplicacion directamnete si se trabaja en otro rama no habrian consecuencias la cual lo validan los qa o el project manager.
## 7 Ocurre cuando el programa guarda datos en la memoria RAM y nunca los borra, haciendo que el sistema se llene y se ponga lento hasta colapsar. Se soluciona  un clear de los que ya no utilizamos
## 8 Si la API manda un 200 pero hay un error, le informa al código que todo está bien cuando en realidad está fallando por detrás. Esto hace que el frontend no sepa cómo mostrar el error al usuario.
## 9 Si promiera el boton varias veces se harian bastantes pagos lo cual seria un erro grandisimo.
## 10 Primero revisaría el código y las dependencias, y luego usaría la consola del navegador y la pestaña de red para ver dónde se está rompiendo la comunicación sin necesidad de tener logs.