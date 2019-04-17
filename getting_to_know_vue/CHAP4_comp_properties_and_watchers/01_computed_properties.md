## Computed Properties

Las propiedades computadas funcionan de manera similar a los métodos en Vue. La principal diferencia es que
los resultados se almacenan para su uso posterior, o se almacenan en caché, hasta que una de las propiedades computadas
Las dependencias reactivas cambian. Las dependencias reactivas fueron creadas por Vue cuando
La instancia fue creada con la nueva palabra clave. Consulte el Capítulo 2, "Lo básico", para obtener más información.
información sobre cómo Vue maneja los cambios de datos.

Para mostrar la diferencia de comportamiento entre métodos y propiedades computadas,
El Listado 4-1 usa cuatro propiedades: tres títulos de libros con formato diferente y un cuarto
Propiedad del editor. Estas cuatro propiedades se combinarán para mostrar el mismo
texto en la pantalla: "Conociendo Vue.js por Apress".

Para mostrar la diferencia de comportamiento entre métodos y propiedades computadas,
El Listado 4-1 usa cuatro propiedades: tres títulos de libros con formato diferente y un cuarto
Propiedad del editor. Estas cuatro propiedades se combinarán para mostrar el mismo
texto en la pantalla: "Conociendo Vue.js por Apress".

Listing 4-1. Comparing Template Syntax, Methods, and Computed Properties
When Formatting Text

```
var app = new Vue({
  el: '#app',
  data: {
    bookNameForTemplate: 'Getting to Know Vue.js',
    bookNameForMethod: 'Getting to Know Vue.js',
    bookNameForComputed: 'Getting to Know Vue.js',
    publisher: 'Apress'
  },
  methods: {
    getTitleBlurb: function() {
      console.log('Called: getTitleBlurb');
      return `${this.bookNameForMethod} by ${this.publisher}`;
    }
  },
  computed: {
    titleBlurb: function() {
      console.log('Called: titleBlurb');
      return `${this.bookNameForComputed} by ${this.publisher}`;
    }
  },
  template: `
    <div>
        <h3>Template based:</h3>
        <h4>{{bookNameForTemplate}} by {{publisher}}</h4>
         <h3>Method based:</h3>
         <h4>{{getTitleBlurb()}}</h4>
         <h3>Computed Property based:</h3>
         <h4>{{titleBlurb}}</h4>
    `
});
```
En la Figura 4-1, podemos ver que las tres formas producen el mismo resultado. Mirando a la
La consola del desarrollador revela que el método getTitleBlurb y la propiedad computada
titleBlurb cada uno corrió una vez.

Pero ¿y si la vista tuviera que volver a renderizarse?
Agreguemos tres <input> s y unamos cada uno a un bookName diferente con v-model.
La actualización de la plantilla agregará las líneas en el Listado 4-2 a nuestra plantilla cerca del
fondo.

Nota v-model puede utilizarse para enlazar datos a una entrada. Para más información sobre
Modelo v, ver Capítulo 6, “Encuadernaciones”.

```
var app = new Vue({
  el: '#app',
  data: {
    bookNameForTemplate: 'Getting to Know Vue.js',
    bookNameForMethod: 'Getting to Know Vue.js',
    bookNameForComputed: 'Getting to Know Vue.js',
    publisher: 'Apress'
  },
  methods: {
    getTitleBlurb: function() {
      console.log('Called: getTitleBlurb');
      return `${this.bookNameForMethod} by ${this.publisher}`;
    }
  },
  computed: {
    titleBlurb: function() {
      console.log('Called: titleBlurb');
      return `${this.bookNameForComputed} by ${this.publisher}`;
    }
  },
  template: `
    <div>
        <h3>Template based:</h3>
        <h4>{{bookNameForTemplate}} by {{publisher}}</h4>
         <h3>Method based:</h3>
         <h4>{{getTitleBlurb()}}</h4>
         <h3>Computed Property based:</h3>
         <h4>{{titleBlurb}}</h4>
         <label>Template:
           <input type="text" v-model="bookNameForTemplate" /></label>
         <br>
         <label>Method:
         <input type="text" v-model="bookNameForMethod" /></label>
         <br>
         <label>Computed:
         <input type="text" v-model="bookNameForComputed" /></label>
     <div>
    `
});
```

Ahora, cuando recarguemos la página, deberíamos ver tres cuadros de texto en la parte inferior. Si nosotros
Cambie los valores, veremos que Called: getTitleBlurb se registra en el desarrollador.
consola en cualquier momento cualquiera de los valores cambian. Solo vemos Called: titleBlurb en el
consola cuando actualizamos la entrada vinculada a bookNameForComputed.

Podemos ver que Called: getTitleBlurb fue llamado 12 veces, una para cada
personaje introducido Llamado: titleBlurb se registró cuatro veces desde que se calculó
La propiedad solo cambió cuando se actualizó su propiedad dependiente.
En nuestro ejemplo simple, esto no parece ser un problema tan grande, pero ¿qué
¿Si tuvieras que llamar al servidor por cada uno de esos cambios? La diferencia se sumaría
con rapidez.

How many times did formatting with the template get called? Every time.

