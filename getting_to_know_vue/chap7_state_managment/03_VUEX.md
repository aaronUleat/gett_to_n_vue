### Vuex

Después de haber aprendido sobre el almacén de datos de bricolaje, probablemente se pregunte qué otras opciones
Podría ser necesario para la gestión del estado. Vuex es una biblioteca mantenida por el equipo de Vue que
proporciona administración del estado junto con algunos detalles o características adicionales. El oficial
El complemento de la herramienta Vue dev permite a Vuex realizar la depuración de viajes en el tiempo junto con la importación
y exportando el estado. Vuex está diseñado para actuar como estado de aplicación para todos los Vue
Componentes de su aplicación.

#### Promise

Vuex requiere que el navegador soporte promesas. Si planeas apoyar
Los navegadores que no tienen una implementación de promesas, necesitarán un polyfill.

Una biblioteca de promesas que funciona con Vuex es es6-promise. Puede ser referenciado o
descargado de un CDN en https://cdn.jsdelivr.net/npm/es6-promise@4/dist/
es6-promise.auto.js. También se puede instalar con NPM usando npm install es6-
promesa - salve o con hilo, usando hilo agregue es6-promesa. Asegúrese de incluir una importación
declaración para el polyfill en el que está utilizando la importación Vuex 'es6-promise / auto' ;.

Nota Vuex resuelve algunos de los problemas más complicados, por lo que para demostrar
Mejor, necesitamos un ejemplo más complicado. Estaremos usando la guerra de las galaxias.
API, https://swapi.co/, para obtener una lista de naves estelares y luego cargar los pilotos de un
nave seleccionada con la biblioteca de Axios en https://github.com/axios/axios.

#### Options

Con todo configurado para su uso, podemos continuar con la configuración de nuestra instancia de Vuex. A
hacer eso, probablemente deberíamos tener una comprensión de qué propiedades pasamos cuando
Creando una nueva instancia de Vuex.

#### State

La propiedad estatal es similar a la propiedad estatal que usamos en nuestro almacén de datos de bricolaje. Eso
Contiene todos los datos que estamos compartiendo con Vuex. Dado que nuestras aplicaciones Vue solo tendrán una
En la instancia de Vuex, el estado es un único objeto de JavaScript que contiene el estado para toda la
la aplicación Listado 7-5 muestra una tienda básica.

Listing 7-5. State Setup

```
state: {
  ship: {},
  ships: { count: 0, results: [] },
  pilots: []
},
```

#### Getters

La propiedad estatal es similar a la propiedad estatal que usamos en nuestro almacén de datos de bricolaje. Eso
Contiene todos los datos que estamos compartiendo con Vuex. Dado que nuestras aplicaciones Vue solo tendrán una
En la instancia de Vuex, el estado es un único objeto de JavaScript que contiene el estado para toda la
la aplicación Listado 7-5 muestra una tienda básica.

Una función getter recibe dos parámetros: estado y getters. La funcion del estado
Se utiliza para acceder a los valores de la tienda. La función getters se puede utilizar para combinar
resultados de otros captadores, lo que nos permite generar resultados más complicados en pequeños
raciones

El listado 7-6 muestra un captador que devuelve una matriz filtrada de naves que tienen una nave estelar_
clase de caza estelar. Entonces tenemos un segundo captador que devuelve el número de
Cazas estelares en nuestra lista actual.

Listing 7-6. Two Getters, One That Returns a List of Only Starfighter and One
That Returns the Number of Starfighters

```
onlyStarFighters: function(state) {
  return state.ships.results.filter(function(ship) {
    return ship.starship_class === 'Starfighter';
  });
},
onlyStarFightersCount: function(state, getters) {
  return getters.onlyStarFighters.length;
},
```

Un captador puede devolver los resultados de alguna lógica, como una cadena formateada, un nuevo número o
Una función. Cuando se devuelve una función, se puede utilizar para pasar un valor, como una ID a
busque en la tienda o algún otro valor para obtener los resultados del captador.
El listado 7-7 muestra un captador que devuelve una función. Esa función acepta la url.
parámetro y luego devuelve el barco con esa url.

Listing 7-7. A Getter Returning a Function That Accepts a Parameter to Evaluate
the Result

```
setShip: function(state) {
  return function(url) {
    return state.ships.results.find(function(ship) {
      return ship.url === url;
    });
  };
}
```

Los captadores de notas que devuelven una función se evalúan cada vez que se accede a ellos.

#### Mutations

La única forma de cambiar el valor de la tienda es a través de una mutación. Una mutacion consiste
de un tipo de cadena y una función de controlador. Una forma de pensar del tipo es que es como el
Nombre para el manejador. El manejador es una función que acepta al menos un parámetro,
Estado, y puede tener un segundo parámetro llamado payload. Si varios valores necesitan ser
Pasado a la mutación, podemos usar un objeto.

Dado que cada mutación se registra para realizar un seguimiento de los cambios, todas las mutaciones deben ser sincrónicas.
Si una mutación necesita realizar una acción que es asíncrona debido al uso de una devolución de llamada o
promesa, la lógica probablemente debería ser movida a una acción. Más sobre acciones a continuación.

Listing 7-8. Mutation Examples

```
mutations: {
  setShips: function(state, payload) {
    state.ships = payload.newShips;
  },
  setShip: function(state, payload) {
    state.ship = payload.newShip;
    },
      clearPilots: function(state) {
        state.pilots = [];
      },
      addPilot: function(state, payload) {
        state.pilots.push(payload.newPilot);
      }
    },
```

Para invocar, o llamar, una mutación, llamamos a commit en el objeto de almacén. Cuando llamamos
confirmar, podemos pasarle el tipo o nombre de la mutación a llamar y una carga útil, o
Puede pasarle un objeto que tenga una propiedad llamada tipo. El resto del objeto será el.
carga útil. Podemos ver ambas formas de llamar a commit en el Listado 7-9.
Podemos llamar a esto en el objeto de tienda que está almacenado como un objeto de JavaScript o podemos llamar
De nuestras instancias de Vue, haga referencia a la tienda que se pasó cuando creamos nuestro
ejemplo.

El listado 7-9 muestra cómo llamar a la confirmación en la tienda usando la tienda global de JavaScript
variable, la referencia de la instancia de Vue, junto con pasar una carga útil. También muestra
cómo pasar un objeto que especifica el tipo.

```
search: function(event) {
  store.dispatch('search', { searchText: event.target.value });
},
viewShip: function(url) {
  this.$store.dispatch({ type: 'setShip', url: url });
}
```

#### Actions

A veces necesitamos realizar una tarea que no sea síncrona, por lo que una mutación no
trabajo. Ahí es donde entran las acciones. Una acción puede ser asíncrona. Cualquier tarea que pueda
Requerir una devolución de llamada o un período de espera, como llamar a un servidor, debe ser una acción.
Cuando la tarea asíncrona haya finalizado, podremos llamar a commit con los resultados.
Esto preservará el historial de transacciones de nuestro Vuex y nos permitirá todas esas llamadas divertidas
a los servidores.
Las acciones siguen el mismo formato que las mutaciones con un tipo de cadena o nombre, y una
función de manejador La función de controlador acepta dos parámetros: contexto y carga útil.
El parámetro de contexto contiene las mismas propiedades y métodos que la tienda en un
mutación, lo que nos permite acceder al estado y cometer mutaciones.
Para llamar, o invocar, una acción, seguimos el mismo formato que cuando cometemos una
mutación, excepto que llamamos despacho en la tienda.
El listado 7-10 muestra tres acciones: buscar para buscar naves, setShip para configurar el
nave actual, y getPilots para obtener los pilotos una vez que se establece la nave. En el setPilots
acción, también usamos el método de envío para llamar a getPilots.

Listing 7-10. Action Examples

```
actions: {
  search: function(context, payload) {
    axios
      .get(`https://swapi.co/api/starships/?search=${payload.searchText}`)
      .then(response => {
        context.commit('setShips', { newShips: response.data });
      });
  },
  setShip: function(context, payload) {
    context.commit('clearPilots');
    context.commit('setShip', {
      newShip: context.getters.setShip(payload.url)
    });
    context.dispatch('getPilots', { urls: context.state.ship.pilots });
      },
      getPilots: function(context, payload) {
        payload.urls.forEach(function(url) {
          axios.get(url).then(response => {
            context.commit('addPilot', { newPilot: response.data });
          });
        });
      }
    }
```

Si ejecutamos el código que tenemos hasta ahora, podemos ver los datos que se comparten a través de dos Vue
instancias en la figura 7-2. En la Figura 7-3, después de seleccionar el Halcón Milenario, podemos
Vea las listas de pilotos debajo de los detalles de la nave como los resultados de las acciones y mutaciones.
realizando sus tareas. Al verlo "en vivo", puede ver cada piloto agregado como la llamada HTTP
El servidor devuelve los resultados para cada uno. Desafortunadamente es difícil mostrar esa parte
aquí.

#### Modules

Después de algunos lanzamientos, cualquier aplicación pequeña puede comenzar a aumentar de tamaño. Gestionando datos de mayor tamaño.
Las tiendas pueden convertirse en un reto. Para ayudarnos a lidiar con esto, Vuex nos permite
Declara una tienda en módulos. Cada módulo es como una declaración mini-Vuex con su propia
Estado, captadores, mutaciones y acciones.

Estos módulos nos permiten dividir nuestro almacén de datos en mandos manejables de la misma manera
De esta manera dividiríamos cualquier problema de programación más grande en más pequeño, más manejable
raciones

##### Basics

Usando nuestra aplicación de ejemplo que nos permite acceder a barcos y pilotos desde la API de Star Wars,
Podemos dividir nuestra definición Vuex existente en dos módulos: barcos y pilotos.
El listado 7-11 muestra nuestros módulos de transporte con el estado, los captadores, las mutaciones y las acciones.
Que se aplican solo a los barcos. El listado 7-12 muestra nuestro módulo de pilotos con el estado, captadores,
Mutaciones, y acciones que se aplican solo a los pilotos.

Listing 7-11. Ships Module Definition

```
var shipsModule = {
  state: {
    ship: {},
    ships: { count: 0, results: [] }
  },
  getters: {
    onlyStarFighters: function(state) {
      return state.ships.results.filter(function(ship) {
        return ship.starship_class === 'Starfighter';
      });
    },
    onlyStarFightersCount: function(state, getters) {
      return getters.onlyStarFighters.length;
    },
    setShip: function(state) {
      return function(url) {
        return state.ships.results.find(function(ship) {
          return ship.url === url;
        });
      };
    }
  },
  mutations: {
  setShips: function(state, payload) {
        state.ships = payload.newShips;
      },
      setShip: function(state, payload) {
        state.ship = payload.newShip;
      }
    },
    actions: {
      search: function(context, payload) {
        axios
          .get(`https://swapi.co/api/starships/?search=${payload.
  searchText}`)
          .then(response => {
            context.commit('setShips', { newShips: response.data });
          });
      },
      setShip: function(context, payload) {
        context.commit('clearPilots');
        context.commit('setShip', {
          newShip: context.getters.setShip(payload.url)
        });
        context.dispatch('getPilots', { urls: context.state.ship.pilots });
      }
    }
  };
```

Listing 7-12. Pilots Module Definition

```
var pilotsModule = {
  state: {
    pilots: []
  },
  getters: {},
  mutations: {
    clearPilots: function(state) {
      state.pilots = [];
      },
          addPilot: function(state, payload) {
            state.pilots.push(payload.newPilot);
          }
        },
        actions: {
          getPilots: function(context, payload) {
            payload.urls.forEach(function(url) {
              axios.get(url).then(response => {
                context.commit('addPilot', { newPilot: response.data });
              });
            });
          }
        }
      };
```

Al observar estas definiciones de módulos, puede observar que no usan Vuex en
este punto. Son simples objetos de JavaScript. Para utilizar estas definiciones de módulo, creamos
una nueva tienda Vuex usando las opciones del módulo. En la propiedad de módulos definimos cada
Módulo con un nombre de propiedad y asigne la definición como el valor.
El listado 7-13 muestra nuestra nueva tienda Vuex utilizando shipsModule y pilotsModule.

Listing 7-13. Using Module Definitions

```
var store = new Vuex.Store({
  modules: {
    ships: shipsModule,
    pilots: pilotsModule
  }
});
```

En su mayor parte, esto hará que nuestra aplicación funcione de la misma manera que antes de comenzar a usar
módulos El único cambio que tenemos que hacer es cuando hacemos referencia al estado en nuestro
propiedades computadas.
Fuera del módulo para acceder a nuestro estado desde shipsModule, ahora necesitaremos usar
este. $ store.state.ships para obtener acceso al estado de los envíos y usar este. $ store.state.
Pilotos para acceder al estado de pilotos.

Nota Dentro del módulo todavía usamos el estado para acceder al estado actual
propiedades, como se ve en los listados 7-11 y 7-12.

El listado 7-14 muestra una actualización de nuestras propiedades computadas de app2, que tienen acceso al
Estados de buques y pilotos.

Listing 7-14. Accessing Module State

```
computed: {
  currentShip: function() {
    return this.$store.state.ships.ship;
  },
  ships: function() {
    return this.$store.state.ships.ships.results;
  },
  shipCount: function() {
    return this.$store.state.ships.ships.count;
  },
  starfightersCount: function() {
    return this.$store.getters.onlyStarFightersCount;
  },
  pilots: function() {
    return this.$store.state..pilots;
  }
},
```

Después de actualizar nuestras propiedades computadas, todo funcionará igual que antes.
rompió las cosas en módulos.

##### Accessing RootState

En sus acciones y captadores, es posible que deba acceder al estado principal de su almacén de datos para
Obtener información de un módulo diferente. Esto es posible a través de un tercer parámetro que
se pasa tanto a las acciones como a los getters llamados rootState.

En el Listado 7-15, usamos el rootState en un getter que devuelve una lista de cadenas que dicen
el nombre actual de los pilotos seguido de "el piloto de" y el nombre del barco al acceder a la
enviar los nombres a través del estado raíz.

Listing 7-15. Using rootState to Access a Second Module State

```
pilotsWithShipName: function(state, getters, rootState) {
  return state.pilots.map(function(pilot) {
    return `${pilot.name} the pilot of ${rootState.ships.ship.name}`;
  });
}
```

##### Namespace

Dado que los módulos que creamos, barcos y pilotos, no tenían mucho en el camino
de nombres superpuestos de captadores, acciones y mutaciones, no sentí la necesidad de
espacio de nombres de los módulos. En algún momento, es posible que deba especificar qué módulos específicos
Debe manejar una acción, getter, o mutaciones.
Para asignar un espacio de nombres a un módulo, agregue espacio de nombres: verdadero como una de sus propiedades y
has terminado ... casi Ahora para acceder a las mutaciones desde fuera del módulo,
se llama a commit ('nombre_módulo / mutationName'). Para acceder a una acción, llamamos
dispatch ('moduleName / actionName'). Y para acceder a un captador, tenemos que usar
getters ['moduleName / getterName']. Note que estamos usando la notación de corchete para acceder
El getter desde la notación de puntos de JavaScript no nos permitirá usar el carácter / especial.
Dentro del módulo, podemos usar el método del espacio de nombres para acceder al
mutaciones, acciones y captadores o podemos llamarlos sin el espacio de nombre.
El listado 7-16 muestra cómo agregar la propiedad true: namespaced: true a nuestro pilotsModule.

Listing 7-16. Namespaced Module

```
var pilotsModule = {
  namespaced: true,
  //everything else stays the same
}
```

El listado 7-17 muestra cómo accedemos a las mutaciones de clearPilots y getPilots
acción desde shipsModule ahora que pilotsModule está usando un espacio de nombres.

Listing 7-17. Accessing a Namespaced Module

```
setShip: function(context, payload) {
  context.commit('pilots/clearPilots');
  context.commit('setShip', {
    newShip: context.getters.setShip(payload.url)
  });
  context.dispatch('pilots/getPilots', { urls: context.state.ship.pilots
});
}
```

También podemos decidir que una acción esté disponible globalmente registrándola como tal. A
registrar una acción como global, cambiamos la definición de la acción de una función a una
Objeto con dos propiedades: root y handler. La propiedad del manejador será la función.
que solíamos haber asignado a la acción. La propiedad raíz se establecerá en true.
El listado 7-18 muestra la acción getPilots establecida como una acción global.

```
getPilots: {
  root: true,
  handler: function(context, payload) {
    payload.urls.forEach(function(url) {
      axios.get(url).then(response => {
        context.commit('addPilot', { newPilot: response.data });
      });
    });
  }
}
```

Con un módulo de espacio de nombres, nuestros captadores obtienen un cuarto parámetro, llamado rootGetters. Nosotros
puede usar rootGetters para acceder a los getters desde otros módulos, de forma similar a como usamos
Nuestro parámetro rootState.
El Listado 7-19 muestra el programa de obtención de pilotsModule para pilotsWithShipName usando el
rootGetter para obtener todos los barcos para un piloto.

Listing 7-19. Using rootGetters to Access Getters in Different Modules

```
pilotsWithShipName: function(state, getters, rootState, rootGetters) {
  return state.pilots.map(function(pilot) {
    return `${
      pilot.name
    } flies ${rootGetters.getShipsWithPilotId(pilot.url).length} number of
the current ships`;
  });
}
```
