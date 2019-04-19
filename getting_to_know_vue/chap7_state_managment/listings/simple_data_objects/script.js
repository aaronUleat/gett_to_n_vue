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