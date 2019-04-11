## Template Binding.

La sintaxis básica de la plantilla para Vue es bastante sencilla. Utilizamos la sintaxis del bigote.
Para enlazar una propiedad dentro de HTML. La sintaxis del bigote es el uso de dos llaves
alrededor de su propiedad, como {{propertyName}}.

En el enlace, también puede ejecutar una expresión de JavaScript. Esto significa que puedes
hacer algunos cálculos matemáticos, comparar un valor de propiedad y mostrar resultados basados ​​en la evaluación
Con la expresión ternaria, haz algunos cálculos matemáticos, compara los resultados y muestra algo de texto.
Dependiendo de los resultados, o aplique un método al objeto que está enlazando. Listado 2-12
muestra algunos ejemplos de sumar números, realizar comparaciones y mostrar
resultados, luego cambiando una cadena a mayúsculas. Los resultados de esta aplicación se pueden ver en

Listing 2-12. JavaScript Expressions in Bindings.

```
var app = new Vue({
    el: '#app',
    data: {
        yes: 'Yes it is!',
        no: 'No it is not!',
        falseValue: false
    },
    template: `
        <div>
            <div>{{ 1 + 1 }}</div>
            <div>{{ falseValue === false ? yes : no }}</div>
            <div>{{ 1 == 2 ? yes : no }}</div>
            <div>{{ 1 + 1 + 1 > 2 ? yes : no }}</div>
            <div>{{ 'Getting to Know Vue.js'.toUpperCase() }}</div>
        </div>
        `
});
```

La sintaxis del bigote funciona muy bien para las propiedades de enlace que están destinadas a ser texto, pero
no se puede utilizar para vincular valores a atributos de elementos HTML. Para enlazar a los atributos, nosotros
Aprenderemos sobre nuestra primera directiva Vue: v-bind.

Para usar la directiva v-bind, debe añadirla al atributo del elemento que desea
enlazar a un valor. En el lugar del texto que normalmente asignaría, debe proporcionar el
Nombre de la propiedad de su instancia de Vue.

En el Listado 2-13, usamos v-bind para asignar una propiedad al nombre del elemento. Cuando
Inspeccionamos la página resultante en la Figura 2-8, podemos ver el nombre en el HTML

Listing 2-13. Dynamically Assigning a Name to a <div>

```
var app = new Vue({
    el: '#app',
    data: {
        myName: 'Cool Name'
    },
    template: `
        <div>
            <div v-bind:name="myName"></div>
        </div>
        `
});
```

Otra directiva que podemos usar para vincular datos a la plantilla es v-html. Con
v-html, el contenido del elemento que se aplica se reemplaza con el asignado
Valor y son tratados como HTML. Esto puede ser usado cuando sus requerimientos requieran agregar
HTML que proviene de una fuente externa a su aplicación Vue.

Precaución Solo represente el HTML que usted y su organización confían en su sitio web.
Nunca renderice el HTML que proporcionan los usuarios. El uso de HTML no confiable puede llevar a
Vulnerabilidades del script del sitio.

En el Listado 2-14, tenemos una propiedad de datos llamada someHTML que es una cadena de `<h1>`
Elemento, que contiene estilos para el color y el color de fondo del elemento.
Como queremos que esto se muestre en nuestra aplicación, lo vinculamos con la directiva v-html para que
se trata como HTML y no como una cadena. A modo de comparación, también intentaremos atar nuestros
someHTML con la sintaxis del bigote, para que podamos ver cómo se representa en la Figura 2-9.

Listing 2-14. Binding Raw HTML to an Element

```
var app = new Vue({
    el: '#app',
    data: {
        someHTML: '<h1 style="color:#41b883; background-­color:#35495e;">
Getting to Know Vue.js</h1>'
    },
    template: `
        <div>
            <div>{{ someHTML }}</div>
            <div v-html="someHTML"></div>
        </div>
        `
});
```



