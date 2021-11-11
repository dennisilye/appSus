// import { bookService } from "../../../services/book-service.js";
import { emailService } from "../services/email-service.js";
import  emailList  from "../cmps/email-list.js"
import  emailNavbar  from "../cmps/email-navbar.js"
import emailCompose from '../cmps/email-compose.js';

export default {
    template: `
        <section class="email-app flex">
            <!-- <book-filter @filtered="setFilter" /> -->
            
            <email-navbar @composing="composing"></email-navbar>
            <!-- <router-link to="/addbooks">Add a Book</router-link>       -->
            <section>
            <email-list :emails="emails"  class="email-main-container" />
            </section>
            <email-compose v-if="isComposing"></email-compose>
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails"/> -->
            
            
        </section>
    `,
    data() {
        return {
            emails: [],
            isComposing: false,
            selectedEmail: null,
            filterBy: null

        };
    },
    created() {
        this.emails = emailService.query()
            .then(emails => this.emails = emails)


    },
    methods: {
        // loadEmails() {
        //     emailService.query()
        //         .then(emails => this.emails = emails);
        // },
        composing() {
            this.isComposing = !this.isComposing
        }



    },
    computed: {

    },
    components: {
        emailList,
        emailNavbar,
        emailCompose
        // bookList,
        // bookFilter,
        // bookDetails,
        // bookDescription

    }
};