## Template

Toda esta charla sobre Vue usando una plantilla significa que probablemente deberíamos cubrir cómo pasar un
Plantilla en como parte del objeto de opciones. Cuando estás creando una nueva instancia de Vue, una
De las opciones que puede proporcionar como propiedad es la plantilla.

Vue utiliza la plantilla para generar el DOM que colocará en la web.
Página en lugar del elemento que fue seleccionado con la opción el. Debe tener una raiz
elemento. Esto reemplazará todo lo que esté dentro del elemento que la instancia de Vue
se monta a.

En el Listado 2-4, el texto dentro de <div id = "app"> se reemplazará con el contenido de
Nuestra plantilla y los datos que utiliza. Esto da como resultado la Figura 2-2.

Listing 2-4. Vue App with a Template
```
<!-- Div to Mount App -->
    <div id="app">
        This will be replaced!
    </div>
    <!-- Reference to Vue.js library -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- Script Element for our App -->
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                propertyName: 'Hello from Getting to Know Vue.js! Using a
template!'
            },
            template: '<div>{{ propertyName }}</div>'
        });
    </script>
```

También es posible utilizar la propiedad de template para proporcionar un selector de CSS para apuntar a un
Elemento HTML que tiene una identificación. Hacemos esto comenzando la cadena de el template con una etiqueta hash
(#). Esto se puede hacer con un elemento <script> si le asigna un tipo de x-template y
no se procesará en la página hasta que Vue la use como plantilla.
Nota Puede usar el elemento <template> en lugar del elemento <script>
para orientar una plantilla por ID, pero debe verificar la compatibilidad del navegador con su
público objetivo primero.

Un punto a tener en cuenta es que el elemento que desea utilizar como plantilla debería
Se colocará antes de que se declare su aplicación. El listado 2-5 se renderizará como la figura 2-3.

Listing 2-5. Vue App from a Template Using a querySelector

```
<!-- Script Element for our Template -->
<script id="myTemplate" type="x-template">
    <div>
        From Script Element Template: {{ propertyName }}
    </div>
</script>
<!-- Script Element for our App -->
<script>
    var app = new Vue({
        el: '#app',
        data: {
            propertyName: 'Hello from Getting to Know Vue.js! Using a
template!'
        },
        template: '#myTemplate'
    });
</script>
```

