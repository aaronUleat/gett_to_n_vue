const eventBus = new Vue();

Vue.component("listado-productos", {
   props: ['productos'],
   template: `
    <section>
        <ul>
            <li v-for="producto in productos">
                {{producto.nombre}} - 
                <small>{{producto.precio.toFixed(2)}}</small>
                <button @click="eliminarProducto(producto.precio)" >-</button>
                <button @click="AnadirProducto(producto.precio)">+</button>
            </li>
        </ul>
    </section>
   `,
    methods: {
       anadirProducto(precio) {
           console.log(precio);
           this.$emit('anadido', precio);
       },
       eliminarProducto(precio) {

       }
    }
});

Vue.component("carrito-compra", {
   template: `
        <section>
            <h1>{{total.toFixed(2)}}$</h1>
            <h3>{{cantidadProductos}} productos</h3>
        </section>
   ` ,
    data() {
       return {
           cantidadProductos: 0,
           total: 0
       }
    }
});

var app = new Vue({
    el: 'main',
    data: {
        productos: [
            {nombre: 'Libro es6', precio: 39},
            {nombre: 'Portatil', precio: 1300},
            {nombre: 'Cafe', precio: 2},
            {nombre: 'Auriculares', precio: 80},
            {nombre: 'Moleskine', precio: 19}
        ]
    }
});