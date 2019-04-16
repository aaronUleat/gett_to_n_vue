## Lists
A menudo, los desarrolladores deben tratar con grupos del mismo elemento, generalmente para mostrarlos en
una página web. Aunque puede ser divertido copiar y pegar el mismo fragmento de código, Vue
proporciona una directiva para manejar la visualización de elementos de matriz, llamada v-for.

## BASICS

Con v-for, podemos iterar (repasar cada elemento) a través de los elementos de una matriz y usar
cada objeto para mostrar el contenido. En su forma más simple, v-for puede usarse para mostrar cada
elemento en una matriz. Podemos ver cómo se hace esto en el Listado 3-6.

Listing 3-6. Displaying Each Item in an Array with v-for

```
var app = new Vue({
  el: '#app',
  data: {
    items: ['first', 'two', '3']
  },
  template: `
      <ul>
        <li v-for="item in items">
          {{item}}
        </li>
      </ul>
    `
});
```

Si está familiarizado con el JavaScript for ... in loop, esto debería verse similar, ya que
La directiva v-for sigue una configuración similar. El elemento es el objeto que se utiliza para cada
iteración y elementos es la colección que estamos atravesando o iterando.

El elemento en el que se coloca v-for se repetirá para cada elemento de la colección.
En el Listado 3-6, creamos un nuevo `<li>` y mostramos el artículo completo. Para este ejemplo simple,
esto está bien ya que cada elemento es una cadena. Para artículos más complicados, necesitamos usar punto.
Notación para mostrar o utilizar las propiedades de cada elemento.

En caso de que se lo pregunte, el Listado 3-6 se mostrará como en la Figura 3-8.

As the objects in your collection get more complicated, it is recommended that
you use the :key attribute. The :key attribute is used by Vue to track the identity of the
elements that have been rendered and update the DOM correctly.
Listing 3-7 shows a collection of books and uses the ID of each book as the key.

Listing 3-7. Using the :key Attribute with v-for

```
var app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        title: 'Entertaining Kids Book',
        price: 4.99,
        id: 0,
        genres: ['kids', 'fiction']
      },
      {
        title: 'Teen Drama',
        price: 5.99,
        id: 1,
        genres: ['teen', 'fiction']
      },
      {
        title: 'Boring Facts',
        price: 6.99,
        id: 2,
        genres: ['adult', 'non-fiction']
      },
      {
        title: 'Overly Complex Story',
        price: 7.99,
        id: 3,
        genres: ['adult', 'science fiction', 'fiction']
      },
      {
              title: 'Facts for Teens',
              price: 3.99,
              id: 4,
              genres: ['teen', 'non-fiction']
            }
          ]
        },
        template: `
          <ul>
            <li v-for="book in books" :key="book.id">
              {{ book }}
            </li>
          </ul>
          `
      });
```

Ya que nuestra plantilla aún enlaza los artículos directamente, similar al Listado 3-6, veremos
la salida del objeto JSON para cada elemento de la matriz de libros (consulte la Figura 3-9). Sin embargo, nos
no debería ver ninguna diferencia causada por la adición del atributo clave.

Precaución Es posible usar v-for sin usar: key, pero esto debería ser
hecho solo si no va a alterar el índice de matriz. Si no estás utilizando: tecla,
debe evitar agregar o eliminar elementos de la matriz, excepto al final o
al ordenar la matriz. Vue no puede rastrear y actualizar todos los elementos secundarios que están
repite correctamente

### Accessing Object Properties

Limpiemos nuestra exhibición de libros al representar cada valor con un margen de utilidad útil
en lugar de volcar nuestro JSON en un `<li>` .Listing 3-8 usa los mismos datos que nosotros
utilizado en el Listado 3-7, así que solo mostraré la plantilla ya que es donde estamos haciendo
cambios.

Listing 3-8. Binding to Properties of an Item in v-for

```
template: `
  <ul>
    <li v-for="book in books" :key="book.id">
      <p><strong>Id:</strong> {{ book.id }}<p>
      <p><strong>Title:</strong> {{ book.title }}</p>
      <p><strong>Genres:</strong> <span v-for="genre in book.genres">
{{genre}} </span></p>
    </li>
  </ul>
```

Aquí puede ver que estamos usando la notación de puntos para acceder a las propiedades de cada uno.
objeto. La parte más interesante es que también tenemos una sub v-for el género de cada uno.
libro.

Nota Dado que los géneros son un objeto simple, dejé de lado el atributo clave ya que lo haremos
No lo utilices para rastrear el estado de los subcomponentes.

Mirar los resultados en la Figura 3-10 me hace pensar que podríamos ayudar a nuestros géneros a enumerar una
poco al agregar algunas comas para que sea más fácil diferenciar los géneros.

### Index and Parent Properties

Para representar condicionalmente una coma después de cada género, haremos un par de cosas. Necesitamos
para obtener el índice del elemento actual. Afortunadamente, Vue nos brinda la opción de agregar un
Segundo parámetro para v-for que nos da el índice. Para acceder a este segundo parámetro, nosotros
Usa paréntesis para envolver nuestro objeto y el índice. Entonces, v-for = "libro en libros" se convierte en
v-for = "(libro, índice) en libros" y ahora sabemos dónde estamos en la matriz.

La otra cosa que necesitamos saber es la longitud de la matriz. Podríamos contar el
elementos (cinco en este caso) y use v-if para representar una coma siempre que el índice sea menor que
la longitud menos 1 (cuatro en este caso). Esto funcionaría, pero es un ejemplo simple y
a veces (bueno, la mayoría de las veces) no sabremos cuánto tiempo va a durar una matriz cuando
Estamos escribiendo el código. Es mejor obtener la longitud de la matriz directamente de la longitud
parámetro.

Podemos hacer esto ya que tenemos acceso a todas las propiedades de todos los objetos principales
de nuestra fila actual. En este caso, desde la v-para de los géneros, podemos acceder a los libros.
matriz de géneros. Como podemos acceder directamente a la matriz, podemos usar la propiedad length de un
Matriz de JavaScript para obtener la longitud.

Esto podría ser más fácil de ver que leer. El listado 3-9 muestra nuestro uso actualizado de
v-for con la propiedad de índice y el uso de v-if para incluir condicionalmente una coma si
el índice es menor que la longitud de la matriz de géneros menos 1.

Listing 3-9. Using v-for Index and Accessing Parent Properties

```
<span v-for="(genre, index) in book.genres">
  {{genre}}<span v-if="index < book.genres.length -1">, </span>
</span>
```

Puede ver que esto limpia la lista de géneros para que sea más fácil de leer, como se muestra en
Figura 3-11.

### Dealing with Change 

Vue envuelve a los observadores alrededor de los siguientes métodos de mutación de matriz:

* push
* pop
* shift
* unshift
* splice
* sort
* reverse

Esto significa que mientras esté cambiando su matriz a través de estos métodos, Vue
Podrá detectar los cambios. Si está utilizando un método que no muta, o
cambio, la matriz original, Vue no detectará eso. Los métodos que no cambian la
La matriz original es filter, concat y slice. Para que Vue observe estos cambios en el
matriz, reemplazar la matriz original con los resultados.

Por ejemplo, si tuviéramos un método que filtrara una matriz llamada teenFilter, lo haríamos
lo necesita para reasignar los resultados del filtro a la matriz de libros para ver esos cambios en el
la aplicación Vea el Listado 3-10.

Listing 3-10. Replacing the Original Array with Results of the Array Method That
Returns a New Array.

```
methods: {
  teenFilter: function() {
    this.books = this.books.filter(book => {
      return (
        book.genres.findIndex(genre => {
          return genre === 'teen';
        }) >= 0
      );
    });
  }
},
```

Si abre la consola del desarrollador en su navegador web, puede llamar a este método en su
Vue la instancia con app.teenFilter () para ver los resultados. Se muestran en la Figura 3-12.

Cuando se trata de cambios y matrices, hay dos casos que requieren especial
atención.

Vue no puede detectar cuando un elemento se reemplaza en una matriz utilizando el índice del elemento,
y cuando la matriz se redimensiona asignando un nuevo valor a la propiedad length. Llegar
alrededor de estas limitaciones, puede reemplazar elementos en una matriz usando Vue.set, como en
Listado 3-11, o usando el método de empalme de JavaScript, como en el Listado 3-12.

Listing 3-11. Using Vue.set to Replace an Item in an Array

## Objects

También es posible usar v-for para pasar por las propiedades de un objeto. Desde JavaScript
los motores se comportan de manera diferente, no hay garantía sobre el orden de las propiedades en
diferentes navegadores.

La principal diferencia en el uso de v-for con un objeto en lugar de una matriz es que, con
un objeto, cuando utiliza paréntesis para acceder al valor y al índice, acepta tres
Parámetros: valor, clave e índice. El valor y el índice representan las mismas cosas que
la matriz. La clave representa el nombre de la propiedad.

El Listado 3-14 muestra un solo objeto de libro que usaremos para ver las propiedades. Uno
De las propiedades es una función. En la Figura 3-13, puede ver que la función será
se muestra en el HTML tal como está escrito y no como resultado del método.

Listing 3-14. Using v-for with an Object

```
var app = new Vue({
  el: '#app',
  data: {
    book: {
      title: 'Overly Complex Story',
      price: 7.99,
      id: 3,
      genres: ['adult', 'science fiction', 'fiction'],
      action: function() {
        return 'I did an action';
      }
    }
  },
  template: `
      <ul>
        <li v-for="(prop, key, index) in book">
          {{index}}) {{key}}: {{prop}}
        </li>
      </ul>
    `
});
```

Si queremos mostrar los resultados de la función de acción, tenemos que verificar el tipo
De cada prop e invocamos solo las funciones de nuestro objeto. El listado 3-15 muestra cómo podemos
use v-if con typeof en un `<p>` para lograr esto; La Figura 3-14 muestra cómo se ve.

Listing 3-15. Checking Property Type in a v-for Loop

```
<p v-if="typeof prop == 'function'">{{prop()}}</p>
```






































































