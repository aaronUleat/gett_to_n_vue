## v -show

Usar v-show es similar a usar un atributo de elemento HTML. La principal diferencia es que
el valor que asigna es de su instancia de Vue o una expresión que se evalúa como verdadera o
falso. La expresión puede comparar los valores de su instancia de Vue con los valores que estableció
en la asignación o a otros valores en su instancia de Vue.

Al configurar los valores para la comparación, recuerde que el valor que está asignando
to v-show o v-if no son cadenas; serán evaluados como JavaScript. v-show = "show"
está buscando el valor de show en su instancia de Vue, no la cadena "show". Usar un
valor de cadena en la expresión, use comillas simples ('mi cadena') a su alrededor.

1. Usando valores verdaderos de nuestra instancia de Vue sin comparación con
   mostrar el contenido
2. Usando valores falsos de nuestra instancia de Vue sin comparación con
   ocultar el contenido.
3. Comparando el valor de nuestra instancia de Vue con una cadena para mostrar
   el contenido.
4. Comparando el valor de nuestra instancia de Vue con una cadena para ocultar
   el contenido.
5. Comparando un valor de nuestra instancia de Vue con un segundo valor
   Desde nuestra instancia de Vue para mostrar el contenido.
6. Comparando los resultados de un poco de matemáticas para ocultar el contenido.

```
var app = new Vue({
  el: '#app',
  data: {
    yes: true,
    no: false,
    maybe: 0,
    show: 'yes',
    dontShow: 'no',
    yesWord: 'yes'

  },
  template: `
      <div>
          <h1>
              1:
          </h1>
          <h1>
              2:
          </h1>
          <h1>
              3:
          </h1>
          <h1>
              4:
          </h1>
          <h1>
              5:
          </h1>
          <h1>
              6:
          </h1>
          <h1>
              7:
          </h1>
      </div>
      `
  });

```

Figura 3-1. Uso de v-show para mostrar y ocultar elementos basados ​​en expresiones
evaluaciones.

Con la forma en que funciona v-show, podemos inspeccionar el elemento y seguir viendo el contenido.
con su propiedad de visualización CSS establecida en ninguno, como se muestra en la Figura 3-2.
