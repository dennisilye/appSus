import bookDescription from "../cmps/book-description.cmp.js"
import { bookService } from '../services/book-service.js';
import bookReview from '../cmps/review-add-cmp.js';

export default {
    template: `
        <section v-if="book" class="book-details flex justify-center align-items ">
            <div>
                <img class="img-container" :src="book.thumbnail" />
            </div>
            <div>
            <h3>Book Details:</h3>
            <h4 v-if="book.listPrice.isOnSale">on Sale!!!</h4>
            <p>Title : {{book.title}}</p>
            <p>Price : <span v-bind:class="priceColor">{{book.listPrice.amount}}</span></p>
            <p>{{ pageCount }}</p>
            <p>{{ publishedDate }}</p>
            <book-review></book-review>
            <book-description class="book-description" :book="book"></book-description>
            <!-- <button @click="$emit('close')" >X</button> -->
        </div>
        <div>
        </div>
        <router-link :to="'/book/'+prevBookId">< Prev Book</router-link>      
        <router-link :to="'/book/'+nextBookId">Next Book ></router-link>      
        </section>
        <section v-else class="loader app-main">
            <h2>Loading...</h2>
        </section>
    `,
    data() {
        return {
            book: null,
            nextBookId: null,
            prevBookId: null,
        }
    },
    created() {
        const { bookId } = this.$route.params;
        bookService.getById(bookId)
            .then(book => this.book = book);


    },
    computed: {
        pageCount() {
            if (this.book.pageCount > 700) return 'Long Reading';
            else if (this.book.pageCount > 200) return 'Decent Reading';
            else if (this.book.pageCount < 100) return 'Light Reading';
            return '';
        },

        publishedDate() {
            let currentYear = new Date().getFullYear();
            if (currentYear - this.book.publishedDate > 10) return 'Veteran Book'
            else if (currentYear - this.book.publishedDate <= 1) return 'New!'
            return '';
        },

        priceColor() {
            if (this.book.listPrice.amount > 120) return 'red'
            else if (this.book.listPrice.amount < 20) return 'green'
            return '';
        }

    },
    watch: {
        '$route.params.bookId': {
            handler() {
                const { bookId } = this.$route.params;
                bookService.getById(bookId)
                    .then(book => this.book = book);
                bookService.getNextBookId(bookId)
                    .then(bookId => this.nextBookId = bookId);

            },
            immediate: true
        }
    },
    components: {
        bookDescription,
        bookReview

    }
}