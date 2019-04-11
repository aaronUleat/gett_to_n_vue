## Getting started
### Sample Code

Todos los ejemplos de código / fragmentos contenidos en este capítulo (y todos los demás capítulos) están disponibles
en el paquete de código que viene con el libro. En el paquete de código veremos versiones completas de
Las aplicaciones, así como repeticiones para ayudarnos a comenzar. Cada capítulo proporciona instrucciones detalladas sobre
cómo seguir adelante por nuestra cuenta.

Si bien la codificación junto con el libro no es necesaria, recomendamos encarecidamente hacerlo. Jugando alrededor
con ejemplos y código de ejemplo ayudará a consolidar y fortalecer la comprensión de nuevos conceptos.

### Previewing the application

¡Comenzaremos este capítulo echando un vistazo a una implementación de trabajo del UpVote! la aplicación
Abramos el código de muestra que viene con el libro y localicemos la carpeta / voto con nuestro
El navegador de archivos de las máquinas (Finder para OS X o Windows Explorer en Windows) oa través de nuestro código
editor (por ejemplo, Sublime). Al abrir la carpeta upvote /, veremos todos los subdirectorios contenidos dentro de
la aplicación de muestra:

```
upvote
app/
    app_1/
    app_2/
    app_3/
    app_4/
    app_5/
    app_complete/
    public/
```

Hemos incluido cada versión de la aplicación a medida que la construimos a lo largo de este capítulo (app_1 /, app_2 /,
etc). Cada bloque de código en este capítulo hace referencia a la versión de la aplicación en la que se encuentra. Podemos
copie y pegue inserciones de código más largas desde estas versiones de aplicaciones en nuestra aplicación / carpeta local, el inicio
Punto de nuestra aplicación.

La subcarpeta pública alberga todas las imágenes y estilos personalizados que usaremos en nuestra aplicación.

app_complete representa el estado completo de nuestra aplicación. Abriendo la carpeta app_complete,
Veremos que solo hay tres archivos ubicados dentro:

```
app_complete
    index.html
    main.js
    seed.js
```
Observe cómo todas las presentaciones están ordenadas de mayor a menor número de votos. La aplicación
mantendrá los mensajes ordenados por número de votos, moviéndolos alrededor a medida que los votos cambien sin
recargando la página.

### Prepare the app

Vamos a empezar a construir la aplicación. Vamos a trabajar completamente desde el directorio app /.
Al abrir los archivos dentro de la aplicación / en un editor de texto, veremos un código repetitivo contenido en el
Los archivos index.html y seed.js, mientras main.js se deja en blanco.



