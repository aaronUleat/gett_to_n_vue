## Styling

Proporcionar comentarios a los usuarios sobre sus acciones generalmente toma la forma de cambiar la
Cómo se ven las cosas en la página. El usuario ingresa datos inválidos en un campo de formulario, entonces algo
se vuelve rojo. El usuario selecciona un menú desplegable y el menú desplegable. Algunos de
Esto podría lograrse con v-show y v-if, pero se sentiría abrupto. Usando CSS
Las propiedades y clases pueden proporcionar una forma de utilizar la animación y, en general, proporcionar más
Opciones además de ocultar y mostrar un elemento.

Nos fijamos en la aplicación de las propiedades y clases de estilo CSS. Si te gustaria aprender
más sobre CSS, recomiendo CSS Mastery, 3rd ed. Edición, por Andy Budd y Emil
Björklund.

### Inline Styles

El enlace a los estilos en línea nos permite asignar valores directamente a las propiedades de CSS. Usamos
sintaxis similar a la vinculación con otros atributos, como se explica en el Capítulo 2, pero usamos
Un objeto de JavaScript que definimos en la expresión. Los nombres de propiedades pueden ser
Caja de camello o caja de kebab. Si usa kebab case, necesitará usar comillas. los
El valor que asignamos a cada propiedad será el valor asignado a la propiedad CSS que usamos.
como el nombre de la propiedad.

En el Listado 6-18, usamos el nombre de caso de camello de fontSize para especificar que estamos configurando
el tamaño de letra Por su valor, usamos una propiedad de nuestra instancia de Vue y le agregamos px,
Ya que queremos usar píxeles.
En la Figura 6-17, puede ver que al ingresar 35 en la entrada se establece el tamaño de fuente en nuestra
`<p>`.

Listing 6-18. Binding CSS Styles with an Inline Object

```
<h4>Dynamic Font Size</h4>
<input type="number" v-model.number="fontSize" />
<p v-bind:style="{fontSize: fontSize + 'px'}">
    Getting to Know Vue.js
</p>
```

### Style Objects

En lugar de definir el objeto que queremos usar para un estilo en la expresión, podemos
Definirlo como una propiedad de datos. De esta manera podemos asignar todo el objeto. No tenemos que
preocuparse por definir nuestro objeto como una cadena, ya que podemos obtener un resaltado de sintaxis adecuado en
El editor de JavaScript.

En el Listado 6-19, enlazamos la entrada a la misma propiedad de datos de respaldo, fontsize, pero
Le agregaremos un reloj para que cuando cambie podamos establecer el valor de FontSize en nuestro
fontSizeObject. Enlazaremos fontSizeObject a nuestra propiedad de estilo.

Listing 6-19. Using an Object to Set Styles

```
var app = new Vue({
  el: '#app',
  data: {
    fontSize: 0,
    fontSizeObject: { fontSize: '0px' }
  },
  watch: {
    fontSize: function() {
      this.fontSizeObject.fontSize = this.fontSize + 'px';
    }
  },
  template: `
  <div>
    <h4>Dynamic Font Size with an object</h4>
    <input type="number" v-model.number="fontSize" />
    <p v-bind:style="fontSizeObject">
        Getting to Know Vue.js
    </p>
  </div>
  `
});
```

La otra cosa que puede hacer con el objeto de estilo es usar una matriz para enlazar más de
uno.

Agregaremos la siguiente propiedad a nuestro modelo de datos: fontColorObject: {color:
'rojo' }. Lo agregaremos a nuestra propiedad de estilo con fontSizeObject, como en una matriz.
El listado 6-20 muestra la aplicación completa y la figura 6-19 muestra el tamaño de fuente establecido en 40.

Listing 6-20. Binding an Array of Objects to the Style Property

```
var app = new Vue({
  el: '#app',
  data: {
    fontSize: 0,
    fontSizeObject: { fontSize: '0px' },
    fontColorObject: { color: 'red' }
  },
  watch: {
    fontSize: function() {
      this.fontSizeObject.fontSize = this.fontSize + 'px';
    }
  },
  template: `
  <div>
    <h4>Dynamic Font Size with an object</h4>
    <input type="number" v-model.number="fontSize" />
    <p v-bind:style="[fontSizeObject, fontColorObject]">
        Getting to Know Vue.js
    </p>
  </div>
  `
});
```

### Classes

Los estilos de encuadernación pueden hacer una gran cantidad de trabajos hechos a mano y hacen que sea más difícil
reutiliza el look que has conseguido. Afortunadamente también podemos enlazar clases de CSS.
Para enlazar una clase CSS, usamos la directiva v-bind: class en el elemento que queremos que
Clase a aplicar. Le proporcionamos un objeto en la expresión que tiene el nombre de la
Clase de CSS que queremos aplicar como nombres de propiedades y la condición que se evalúa como verdadera
o falso como el valor. Si quisiéramos aplicar siempre una clase, podríamos comprobar si verdadero es igual a
verdadero, como se muestra en el Listado 6-21.

#### One Class
Listing 6-21. Binding a CSS Class
```
v-bind:class="{ cssClass : true == true }"
```

Nota El nombre de la clase CSS puede estar en camel case o en kebab case. Utilizar kebab
caso, necesita usar comillas alrededor del nombre de la propiedad.

El listado 6-22 muestra la clase de CSS, error, como se define en el encabezado de nuestro HTML. Da vueltas
el color rojo y agrega un borde rojo sólido cuando se aplica a un elemento.

Listing 6-22. CSS error Class

```
<style>
    .error {
        color: red;
        border: red 3px solid;
    }
</style>
```

En el Listado 6-23, tenemos nuestra aplicación Vue definida con dos propiedades de datos, entrada y
inputError y un watch on input para establecer el valor de inputError, dependiendo de si el
El valor de entrada es un número. La Figura 6-20 muestra los resultados de ingresar “palabra” en el
entrada.

Listing 6-23. Binding a CSS Class to Evaluate a Data Property

```
var app = new Vue({
  el: '#app',
  data: {
    input: ",
    inputError: null
  },
  watch: {
      input: function() {
        var results = parseInt(this.input);
        if (isNaN(results)) {
          this.inputError = true;
        } else {
          this.inputError = false;
        }
      }
    },
    template: `
    <div>
      <h4>One CSS Class Bound</h4>
      <input
              type="text"
              v-model="input"
              v-bind:class="{ error : inputError }" />
    </div>
    `
  });
```

#### Multiple Classes

También podemos usar la sintaxis del objeto para vincular varias clases de CSS a un elemento agregando
Dos o más propiedades con condiciones de evaluación de cuándo aplicarlas.
Listado 6-24 muestra nuestra nueva clase de CSS, sin error. Vamos a aplicar esto cuando la entrada
el error es verdadero.

Listing 6-24. No-error CSS Class

```
.no-error {
    color: green;
    border: green 3px solid;
}
```

El listado 6-25 muestra cómo aplicar una de dos clases de CSS dependiendo de si
inputError es verdadero. En la Figura 6-21, vemos que ingresar 5 en la entrada hace que la
Borde y color de la entrada verde.

Listing 6-25. Binding Two CSS Classes to the Same Element

```
<h4>Two Classes Bound</h4>
<input type="text" v-model="input"
        v-bind:class="{ error : inputError, 'no-error' : inputError ==
false }" />
```

#### Multiple Classes with Arrays

También podemos aplicar múltiples clases de CSS con una matriz. Listado 6-26 muestra nuestro .active
clase. El listado 6-27 muestra la aplicación Vue con dos propiedades, con los valores que son
Nombres de nuestras clases CSS .error y .active. La Figura 6-22 muestra nuestra entrada de gran tamaño con
un error.

Listing 6-27. Binding Multiple CSS Classes with an Array

```
var app = new Vue({
  el: '#app',
  data: {
    activeClass: 'active',
    errorClass: 'error'
  },
  template: `
  <div>
    <h4>CSS Classes in an Array</h4>
    <input
        type="text"
        v-model="input"
        v-bind:class="[activeClass, errorClass]" />
  </div>
  `
});
```
También puede usar la sintaxis de expresión de objeto para aplicar dinámicamente una clase en un
formación. Listado 6-28 muestra cómo lograr esto. Una cosa a tener en cuenta es que somos
aplicando el nombre de la clase de "error" como una cadena, no una referencia, a la propiedad de datos que
tiene el mismo valor

Listing 6-28. Dynamically Applying a CSS Class as Part of an Array

```
<input
      type="text"
      v-model="input"
      v-bind:class="[{ 'error' : inputError }, activeClass]" />
```

#### Computed Classes

Declarar la lógica en la que se aplicará la clase CSS en el marcado puede ser un poco detallado.
Hace las cosas un poco más difíciles de leer. Podemos solucionar ese problema utilizando una
Propiedad calculada para crear el objeto que enlazamos con el atributo de clase.

Para enlazar a una propiedad calculada, le damos al atributo el nombre
v-bind: class = "appliedCss". La verdadera magia sucede en nuestra instancia de Vue.
En el Listado 6-29, tenemos una propiedad computada que siempre aplica la clase activa
y condicionalmente aplica el error y la clase sin error dependiendo del valor de
error de entrada. Si ingresamos “palabra” en nuestra entrada, puede ver que la clase de error se aplica en
Figura 6-23. Si ingresamos "4", se aplica la clase sin error, como se muestra en la Figura 6-24.

Listing 6-29. Using a Computed Property to Apply CSS Classes

























