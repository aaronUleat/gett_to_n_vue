## v-if

Veamos el uso de v-if y veamos cómo se procesa en el DOM.
En el Listado 3-2, vamos a mostrar `<span>` Sí `<span>` después de 1: si el valor de sí es
verdadero y no muestra <span> No </span> después de 2: cuando el valor de no es falso. Puedes ver
en la Figura 3-3 cómo se ve todo en la página cuando se evalúa.

Listing 3-2. Using v-if to Conditionally Render Elements

```
var app = new Vue({
  el: '#app',
  data: {
    yes: true,
    no: false
  },
  template: `
    <div>
        <h1>
            1: <span v-if="yes">Yes</span>
        </h1>
        <h1>
            2: <span v-if="no">No</span>
        </h1>
    </div>
    `
});
```

Figura 3-3. Los resultados de usar v-if para renderizar condicionalmente elementos

Como el contenido de v-if se agrega al DOM solo si se evalúa como verdadero, cualquier
Las evaluaciones falsas no deben ser visibles en el inspector. Vamos a inspeccionar el elemento que
contiene 2: y vea si está ocultando un <span style="color: salmon"> No </span> (vea la Figura 3-4).
