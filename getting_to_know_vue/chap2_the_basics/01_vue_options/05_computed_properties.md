## Computed Properties

Los computed properties son muy similares a los métodos, con una diferencia importante: la
los resultados se almacenan en caché. Los valores se actualizan solo cuando los valores que se calculan
La propiedad se basa en el cambio. En el Listado 2-10, cada vez que se representa la página, el método
Se llama para obtener el valor. La propiedad calculada en el Listado 2-11 logra lo mismo
resultados como cuando usamos un método, pero no calcula la cadena en cada render.

Listing 2-11. Computed Property.

```
var app = new Vue({
    el: '#app',
    data: {
        text: 'Getting to Know Vue.js'
    },
    template: `<div>{{ capitalizedText }}</div>`,
    computed: {
        capitalizedText: function () {
            return this.text.toUpperCase();
        }
    }
});
```


