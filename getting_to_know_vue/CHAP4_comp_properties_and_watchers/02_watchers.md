## Watchers

Creación de propiedades compuestas o formateadas que se actualizan cuando los datos basados
Los cambios con las propiedades computadas son agradables. Ocasionalmente necesitas actuar cuando
Cambios en los datos. En lugar de atar una llamada al servidor en una propiedad computada, un watcher puede
Ayudarle a desacoplar su entrada de usuario de tareas más caras.

El Listado 4-3 usa la biblioteca de Axios, https://github.com/axios/axios, para llamar a la Estrella
Wars API, https://swapi.co/, para obtener una lista de naves estelares cuando el usuario ingresa texto en
un cuadro de búsqueda. No supervisaremos los cambios aplicados a la entrada, pero usaremos un
mire para llamar a la API y obtenga un resultado cuando los datos detrás de la entrada cambien. Para el
En los resultados, mostraremos el nombre de cada barco devuelto.

Listing 4-3. Using a Watch to Monitor Changes

```
var app = new Vue({
    el: "#app",
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
     </div>
         `
});
```

Si ejecutamos esto y escribimos en el cuadro de búsqueda, experimentaremos un ligero retraso y luego
los resultados comenzarán a mostrarse en una lista. Si ingresamos a x, deberíamos ver algo como la Figura 4-3.

### New and Old Values

Cuando se invoca un watcher, se pasa el nuevo valor y el valor antiguo. Nosotros no hicimos
cualquier cosa con ellos en este momento, pero podría realizar comprobaciones para verificar que desea
Actúa sobre el nuevo valor.

Por ejemplo, no podríamos llamar a la API si el nuevo valor era el mismo que el anterior
valor. En el Listado 4-4, almacenamos los resultados en una propiedad del historial para que podamos acceder al
búsquedas anteriores de nuevo sin hacer una segunda llamada.

Listing 4-4. Using the New Value Provided When a Watch Is Called
```
var app = new Vue({
    el: "#app",
    data: {
        searchText: "",
        results: [],
        history: {}
    },
    methods: {
        search: function() {
            axios
                .get(`https://swapi.co/api/starships/?search=${this.searchText}`)
                .then(response => {
                    this.results = response.data;
                    this.history[this.searchText] = this.results;
                });
        }
    },
    watch: {
        searchText: function(newSearchText, oldSearchText) {
            if (this.history[newSearchText]) {
                this.results = this.history[newSearchText];
            } else {
                this.search();
            }
        }
    },
    template: `
        <div>
            <label>Search:<input type="text" v-model="searchText" /></label>
            <h5>Results: <small>{{results.count}}</small></h5>
            <ul>
              <li v-for="result in results.results">
                {{result.name}}
              </li>
            </ul>
        </div>
    `,
});
```

Como puede ver, si newSearchText es una propiedad de nuestro objeto histórico, obtenemos la
valor que hemos almacenado; De lo contrario, hacemos la llamada a la API.

### Deep

Algunos objetos son más complejos que una cadena de búsqueda pero aún requieren un watcher. Nosotros podemos usar
la propiedad profunda para observar las propiedades anidadas de un objeto. Para establecer profundo a verdadero, lo haremos
configura nuestro watcher a un objeto con dos propiedades: el controlador es la función a la que se llama
cuando el reloj se activa y la profundidad se establece en verdadero para que podamos monitorear los cambios en el
objeto.

En el Listado 4-5, podemos ver cómo se configura una vigilancia profunda. Cada vez que ocurre un cambio
al libro, el reloj llamará al manejador y veremos el Libro cambiado registrado en la
consola de desarrollador, como se muestra en la Figura 4-4.

Listing 4-5. Watching for Changes on Nested Properties

```
var app = new Vue({
    el: "#app",
    data: {
        book: {
            title: 'Getting to Know Vue.js',
            publisher: 'Appress',
            year: 2018
        }
    },
    watch: {
        book: {
            handler: function(newBook, oldBook) {
                console.log('Book Changed');
            },
            deep: true
        }
    },
    template: `
        <div>
            <label>Search: <input type="text" v-model="book.title" /></label>
            <ul>
                 <li v-for="(value, prop) in book"> {{prop}}: {{value}} </li>
            </ul>
        </div>
    `
});
```

### Immediate

La otra opción que puedes usar con un reloj es inmediata. Con el conjunto inmediato a verdadero, Vue
llamará al reloj cuando su instancia de Vue se cargue con el valor actual. De esta manera tu
Puede estar seguro de que se dispara al menos una vez.

El listado 4-6 muestra cómo usar la propiedad inmediata con un reloj. La figura 4-5 muestra
sus resultados.

```
watch: {
    book: {
      handler: function(newBook, oldBook) {
        console.log('Book Changed');
      },
      immediate: true
    }
  },
```



