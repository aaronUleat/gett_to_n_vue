var app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                title: 'Entertaining Kids Book',
                price: 4.99,
                id: 0,
                genres: ['kids', 'fiction']
            },
            {
                title: 'Teen Drama',
                price: 5.99,
                id: 1,
                genres: ['teen', 'fiction']
            },
            {
                title: 'Boring Facts',
                price: 6.99,
                id: 2,
                genres: ['adult', 'non-fiction']
            },
            {
                title: 'Overly Complex Story',
                price: 7.99,
                id: 3,
                genres: ['adult', 'science fiction', 'fiction']
            },
            {
                title: 'Facts for Teens',
                price: 3.99,
                id: 4,
                genres: ['teen', 'non-fiction']
            }
        ]
    },
    template: `
        <ul>
             <li v-for="book in books" :key="book.id"> 
                <p><strong>ID:</strong>{{book.id}}</p>
                <p><strong>Title:</strong>{{book.title}}</p> 
                <p><strong>Genres:</strong> 
                    <span v-for="(genre, index) in book.genres"> 
                    {{genre}}
                        <span v-if="index < book.genres.length - 1">, </span>
                    </span> </p> 
            </li>
         
        </ul>
    `,
    methods: {
        teenFilter: function() {
            this.books = this.books.filter( genre => genre === 'teen') >= 0
        }
    },
    set: function () {
        let indexToReplace = 0;
        var newBook = {
            title: "Newer Entertaining Kids Book",
            price: 4.99,
            id: 0,
            genres: ['kids', 'fiction']
        };
        Vue.set(this.books, indexToReplace, newBook);
    },
    splice: function() {
        var indexToReplace = 0;
        var newBook = {
            title: "New Entertaning for the kids book",
            price: 5.99,
            id: 0,
            genre: ['kids', 'fiction']
        };
        this.books.splice(indexToReplace, 1, newBook);
    },
    resize: function() {
        this.books.length = 1;
        this.books.splice(0);
    }
});