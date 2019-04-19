### Forms

Obteniendo formulario de usuario de entrada y variable podemos gestionar uno de los principales
Ventajas de usar un framework como Vue. Vue nos proporciona la directiva v-model para
Enlazar datos a nuestras entradas.

#### v-model

Con v-model, tendremos enlace de datos de dos vías desde la variable de datos de respaldo a
la interfaz de usuario. Con enlace de datos bidireccional si el usuario realiza un cambio en el modelo de datos a través de un
Método, veremos la interfaz de usuario que muestra la actualización. Si hacemos un cambio en la interfaz de usuario, los datos
El modelo será actualizado.

Una cosa importante a entender es que el valor o marcado o
Atributos seleccionados de los elementos. El modelo de datos creado cuando la instancia de Vue es
inicializado es la última fuente de verdad para Vue.

#### Inputs

Para los siguientes ejemplos de `<input />`, el modelo de datos se verá como el Listado 6-1 con
Entradas que contienen una propiedad para cada ejemplo.

Listing 6-1. The Input Example Data Model

```
data: {
  inputs: {
    text: ",
    numberAsString: 0,
    numberAsNumber: 0,
    date: ",
    password: ",
    checkbox: false,
    checkboxes: [],
    radios: ",
    radiosPreset: 'rollout',
    radiosDynamic: ",
    radiosDynamicOptions: [
      {
        label: 'Blue',
        value: 'Light'
      },
      {
        label: 'Red',
        value: 'Dark'
      }
    ],
    file: ",
    select: ",
    multiselect: []
  },
```

Cada ejemplo tendrá una salida, por lo que podemos ver lo que contiene el modelo
interactuar con el `<input />`.

#### Text

Casi todas las formas necesitarán una entrada de texto de algún tipo. Para enlazar nuestros datos al texto.
entrada, agregamos v-model = "inputs.text" como un atributo. Nuestra entrada debe ser como
Listado 6-2 con su modelo de pantalla acompañante. Puedes ver cómo se ve esto en el
navegador en la figura 6-1.

Listing 6-2. Text Input Data Binding

```
<h4>Text</h4>
<input type="text" v-model="inputs.text" />
<p>
    <strong>Text:</strong> {{inputs.text}}
</p>
```

#### Number
El número `<input />` se enlaza de la misma manera que el texto con v-model = "inputs.numberAsString".
Tampoco convierte el valor de la entrada en un número, por lo que el modelo de datos contendrá
una cuerda Podemos convertir el número en un método o podemos usar el modificador .number. para
enlazar con el modificador, agregamos lo siguiente como un atributo v-model.number = "entradas.
numberAsNumber ". Para ver el tipo de número contenido en el modelo de datos, agregamos un
Salida que muestra el tipo de valor que estamos viendo.

El listado 6-3 muestra dos entradas con dos salidas cada una. Las salidas son el valor y
El tipo del valor de cada entrada. Puedes ver en la Figura 6-2 cuando ingresamos 4 en
Ambas entradas, ese tipo de numberAsString es una cadena y el tipo de numberAsNumber es
número.

Listing 6-3. Binding to Number Inputs with Types Displayed

```
<h4>Number as String</h4>
<input type="number" v-model="inputs.numberAsString" />
<p>
    <strong>Number:</strong> {{inputs.numberAsString}}
</p>
<p>
    <strong>Typeof numberAsString:</strong> {{typeof inputs.
numberAsString}}
</p>
<h4>Number as Number</h4>
<input type="number" v-model.number="inputs.numberAsNumber" />
<p>
    <strong>Number:</strong> {{inputs.numberAsNumber}}
</p>
<p>
    <strong>Typeof numberAsNumber:</strong> {{typeof inputs.
numberAsNumber}}
</p>
```

#### Date

La fecha `<input />` s se ve un poco diferente en cada navegador, pero los resultados deben ser
similar, que es una cadena que es YYYY-MM-DD. Cuando miramos el valor de las entradas.
fecha enlazada con v-model = "inputs.date" en una fecha `<input />`, deberíamos ver el
Fecha seleccionada en ese formato.

El Listado 6-4 muestra cómo enlazar la entrada de fecha y la Figura 6-3 muestra cómo se ve
el navegador.

Listing 6-4. Using v-model with an Input Type Date

```
<h4>Date</h4>
<input type="date" v-model="inputs.date" />
<p>
    <strong>Date:</strong> {{inputs.date}}
</p>
```

#### Password

Las contraseñas se unen igual que text `<input />`. La única diferencia es que puedes
ver lo que se está escribiendo. El listado 6-5 muestra v-model con un tipo de contraseña `<input />`
y la Figura 6-4 lo muestra en el navegador si escribimos "Conociendo Vue.js" en el
`<Input />`.

Listing 6-5. Using v-model with a Password Input

```
<h4>Password</h4>
<input type="password" v-model="inputs.password" />
<p>
    <strong>Password:</strong> {{inputs.password}}
</p>
```

Precaución Si va a recopilar contraseñas de usuario, no las envíe en un
Manera insegura a través de internet.

#### Check Boxes

Una casilla de verificación es el epítome de sí o no, verdadero o falso ... bueno, en realidad es solo verdadero o falso.
¿Qué formulario estaría completo sin una casilla de verificación? Usar v-model con una casilla de verificación es
lo mismo que usar el otro <input v-model = "inputs.checkbox" />.

Listing 6-6. Using v-model with a Check Box

```
<h4>Checkbox</h4>
<input type="checkbox" v-model="inputs.checkbox" value="myCheckBox"
id="myCheckBox" />
<label for="myCheckBox">My Check Box</label>
<p>
    <strong>Checkbox:</strong> {{inputs.checkbox}}
</p>
```

#### Groups of Check Boxes.

¿Qué podría ser mejor que una casilla de verificación? Un grupo de casillas de verificación! Con Vue podemos unir
más de una casilla de verificación para la misma propiedad de datos. Si tenemos la propiedad de datos como
matriz, Vue colocará el valor de la casilla de verificación en la matriz a medida que se selecciona.

En el Listado 6-7 usamos la propiedad de las casillas de verificación que inicializamos como una matriz en
Listado 6-1. En la Figura 6-6, seleccionaremos las casillas de verificación de Miny y Enny y
Deben verlos salida en el orden en que se seleccionan.

Listing 6-7. Using v-model with Multiple Check Boxes

```
<h4>Checkboxes</h4>
<input v-model="inputs.checkboxes" type="checkbox" value="eeny" id="eeny" />
<label for="eeny">Enny</label>
<input v-model="inputs.checkboxes" type="checkbox" value="meeny" id="meeny" />
<label for="meeny">Meenny</label>
<input v-model="inputs.checkboxes" type="checkbox" value="miny" id="miny" />
<label for="miny">Miny</label>
<input v-model="inputs.checkboxes" type="checkbox" value="mo" id="mo" />
<label for="mo">Mo</label>
<p>
    <strong>Checkboxes:</strong> {{inputs.checkboxes}}
</p>
```

#### Radio Buttons

Los botones de opción le permiten presentar a los usuarios una selección de opciones similar a una
Grupo de casillas de verificación, pero el usuario puede elegir solo una. Cada botón de opción estará enlazado.
a través del modelo v a la misma propiedad de datos de respaldo usando v-model = "inputs.radios" como
El atributo vinculante.
El Listado 6-8 muestra cuatro botones de opción y muestra el valor del seleccionado
debajo. Puedes ver los resultados de seleccionar Go Joe! en la figura 6-7.

Listing 6-8. Using v-model with Radio Buttons

```
<h4>Radios</h4>
<input v-model="inputs.radios" type="radio" value="rollout" id="rollout" />
<label for="rollout">Autobots, transform and roll out!</label>
<br>
<input v-model="inputs.radios" type="radio" value="decepticons-retreat"
id="retreat" />
<label for="retreat">Decepticons, retreat!</label>
<br>
<input v-model="inputs.radios" type="radio" value="go-joe" id="go-joe" />
<label for="go-joe">Go Joe!</label>
<br>
<input v-model="inputs.radios" type="radio" value="cobra-retreat"
id="cobraretreat" />
<label for="cobraretreat">Cobra retreat. RETREAT!</label>
<p>
    <strong>Radios:</strong> {{inputs.radios}}
</p>
```

#### Preset Radio Buttons
También podemos establecer un valor preestablecido para el usuario estableciendo el valor de la propiedad de respaldo en
el mismo valor que uno de los botones de radio. Listado 6-9 es esencialmente lo mismo que
Listado 6-8, pero usamos la propiedad radiosPreset como la propiedad de respaldo que contiene
Despliegue como el valor. Cuando cargamos la página en la Figura 6-8, Autobots, transformamos y rodamos
¡afuera! serán seleccionados para nosotros.

Listing 6-9. Setting a Preset Value for Radio Buttons.

```
<h4>Radios Preset</h4>
<input v-model="inputs.radiosPreset" type="radio" value="rollout"
id="rollout" />
<label for="rollout">Autobots, transform and roll out!</label>
<br>
<input v-model="inputs.radiosPreset" type="radio" value="decepticons-­
retreat" id="retreat" />
<label for="retreat">Decepticons, retreat!</label>
<br>
<input v-model="inputs.radiosPreset" type="radio" value="go-joe" id="go-­joe" />
<label for="go-joe">Go Joe!</label>
<br>
<input v-model="inputs.radiosPreset" type="radio" value="cobra-retreat"
id="cobraretreat" />
<label for="cobraretreat">Cobra retreat. RETREAT!</label>
<p>
    <strong>Radios:</strong> {{inputs.radiosPreset}}
</p>
```

#### Radio Buttons: Dynamic Options.

Es posible que se requiera la creación de botones de opción a partir de una lista de opciones, ya que podrían aparecer
desde el servidor. En el Listado 6-10, usaremos v-for para crear un botón de opción para cada opción
en la matriz radiosDynamicOptions.

Listing 6-10. Creating Radio Buttons Dynamically

```
<h4>Radios Dynamic Options</h4>
<template v-for="(option, index) in inputs.radiosDynamicOptions">
    <input v-model="inputs.radiosDynamic" type="radio"
v-bind:value="option.value" v-bind:id="option.value" />
    <label v-bind:for="option.value">{{option.label}}</label>
    <br v-if="index < inputs.radiosDynamicOptions.length">
</template>
<p>
    <strong>Radios:</strong> {{inputs.radiosDynamic}}
</p>
```

#### File

Con las entradas de archivos, no se puede usar v-model. Para acceder al valor seleccionado, el evento de cambio.
Tendrá que ser utilizado con v-on. El Listado 6-11 muestra cómo usamos el archivo de eventos `<input />` ’s
cambio de evento para obtener el nombre del archivo.

Listing 6-11. Using the Change Event for File Input.

```
var app = new Vue({
  el: '#app',
  data: {
    fileName: "
  },
  methods: {
    fileChanged: function(event) {
      console.log(event);
      this.fileName = event.target.files[0].name;
    }
  },
  template: `
    <h4>File</h4>
    <!-- <input type="file" v-model="inputs.file" /> -->
    <input type="file" v-on:change="fileChanged($event)" />
    <p>
        <strong>File:</strong> {{fileName}}
    </p>
  `
});
```

#### Hidden

Ya que estamos usando Vue y hacemos que el navegador realice una publicación de página completa en el servidor para
enviar el formulario, esto significaría que los usuarios tendrían que esperar a que se cargue nuestra aplicación
otra vez. No utilizaremos campos ocultos en este caso. Cualquier valor que queramos enviar puede ser agregado.
a nuestra publicación en el servidor en JavaScript.

#### Textarea Elements

Los elementos `<textarea>` nos permiten recopilar respuestas más detalladas de los usuarios.
Usar v-model con un <textarea> es sencillo, como puede ver en el Listado 6-12.
Aplicamos los espacios en blanco: pre-línea; Estilo a nuestro elemento de salida para preservar la
espacio en blanco En la Figura 6-11, podemos ver que cada palabra aparece en una nueva línea en nuestra
salida. Escribimos "Conociendo Vue.js" y presionamos Enter entre cada línea.

Listing 6-12. Using v-model with a textarea

```
<h4>Text</h4>
<textarea v-model="text" cols="50" style="height: 200px;"></textarea>
<p style="white-space: pre-line;">
    {{text}}
</p>
```

#### Select

Con un `<select>`, nos unimos a él y obtenemos el valor seleccionado. El listado 6-13 muestra cómo
para usar v-model con un <select>, incluyendo tener primero las opciones deshabilitadas recomendadas.
Proporcionar una primera opción deshabilitada ayuda al iOS a no registrar un evento de cambio cuando la página
Se carga y se selecciona la primera opción.

Listing 6-13. Using v-model with a select

```
<h4>Select</h4>
<select v-model="select">
    <option disabled value="">Select your Show
</option>
    <option value="startrek">Star Trek</option>
    <option value="starwars">Star Wars</option>
    <option value="firefly">Firefly</option>
    <option value="drwho">Dr. Who</option>
</select>
<p>
    <strong>Selected:</strong> {{select}}
</p>
```

#### Multiple Selects

Las selecciones múltiples se comportan de manera similar al uso de múltiples casillas de verificación con el mismo respaldo
propiedad. Los valores seleccionados se agregan como una matriz. Listado 6-14 usa multiselect con
v-model y la Figura 6-13 muestran los resultados de seleccionar la segunda y cuarta opciones.

Listing 6-14. Using v-model with a Multiselect

```
<h4>Multi-Select</h4>
<select v-model="multiSelect" multiple>
    <option value="startrek">Star Trek</option>
    <option value="starwars">Star Wars</option>
    <option value="firefly">Firefly</option>
    <option value="drwho">Dr. Who</option>
    </select>
    <p>
        <strong>Multi-Selected:</strong> {{multiSelect}}
    </p>
```

### Modifiers

Vue nos proporciona tres modificadores para usar con entradas:

* .lazy: utiliza el evento de cambio en lugar del evento de entrada para actualizar el
modelo de datos.
* .number: intenta convertir el valor en un número al asignarlo a la
modelo de datos.
* .trim: elimina el espacio en blanco cuando se asigna al modelo de datos.

#### Lazy

Con el modificador .lazy, el modelo se actualiza cuando ocurre el evento de cambio. Para ver esto en
acción, puede utilizar el Listado 6-15 y verlo en el navegador. La salida se mostrará como en
Figura 6-14 después de salir del cuadro de entrada.

Listing 6-15. Using the .lazy Modifier

```
<h4>Lazy</h4>
<input v-model.lazy="lazy" type="text" />
<p>
    <strong>Lazy:</strong> {{lazy}}
</p>
```

Figura 6-14. Uso del modificador .lazy para cambiar el modelo después de que se pierda la entrada
Enfócate y dispara un evento de cambio.

#### Number

El modificador de número convierte el valor de la entrada en un número y podemos usarlo en
`<input />` s con el tipo de número. En el Listado 6-16, usamos .number para emitir nuestra entrada de texto
a un numero En la Figura 6-15 puede ver el resultado y los resultados del uso de typeof en nuestro
campos de respaldo de datos.

Listing 6-16. Using .number Modifier on a Text Field

```
<h4>Number</h4>
<input v-model.number="number" type="text" />
<p>
    <strong>Number:</strong> {{number}}
</p>
<p>
    <strong>Type of Number:</strong> {{typeof number}}
</p>
```

Figura 6-15. Usando el modificador .number en un campo de texto con la salida del
valor y el tipo de cuando se introduce el número 8

#### Trim

El modificador .trim se utiliza para eliminar los espacios en blanco desde el principio y el final de la
Valor antes de actualizar el modelo de datos. El listado 6-17 muestra este efecto rodeando el
salida con comillas para que podamos ver cuánto espacio en blanco hay al principio y al final de
el valor. También tenemos una entrada con salida que no aplica el modificador de ajuste, por lo que
Se puede ver como se comporta.

En la Figura 6-16, ingresamos "Vue.js." (es decir, cinco espacios antes y cinco después de Vue.js) en
Ambas entradas. En la entrada Sin recortar, puede ver el espacio entre Vue.js y la cita
marcas. No hay espacio en la salida de recorte.

Listing 6-17. Using the .trim Modifier

```
<h4>No Trim</h4>
<input v-model="noTrim" type="text" />
<p>
    <strong>No Trim:</strong> "{{noTrim}}"
</p>
<h4>Trim</h4>
<input v-model.trim="trim" type="text" />
<p>
    <strong>Trim:</strong> "{{trim}}"
</p>
```