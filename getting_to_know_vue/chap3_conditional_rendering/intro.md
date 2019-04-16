## Conditional Rendering.

A veces tu aplicación tendrá que poder determinar si mostrar o no algo
Dependiendo de las interacciones del usuario. Por ejemplo, si estamos creando un formulario que pregunta si los usuarios
es dueño de un auto y el usuario dice que no, no hay razón para mostrarles la pregunta que hace
de que color es el carro.
Vue proporciona dos directivas para mostrar el contenido de forma condicional: v-if y v-show.
* With v-show, we can hide and show content using the CSS display
  property.

*  With v-if, the content is removed from the DOM. It can be used with
   the v-else and v-else-if directives.

Desde una perspectiva de rendimiento, v-show tiene un costo de procesamiento inicial más alto ya que
Se procesa en el DOM. v-if no será
Renderizado si el valor es falso. v-show tiene menos de un costo de render cuando el valor
Los cambios que ya están en el DOM y la propiedad de visualización de CSS es el único cambio.
Por otro lado, v-if tiene que agregarse al DOM cuando la condición para procesarlo
Cambia de falso a verdadero.

Cuando intente decidir usar v-if o v-show, considere su caso de uso.
Si la directiva va a cambiar a menudo, use v-show. Si se pretende cambiar solo
ocasional o nunca después del primer renderizado, es mejor usar v-if.

