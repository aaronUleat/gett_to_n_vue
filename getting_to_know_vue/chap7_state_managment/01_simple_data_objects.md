### Simple Data Objects

La forma más básica de administrar y compartir datos es con un objeto JavaScript simple que tiene
Algunas propiedades con valores. Este objeto luego se pasa a varias instancias de Vue para
Comparte el acceso a los mismos valores.

Listing 7-1. Basic Data Sharing

```
let sharedData = {
    value: 1
}

let app1 = new Vue({
    el: "#app1",
    data: {
        shared: sharedData,
        private: {}
    },
    template: `
        <h1>App 1 Shared Value: {{shared.value}}</h1>
    `
});

let app2 = new Vue({
    el: "#app2",
    data: {
        shared: sharedData,
        private: {}
    },
    methods: {
        increase: function () {
            this.$data.shared.value++;
        },
        decrease: function () {
            sharedData.value--;
        }
    },
    template: `
        <div>
          <h1>App 2 Shared Value: {{shared.value}}</h1>
          <button v-on:click="increase">+</button>
          <button v-on:click="decrease">-</button>
        </div>
    `
});
```



Puedes ver que tenemos un objeto JavaScript separado que tiene una propiedad, valor. Esta
el objeto se utiliza como propiedad de datos para dos instancias diferentes de Vue, app1 y app2.
En app2, tenemos dos botones para cambiar los valores del objeto sharedData a través de
Un método de aumento y disminución. En el método de aumento, utilizamos las instancias de Vue.
referencia al objeto de datos original que se almacenó cuando se creó la instancia con
a través de esto. $ datos. En el método de disminución, manipulamos directamente el JavaScript.
Objeto que se utilizó como valor para la propiedad de datos.

En la Figura 7-1, puede ver que al hacer clic en el botón + tres veces se obtienen los valores
de las dos instancias de Vue siendo actualizadas.

Esto parece una solución de trabajo. Sin embargo, la cosa es, como su aplicación.
se vuelve más complejo, será cada vez más difícil verificar que los datos compartidos
se está cambiando correctamente, ya que cada instancia de Vue con la que se comparte puede cambiarlo
directamente.