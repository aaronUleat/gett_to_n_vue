### Modifiers

Los modificadores de eventos nos permiten cambiar de forma declarativa el comportamiento de un evento. Declarativamente
significa que cuando queremos modificar el comportamiento de un evento, lo declaramos en el marcado. Nosotros
no están asignando la modificación desde algún lugar en el JavaScript. Esto nos permite
Ver las modificaciones donde registramos los controladores de eventos en el marcado y dejar el
Los métodos de manejo son solo las partes del código necesarias para manejar el evento.

Para aplicar un modificador, usamos la notación de puntos en el nombre del evento. Si estuviéramos vinculando a un
haga clic en el evento y quería agregar el modificador de captura, nuestro v-on se vería algo así como
v-on: click.capture = "methodName".

Algunos de los modificadores de eventos que Vue proporciona son:

* stop: Llama event.stopPropagation () y detiene la propagación adicional del evento actual.
* prevent: Llama a event.preventDefault () y le dice al agente de usuario que no maneje el evento con su controlador predeterminado.
* capture: Agrega el detector de eventos en modo de captura. Utilizando captura
           El modo para el evento permitirá que se llame a nuestro controlador antes del
           El objetivo del evento conseguirá manejarlo.

* self: Llama al manejador solo si el evento comienza en el elemento que
        registrar el controlador en. Esto nos ahorra el trabajo extra de comprobar el
        event.target para limitar nuestro controlador a solo eventos que comienzan en el
        Elemento con el que registramos el evento.
        
* once: Llama al manejador solo una vez sin que tengamos que quitar el
        manejador desde el elemento cuando manejamos el evento.
        
* passive: Establece la opción del controlador de eventos de pasivo a verdadero, lo que significa
           que el controlador no llamará event.preventDefault () y si lo hace,
           El navegador debe ignorarlo. Se introdujeron controladores de eventos pasivos
           para ayudar a los navegadores a proporcionar una apariencia más consistente con los eventos mientras
           desplazamiento.
           
### Using a Modifier

Veamos cómo funciona esto, pero antes de hacerlo, veamos cómo se propaga un evento de clic.
a través de algunos `<div>` s. Tendremos cuatro <div> s: dos internos `<div>` s con "Inner One" y
El texto "B interno" estará dentro de un `<div>` que tiene el texto "Medio", y un cuarto `<div>` con la
texto "Exterior". Cada `<div>` tendrá un controlador de clic que inserta el texto de `<div>` en un
Arreglo de mensajes.


Mostraremos los mensajes con v-for después de nuestra colección de <div> sy agregaremos un
Botón para borrar los mensajes en la parte inferior de la página. Mirando el Listado 5-5 dará
Eres un mejor entendimiento.

```
var app = new Vue({
  el: '#app',
  data: {
    messages: []
  },
  template: `
    <div>
        <div v-on:click="messages.push('Outer')">
            <h4>Outer</h4>
            <div v-on:click="messages.push('Middle')">
                <h4>Middle</h4>
                <div v-on:click="messages.push('Inner One')">
                    <h4>Inner One</h4>
                </div>
                <div v-on:click="messages.push('Inner B')">
                    <h4>Inner B</h4>
                </div>
            </div>
        </div>
        <p>
            Last clicked:
            <ol>
                <li v-for="message in messages">
                    {{message}}
                </li>
            </ol>
            </p>
        <input type="button" v-on:click="messages = []" value="Clear" />
    </div>
    `
});
```
Esto no es demasiado emocionante todavía, pero echemos un vistazo al orden en el que están los eventos
llamado. La Figura 5-5 muestra lo que sucede cuando hacemos clic en las palabras "Inner B".

Al hacer clic en "Inner B" hace que el evento sea manejado por "Inner B", "Middle", y luego
"Exterior". Si hacemos clic en "Medio", solo veremos "Medio" y "Exterior".
Si quisiéramos detener la propagación cuando se hace clic en "Interno Uno" y no tener el otro
Los eventos de fuego, usaríamos el modificador de parada. Puedes ver como aplicar el modificador de parada.
en el Listado 5-6.

```
<div v-on:click.stop="messages.push('Inner One')">
    <h4>Inner One</h4>
</div>
```

Ahora, cuando hacemos clic en "Inner One", solo se agregará "Inner One" a nuestros mensajes
matriz para la visualización. La figura 5-6 muestra los resultados.

### Chain Modifiers

También es posible encadenar modificadores. Si agregamos captura y una vez a nuestro medio <div>
y haga clic en "Inner B" dos veces, veremos que aparece "Middle" primero en el primer clic, pero no
Ocurre en el segundo clic. El Listado 5-7 muestra el código, y la Figura 5-7 muestra los resultados.

Listing 5-7. Chaining Modifiers

```
<div v-on:click.once.capture="messages.push('Middle')">
```

### Input

También hay modificadores para las entradas al agregar uno de los siguientes a un evento clave:


* Enter: la tecla Enter o Return
* Tab: la tecla Tab
* Eliminar: la tecla eliminar o retroceder
* Esc: La tecla Escape.
* Espacio: la barra espaciadora
* Arriba: La tecla de flecha arriba
* Abajo: la tecla de flecha hacia abajo
* Izquierda: la tecla de flecha izquierda
* Derecha: la tecla de flecha derecha

En el Listado 5-8, usamos el modificador de tecla Enter en un evento de keyup para llamar a Star Wars
API, https://swapi.co/, para obtener una lista de naves estrella con la biblioteca Axios, como se muestra en
https://github.com/axios/axios.

Listing 5-8. Using Key Event Modifiers

```
let app = new Vue({
    el: '#app',
    data: {
        searchText:"",
        results: []
    },
    methods: {
        search: function () {
            axios.get(`https://swapi.co/api/starships/?search=${this.searchText}`)
                .then(response => this.results = response.data);
        }
    },
    template: `
        <div>
            <label> Search:
                <input type="text" v-model="searchText" v-on:keyup.enter.esc="search">
            </label>
            <h5>Results: <small> {{results.count}} </small> </h5>
            <ul>
                <li v-for="result in results.results"> {{result.name}} </li>
            </ul>
        </div>
    `
});
```
Ahora, cuando queremos realizar una búsqueda, debemos presionar Enter cuando estamos en el
buscar entrada de texto En la Figura 5-8, puede ver que solo hacemos una llamada a la API para el
buscar.
Los modificadores de eventos clave también pueden ser encadenados. En el Listado 5-9 puede ver cómo agregar el
Modificador de la tecla Escape, por lo que la búsqueda se puede activar con la tecla Intro o Escape
llave.

```
<input
    type="text"
    v-model="searchText"
    v-on:keyup.enter.esc="search" />
```