## Handlers

Los controladores de eventos se utilizan para controlar eventos cuando se generan. Utilizamos un método manejador.
ya que tratar de lograr mucho más que una asignación de variable en la expresión
sería engorroso

### Methods

Para mover nuestra lógica para manejar el evento de clic desde el Listado 5-1 a un método, necesitamos
Crea un método en nuestra instancia de Vue. Llamémoslo conmutador. En nuestro método de conmutación, lo haremos
haga lo mismo que estábamos haciendo con el controlador de expresiones: cambie el valor de show
entre lo verdadero y lo falso. Para usar nuestro nuevo método, usamos el nombre de alternar como el
Valor que asignamos a v-on: clic. El listado 5-2 muestra la aplicación de conmutación completa.

Listing 5-2. Using a Method to Handle the Click Event

```
var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  },
  template: `
    <div>
        <h1 v-on:click="toggle">
            Toggle
        </h1>
        <p v-show="show">
            Hide and show this message by clicking the word "Toggle"
        </p>
    </div>
    `
});
```

### Inline Methods

Quizás desee crear un método más versátil permitiéndole tomar un parámetro como
A diferencia de invertir un valor booleano. Eso también es posible. En el Listado 5-3, tenemos dos
`<h1>` elementos: uno que muestra Mostrar y usa un controlador en línea para llamar a setShow con el
valor de true, y uno que muestra Ocultar y usa un controlador en línea para llamar a setShow con
el valor de falso. Con un nuevo método que acepta un valor y lo asigna para mostrar, podemos
mostrar u ocultar el mensaje. No podemos cambiar de la misma manera, haciendo clic en el mismo
word repetidamente, ya que hide siempre establece show a false y show siempre configura show a true.

Listing 5-3. Using Inline Handlers to Pass a Value to a Method
```
let app = new Vue({
    el: "#app",
    data: {
        show: true
    },
    methods: {
        setShow: function(newValue){
            this.show = newValue;
        }
    },
    template: `
        <div>
            <h1 v-on:click="setShow(true)" >Show</h1>
            <h1 v-on:click="setShow(false)" >Hide</h1>
            <p v-show="show">
                Hide and show this message by clicking the word "Toggle"
            </p>   
        </div>
    `
});
```
Una cosa adicional que puede hacer con un controlador en línea es pasar el evento DOM a
el método usando la variable $event. En el controlador de métodos, puede acceder a
Propiedades y métodos del evento. En el Listado 5-4, pasamos el evento a nuestro controlador y
registrar el tipo en la consola de desarrollador. En la Figura 5-3 puede ver que al hacer clic en Mostrar
y Ocultar <h1> s provoca eventos de clic en la consola del desarrollador.

Listing 5-4. Passing DOM Event with Inline Event Handler

```
var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    setShow: function(newValue, event) {
      if (event) {
        console.log(event.type);
      }
      this.show = newValue;
    }
  },
  template: `
    <div>
    <h1 v-on:click="setShow(true, $event)">
        Show
    </h1>
    <h1 v-on:click="setShow(false, $event)">
        Hide
    </h1>
        <p v-show="show">
            Hide and show this message by clicking "Hide" or "Show"
        </p>
    </div>
    `
});
```

