## Methods

Al igual que con todas las cosas de JavaScript, eventualmente deberá realizar una acción cuando el usuario
Interactúa con la aplicación. Y si bien es posible hacer algunas expresiones rudimentarias en un
enlace de eventos, cualquier cosa más compleja que agregar dos números pequeños probablemente debería
Estar en JavaScript para que sea más fácil de mantener y entender. Podemos hacer eso con
metodos.

Usando métodos, podemos crear código personalizado que estará vinculado a nuestra instancia de Vue.
Podemos acceder a estos métodos desde una referencia a nuestra instancia de Vue. Al crear
métodos para nuestra instancia de Vue, debemos evitar usar la función de flecha () => {}, ya que
evitará que podamos acceder al contexto adecuado de esto.

En el Listado 2-9 tenemos un método llamado userClickedAButton. En teoría, lo haremos
agregue un controlador de eventos a un botón para llamar a esto en algún momento. Para más información sobre
Eventos y encuadernación, ver capítulos 5 y 6.

Listing 2-9. Method Declaration Example

```
var app = new Vue({
    el: '#app',
    methods: {
        userClickedAButton: function () {
            // Do Something Cool and Meaningful here!!!
            console.log('Something Cool!');
        }
    }
});
```

Con el método en el Listado 2-9, puede enlazar a una acción o evento. Con el metodo
en el Listado 2-10, puede vincular un método en la plantilla HTML.

Listing 2-10. Binding a Method in the HTML

```
var app = new Vue({
    el: '#app',
    data: {
        text: 'Getting to Know Vue.js'
    },
    template: `<div>{{ capitalizeText() }}</div>`,
    methods: {
            capitalizeText: function () {
                return this.text.toUpperCase();
            }
        }
    });
```

Nota Para llamar a un método desde dentro de un método, podemos usar esto para referenciarlo,
similar a cómo hacemos referencia a la propiedad de datos del texto en el Listado 2-10.

Binding a un método no es la forma preferida de realizar transformaciones como éstas. Si
desea calcular un valor para mostrar los datos a los que tiene acceso en Vue, un computador
La propiedad es mas apropiada.







