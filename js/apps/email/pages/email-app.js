// import { bookService } from "../../../services/book-service.js";
import { emailService } from "../services/email-service.js";
import  emailList  from "../cmps/email-list.js"
import  emailNavbar  from "../cmps/email-navbar.js"
import emailCompose from '../cmps/email-compose.js';
import emailDetails from "./email-details.js";

export default {
    template: `
        <section class="email-app flex">
            <!-- <book-filter @filtered="setFilter" /> -->
            
            <email-navbar @composing="composing"></email-navbar>

                <email-details v-if="selectedEmail"  :email="selectedEmail" class="email-main-container" />
                <!-- <router-link to="/addbooks">Add a Book</router-link>       -->
                <email-list  @selected="selectEmail" :emails="emails"  class="email-main-container" />
            
        
        <email-compose @composing="composing" v-if="isComposing"></email-compose>
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
            console.log('composing');
            this.isComposing = !this.isComposing
        },
        selectEmail(email) {
            this.selectedEmail = email;
            this.$router.push(`email/${email.id}`);
        },



    },
    computed: {

    },
    components: {
        emailList,
        emailNavbar,
        emailCompose,
        emailDetails
        // bookList,
        // bookFilter,
        // bookDetails,
        // bookDescription

    }
};