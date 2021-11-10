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
            emails: [ {id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'}],
            selectedEmail: null,
            filterBy: null

        };
    },
    created() {
        // this.books = emailService.query()
        //     .then(books => this.books = books)
        // this.emails = emailService.email;
        // console.log(this.emails);

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