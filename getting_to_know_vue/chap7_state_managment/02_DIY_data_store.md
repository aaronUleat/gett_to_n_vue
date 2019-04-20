### DIY Data Store

Una alternativa al objeto de datos simple sería crear el suyo propio; llamémoslo un bricolaje
(Hazlo tú mismo) almacén de datos. Usamos un objeto de JavaScript para mantener los datos que queremos poder
para compartir como el objeto de datos simple, pero agregamos métodos para cambiar / actualizar esos datos
En lugar de cambiarlo directamente. Esto nos permite entender mejor cuándo y cómo
Se están cambiando los datos.

En el Listado 7-2, agregamos algunas cosas a nuestro objeto de datos compartido. Ahora tenemos un
propiedad llamada devMode para indicar si queremos que se registren cosas adicionales en la consola.
Los valores que estamos compartiendo ahora residen en una propiedad estatal. En nuestros casos Vue, es el
Estado propiedad que utilizamos para nuestro atributo compartido de los datos. Y tenemos métodos para
modifique el (los) valor (es) de nuestro estado: aumente el valor, disminuya el valor y establezca el valor.

Listing 7-2. DIY Data Store

```
var sharedData = {
  devMode: true,
  state: {
    value: 1
  },
  increaseValue() {
    if (this.devMode) {
      console.log('increaseValue() called');
    }
    this.state.value++;
  },
  decreaseValue() {
    if (this.devMode) {
      console.log('decreaseValue() called');
    }
    this.state.value--;
  },
  setValue(newValue) {
    if (this.devMode) {
      console.log('setValue() called with newValue: ', newValue);
    }
    this.state.value = newValue;
      }
    };

```

En los métodos para alterar el estado, verificamos si devMode es verdadero. Si es así, registramos un mensaje.
a la consola. Nos gustaría establecer esto en falso o eliminar la propiedad devMode
Antes de desplegarlo a producción. Una vez que esté en producción, podremos convertir
Modo de uso de la consola de herramientas de desarrollo del navegador y configuración sharedData.devMode = true
a mano.

Para actualizar los datos en sharedData, llamamos al método off de sharedData
Objeto que corresponde a la acción que queremos realizar. ¿Quieres aumentar el valor?
Llame a sharedData.increaseValue (). ¿Quieres establecer el valor en 1? Llame a sharedData.
setValue (1). Puedes ver esto en el Listado 7-3.

Listing 7-3. Consuming a DIY Data Store

```
var app1 = new Vue({
  el: '#app1',
  data: {
    shared: sharedData.state,
    private: {}
  },
  template: `
    <h1>App 1 Shared Value: {{shared.value}}</h1>
  `
});
var app2 = new Vue({
  el: '#app2',
  data: {
    shared: sharedData.state,
    private: {}
  },
  methods: {
    increase: function() {
      sharedData.increaseValue();
    },
    decrease: function() {
          sharedData.decreaseValue();
        },
        reset: function() {
          sharedData.setValue(1);
        }
      },
      template: `
        <div>
          <h1>App 2 Shared Value: {{shared.value}}</h1>
          <button v-on:click='increase'>+</button>
          <button v-on:click='decrease'>-</button>
          <button v-on:click='reset'>reset</button>
        </div>
      `
    });
```

Puede ver que, en lugar de cambiar los datos en nuestra instancia de Vue, estamos utilizando el
aumentar, disminuir y restablecer los métodos para llamar a los métodos en los datos compartidos.
Esto hace que las cosas sean un poco más manejables ya que tenemos un lugar donde todos los datos
se producen cambios.

