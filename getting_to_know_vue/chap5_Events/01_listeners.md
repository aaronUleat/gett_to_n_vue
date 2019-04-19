## Listeners

Configurar los listeners de eventos en Vue es bastante sencillo. En el elemento del cual
desea escuchar eventos, agregue un atributo de v-on: eventName = "handleEvent", donde
eventName es el nombre del evento en el que está interesado y handleEvent es la forma en que
quiero manejar el evento.

Entonces, si quisiéramos escuchar el evento de clic en un elemento `<h1>` que cambiaría un
valor entre verdadero y falso, agregaríamos v-on: click = "value =! value". Sería
Mira algo así como el Listado 5-1. En el navegador, se vería como la Figura 5-1 antes de que nosotros
haga clic en cualquier elemento y en la Figura 5-2 después de hacer clic en la palabra "Alternar".

Listing 5-1. Using v-on To Listen To Click Events

```
let app = new Vue({
    el: "#app",
    data: {
        show: true
    },
    template: `
        <div>
            <h1 v-on:click=" show = !show " >Toogle</h1>
            <p v-show="show">
                Hide and show this message by clicking the word "Toggle"
            </p>   
        </div>
    `
});
```

Esto se hace para enlazar con cualquier evento, por lo que con elementos nativos de HTML puede cambiar
el clic para hacer doble clic o el puntero y aún así obtener el evento para disparar y mostrar u ocultar el
mensaje.

Su pregunta podría ser: "¿Qué más puedo hacer cuando se dispara un evento además de mostrar una
expresión simple? ". Me alegra que lo hayas preguntado porque eso nos lleva a los manejadores de eventos.