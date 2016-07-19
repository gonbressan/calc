# calc

Para correr el programa siga estos pasos:

1- Correr mongod como servidor de bases de datos
2- Correr node app.js lo que iniciara el servidor y desde el navegador, accediendo a http://localhost:3000 podremos ver una simple calculadora.

-----------------------------

EJERCICIO (Incompleto, solo resta el tratamiento con la bd)
---------

Escribir una calculadora simple con las siguientes funcionalidades:
1)	la calculadora debe soportar:
●	suma,
●	resta,  
●	multiplicación,
●	división
2) se tiene que poder persistir una sesión de cálculo
3) se tiene que poder recuperar una sesión de cálculo almacenada.
Ejemplo:
input: 2+2
output: 4
input: 5*3*(8-23)
output: -225
input: guardar sesion 1
output: sesion1 almacenada
input: recuperar sesion 1
output: 2+2 = 4

El motor de cálculo de esta aplicación tendría que estar en cualquiera de los siguientes servidores: Node.js, PHP, JAVA;con una base de persistencia en Mongo o MySQL y su interfaz tendría que ser REST.
------------------------------------------------
