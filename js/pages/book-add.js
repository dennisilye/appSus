import { bookService } from '../services/book-service.js';

export default {
    template: `
        <section >
            <h1>Welcome to add books</h1>
            <form>
            <label>Search for book name</label>
            <input v-model.lazy.prevent="bookName" type="text" />
            </form>
            <div v-if="bookList.length">
                <p>Books</p>
                <li v-for="book,idx in bookList" :key="idx">
                    <h2 >{{book.title}}</h2>
                    <button  @click="saveBook(book.title)">+</button>
                </li>
            </div>
        </section>
    `,
    data() {
        return {
            bookName: '',
            bookList: [],

        }

    },
    created() {



    },
    methods: {
        saveBook(bookTitle) {
            const bookToSave = this.bookList.find(book => book.title === bookTitle)
            bookService.save(bookToSave)
        },
        getBookProps({ id, volumeInfo }) {
            return {
                id: id,
                title: volumeInfo.title || 'unknown',
                author: volumeInfo.authors,
                thumbnail: volumeInfo.imageLinks.thumbnail,
                description: 'description',
                pageCount: volumeInfo.pageCount || 300,
                listPrice: { "amount": Math.round(Math.random() * 150), "currencyCode": "EUR", "isOnSale": false }

            }

        }

    },
    watch: {
        bookName: {
            handler(newVal) {
                if (this.bookList) this.bookList = []
                const books = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${newVal}`)
                    .then(books => books.data.items)
                    .then(books => {
                        this.bookList = books.map(book => {
                            return this.getBookProps(book)


                        })


                    })


            }
        }

    },

}