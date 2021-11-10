import { bookService } from '../services/book-service.js';
import bookList from '../cmp/book-list.cmp.js';
import bookFilter from '../cmp/book-filter.cmp.js';
import bookDetails from './book-details.js';
import bookDescription from "../cmp/book-description.cmp.js"


export default {
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter" />
            <router-link to="/book/addbooks">Add a Book</router-link>      
            <book-list :books="booksToShow" @selected="selectBook" class="book-list grid clean-list justify-center" />
            <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails"/>
            
            
        </section>
    `,
    data() {
        return {
            books: [],
            selectedBook: null,
            filterBy: null
        };
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books);
        },
        selectBook(book) {
            this.selectedBook = book;
        },
        closeDetails() {
            this.selectedBook = null;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    created() {
        this.books = bookService.query()
            .then(books => this.books = books)


    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const { title, toPrice, fromPrice } = this.filterBy
            const searchStr = title.toLowerCase();
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr) &&
                    book.listPrice.amount >= fromPrice &&
                    book.listPrice.amount <= toPrice || !toPrice
            });
            return booksToShow;

        }
    },
    components: {
        bookList,
        bookFilter,
        bookDetails,
        bookDescription

    }
};