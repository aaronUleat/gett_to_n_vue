## Data

Utilizamos la propiedad de datos para decirle a nuestra instancia a qué forma se asemejarán nuestros datos. En
Listado 2-6, los datos tienen una propiedad llamada propertyName. Si hay algo nosotros
Si desea poder enlazar en nuestra instancia de Vue, debemos incluirlo en los datos antes de
Crea nuestra instancia Vue.

Listing 2-6. Data Has One Property Named propertyName

```
data: {
          propertyName: 'Hello from Getting to Know Vue.js!'
      }
```

Cuando se crea una nueva instancia de Vue, agrega todas las propiedades de los datos a un reactivo
sistema. El sistema reactivo Vue supervisa las propiedades del objeto de datos en busca de cambios
y actualiza la vista para "reaccionar" a esos cambios.

Esto significa que no podemos agregar nuevos datos para ser monitoreados por el sistema reactivo de Vue después de
Se inicia la aplicación. Si, en el momento en que creas tu instancia de Vue, no sabes qué
Los valores de sus propiedades de datos serán, defínalos con los nombres y déles un
valor de una cadena vacía— ", nulo o no definido. No use el objeto vacío {}, ya que
renderizará el JSON stringificado del objeto vacío.

Digamos que su HTML se veía como el Listado 2-7, con tres propiedades de datos emptyObject,
emptyString y nullProperty, y con los valores de un objeto vacío, una cadena vacía y
nulo asignado en consecuencia en la aplicación. En ese caso, el HTML se mostraría como en la Figura 2-4.
Observe cómo el objeto vacío tiene corchetes.

Listing 2-7. HTML with emptyObject, emptyString, and nullProperty

```
<!-- Div to Mount App -->
<div id="app">
    <p>emptyObject: {{ emptyObject }}</p>
    <p>emptyString: {{ emptyString }}</p>
    <p>nullProperty: {{ nullProperty }}</p>
</div>
<!-- Reference to Vue.js library -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- Script Element for our App -->
<script>
    var app = new Vue({
        el: '#app',
        data: {
            emptyObject: {},
            emptyString: ",
            nullProperty: null
        }
    });
</script>
```

Los nombres de las propiedades del objeto de datos no deben comenzar con $ o _. Cualquier propiedad
que comienzan con $ o _ no se agregarán al sistema reactivo, ya que podrían causar
conflictos con las propiedades y métodos internos de Vue. Dado que no se agregarán a la
sistema reactivo, tampoco se puede acceder a ellos en la plantilla.

El uso de un valor que comience con $ o _ en la plantilla causará un error.
El listado 2-8 muestra una propiedad que comienza con $ y otra que comienza con _. Tratando de usar
estos valores en la plantilla causan un error de referencia en tiempo de ejecución (consulte la Figura 2-5), ya que
Vue no tiene referencias a estas propiedades en el sistema reactivo.

Listing 2-8. Trying to Use Data Properties That Start with $ or _

```
var app = new Vue({
    el: '#app',
    data: {
        propertyName: 'Hello from Getting to Know Vue.js!',
        _propertyName: 'This will not be added to the reactive system.',
        $propertyName: 'This will not be added to the reactive system.'
    },
    template: `<div>
                    <div>{{ propertyName }}</div>
                    <div>{{ _propertyName }}</div>
                    <div>{{ $propertyName }}</div>
                </div>`
});
```

Si incluye una propiedad que comienza con $ o _, puede acceder a ella en su
instancia de Vue de la propiedad $ data.

Cuando se crea una instancia de Vue, el objeto de datos originalmente incluido se agrega a
La instancia como una propiedad con el nombre $ data. Por lo tanto, si asigna su instancia de Vue a un
variable llamada aplicación, puede acceder al objeto de datos original en la aplicación. $ data.propertyName.
También podrá acceder a él mediante métodos que utilizan este contexto en lugar de hacerlo a través de un
Se guardó la referencia a la instancia this. $ data.propertyName.







