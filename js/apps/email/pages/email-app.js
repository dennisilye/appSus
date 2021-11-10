// import { bookService } from "../../../services/book-service.js";
import { emailService } from "../services/email-service.js";
import  emailList  from "../cmps/email-list.js"
import  emailNavbar  from "../cmps/email-navbar.js"

export default {
    template: `
        <section class="email-app flex">
            <!-- <book-filter @filtered="setFilter" /> -->
            
            <email-navbar/>
            <!-- <router-link to="/addbooks">Add a Book</router-link>       -->
            <section>
            <email-list :emails="emails"  class="email-main-container" />
            </section>
            <!-- <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails"/> -->
            
            
        </section>
    `,
    data() {
        return {
            emails: [],
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



    },
    computed: {

    },
    components: {
        emailList,
        emailNavbar
        // bookList,
        // bookFilter,
        // bookDetails,
        // bookDescription

    }
};